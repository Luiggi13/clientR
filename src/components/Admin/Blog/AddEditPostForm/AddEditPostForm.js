import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Input, Button, DatePicker, notification } from "antd";
import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons';
import moment from "moment";
import { Editor } from "@tinymce/tinymce-react";
import { getAccessTokenApi } from '../../../../api/auth';
import { addPostApi } from '../../../../api/post';

import "./AddEditPostForm.scss";

export default function AddEditPostForm(props) {
    const { setIsVisibleModal, setReloadPosts, post } = props;
    const [postData, setPostData] = useState({});

    useEffect(() => {
        if (post) {
            setPostData(post);
        } else {
            setPostData({});
        }
    }, [post]);

    const processPost = e => {
        e.preventDefault();
        const { title, url, description, date } = postData;

        if (!title || !url || !description || !date) {
            notification["error"]({
                message: "Todos los campos son obligatórios"
            });
        } else {
            if (!post) {
                addPost();
                console.log(postData);
            } else {
                console.log("Editando post");
                console.log(postData);
            }
        }

    }

    const addPost = () => {
        const token = getAccessTokenApi();

        addPostApi(token, postData).then(response => {
            const typeNotification =
                response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
                message: response.message
            });
            setIsVisibleModal(false);
            setReloadPosts(true);
            setPostData({});
        })
            .catch(() => {
                notification["error"]({
                    message: "Error del servidor, intentelo más tarde."
                });
            });
    }
    return (
        <div className="add-edit-post-form">
            <AddEditForm
                post={post}
                postData={postData}
                setPostData={setPostData}
                processPost={processPost}
            />
        </div>
    )
}

function AddEditForm(props) {
    const { post, postData, setPostData, processPost } = props;
    return (
        <Form className="add-edit-post-form" layout="inline" onSubmitCapture={processPost}>
            <Row gutter={24} className="add-edit-post-form__row">
                <Col md={8}>
                    <Input
                        prefix={<FontSizeOutlined />}
                        placeholder="Titulo"
                        value={postData.title}
                        onChange={e => setPostData({ ...postData, title: e.target.value })}
                    />
                </Col>
                <Col md={8}>
                    <Input
                        prefix={<LinkOutlined />}
                        placeholder="url"
                        value={postData.url}
                        onChange={e =>
                            setPostData({
                                ...postData,
                                url: transformTextToUrl(e.target.value)
                            })
                        }
                    />
                </Col>
                <Col md={8}>
                    <DatePicker
                        style={{ width: "100%" }}
                        format="DD/MM/YYYY HH:mm:ss"
                        placeholder="Fecha de publicación"
                        showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                        value={postData.date && moment(postData.date)}
                        onChange={(e, value) =>
                            setPostData({
                                ...postData,
                                date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()
                            })
                        }
                    />
                </Col>
            </Row>
            <Editor
                initialValue={postData.description ? postData.description : ""}
                init={{
                    height: 400,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
                }}
                onBlur={e => setPostData({ ...postData, description: e.target.getContent() })}
            />
            <Button type="primary" className="btn-submit" htmlType="submit">
                {post ? "Actualizar post" : "Crear post"}
            </Button>
        </Form>
    )
}

function transformTextToUrl(text) {
    const url = text.replace(" ", "-");
    return url.toLowerCase();
}