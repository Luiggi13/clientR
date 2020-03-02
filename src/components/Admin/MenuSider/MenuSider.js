import React from 'react';
import { Link } from "react-router-dom";
import {Layout, Menu, Icon} from "antd"

import "./MenuSider.scss"

export default function MenuSider() {
    const Sider = Layout;

        return (
            <Sider className="admin-sider">
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <h2 className="title__web">Website admin</h2>
                    <Menu.Item key="1">
                        <Link to={"/admin"}>
                            <Icon type="home" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={"/admin/menu-web"}>
                            <Icon type="menu" />
                            <span className="nav-text">Menu Web</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
}