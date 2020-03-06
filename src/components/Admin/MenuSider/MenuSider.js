import React from 'react';
import { Link } from "react-router-dom";
import {Layout, Menu} from "antd"
import { HomeOutlined,UserOutlined, MenuOutlined } from '@ant-design/icons';

import "./MenuSider.scss"

export default function MenuSider(props) {
   const { menuCollapsed } = props;
   const { Sider } = Layout;

        return (
            <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["/admin/users"]}
            //   defaultSelectedKeys={["1"]}
            >
                    {/* <Menu.Item key="1">
                        <Link to={"/admin"}>
                        <HomeOutlined />
                            <span className="nav-text">Dashboard</span>
                        </Link>
                    </Menu.Item> */}
                    <Menu.Item key="/admin/users">
                        <Link to={"/admin/users"}>
                        <UserOutlined />
                            <span className="nav-text">Usuarios</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
}