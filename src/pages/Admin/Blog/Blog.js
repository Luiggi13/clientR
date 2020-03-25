import React, { useState, useEffect } from 'react';
import { Button, notification } from "antd";
import { Link, withRouter } from "react-router-dom";
import Modal from "../../../components/Modal";
import PostsList from "../../../components/Admin/Blog/PostsList";
import Pagination from '../../../components/Pagination/Pagination';
import queryString from "query-string";
import { getPostsApi } from '../../../api/post';


import "./Blog.scss";
function Blog(props) {
    const { location, history } = props;
    
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [reloadPosts, setReloadPosts] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [posts, setPosts] = useState(null);
    const { page = 1 } = queryString.parse(location.search);

    useEffect(() => {
        getPostsApi(7, page)
          .then(response => {
            if (response?.code !== 200) {
              notification["warning"]({
                message: response.message
              });
            } else {
              setPosts(response.posts);
            }
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor."
            });
          });
        setReloadPosts(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [page, reloadPosts]);
if (!posts) {
    return null
}
    return (
        <div className="blog">
            <div className="blog__add-post">
                <Button type="primary">
                    Nuevo post
                </Button>
            </div>
            <PostsList posts={posts} setReloadPosts={setReloadPosts}
            />
            <Pagination posts={posts } location={location} history={history} />
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                width="75%"
            />
        </div>
    )
}


export default withRouter(Blog);