import React, {useState, useEffect} from 'react'
import { Row, Col, Form, Input, Button, DatePicker, notification } from "antd";
import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons';
import moment from "moment";
import { Editor } from "@tinymce/tinymce-react";
import { getAccessTokenApi } from '../../../../api/auth';

import "./AddEditPostForm.scss";

export default function AddEditPostForm(props) {
    const { setIsVisibleModal, setReloadPosts, post } = props;
    const [postData, setPostData] = useState({});

    useEffect(() => {
        if(post) {
            setPostData(post);
        } else {
            setPostData({});
        }
    }, [post])
    return (
        <div className="add-edit-post-form">
            <AddEditForm
                post={post}
                postData={postData}
                setPostData={setPostData}
            />
        </div>
    )
}

function AddEditForm(props) {
    const { post, postData, setPostData } = props;
    return (
        <Form className="add-edit-post-form" layout="inline">
        <Row gutter={24} className="add-edit-post-form__row">
            <Col span={8}>
            <Input
                prefix={<FontSizeOutlined/>}
                placeholder="Titulo"
                // value={postData.title}
                // onChange={e => setPostData({ ...postData, title: e.target.value })}
            />
            </Col>
            <Col span={8}>
            <Input
                prefix={<LinkOutlined/>}
                placeholder="url"
                // value={postData.url}
                // onChange={e =>
                //   setPostData({
                //     ...postData,
                //     url: transformTextToUrl(e.target.value)
                //   })
                // }
            />
            </Col>
            <Col span={8}>
            <DatePicker
                style={{ width: "100%" }}
                format="DD/MM/YYYY HH:mm:ss"
                placeholder="Fecha de publicación"
                showTime={ {defaultValue: moment("00:00:00", "HH:mm:ss") }}
                // value={postData.date && moment(postData.date)}
                // onChange={(e, value) =>
                //   setPostData({
                //     ...postData,
                //     date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()
                //   })
                // }
            />
            </Col>
      </Row>
        </Form>
    )
}