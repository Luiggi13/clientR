import React from 'react'
import { List, Button, Modal, notification } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { getAccessTokenApi } from '../../../../api/auth';
import { deletePostApi } from '../../../../api/post';

import "./PostsList.scss";

const { confirm } = Modal;

export default function PostsList(props) {
    const { posts, setReloadPosts, editPost } = props;

    const deletePost = post => {
        const accessToken = getAccessTokenApi();
        // deletePostApi(post._id).then(response => {
        //     notification
        // })

        confirm({
            title: "Eliminando post",
            content: `¿Estás seguro de que quieres eliminar el post ${post.idCourse}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
              deletePostApi(accessToken, post._id)
                .then(response => {
                  const typeNotification =
                    response.code === 200 ? "success" : "warning";
                  notification[typeNotification]({
                    message: response.message
                  });
                  setReloadPosts(true);
                })
                .catch(() => {
                  notification["error"]({
                    message: "Error del servidor, intentelo más tarde."
                  });
                });
            }
          });

    }

    
    return (
        <div className="posts-list">
            <List 
            dataSource={posts.docs}
            renderItem={post => <Post post={post}
            deletePost={deletePost}
            editPost={editPost}
            />}
            />
        </div>
    )
}



function Post(props) {
    const { post, deletePost, editPost } = props;    

    return (
        <List.Item
            actions={[
                <Link to={`/blog/${post.url}`} target="_blank">
                    <Button type="primary">
                        <EyeOutlined />
                    </Button>
                </Link>,
                <Button type="primary" onClick={() => editPost(post)}>
                    <EditOutlined />
                </Button>,
                <Button type="danger" onClick={() => deletePost(post)}>
                    <DeleteOutlined />
                </Button>
            ]}
        >
            <List.Item.Meta title={post.title} />
        </List.Item>
    )
}