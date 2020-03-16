import React from 'react';
import { Link, withRouter } from "react-router-dom";
import {Layout, Menu} from "antd"
import { UserOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';

import "./MenuSider.scss"

function MenuSider(props) {
   const { menuCollapsed, location } = props;
   const { Sider } = Layout;
   console.log(location.pathname);
   

        return (
            <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[location.pathname]}
            //   defaultSelectedKeys={["1"]}
            >
                    <Menu.Item key="/admin">
                        <Link to={"/admin"}>
                        <HomeOutlined />
                            <span className="nav-text">Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/users">
                        <Link to={"/admin/users"}>
                        <UserOutlined />
                            <span className="nav-text">Usuarios</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/menu">
                        <Link to={"/admin/menu"}>
                        <UnorderedListOutlined />
                            <span className="nav-text">Menú web</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
}

export default withRouter(MenuSider);