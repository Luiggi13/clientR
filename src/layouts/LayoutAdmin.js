import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import "./LayoutAdmin.scss"
// const { Header, Footer, Sider, Content } = Layout;

export default function LayoutAdmin(props) {
    const { Header, Content, Footer} = Layout;
    const { routes } = props; 
    // console.log(props);     

    return (
        <Layout>
            <h2>Menu sidebar</h2>
            <Layout>
                <Header className="header__layout--admin">Header</Header>
                <Content>
                    <LoadRouters routes= {routes} />
                </Content>
                <Footer>Christian 2019</Footer>
            </Layout>
        </Layout>

    )
}

function LoadRouters({routes}) {

    return routes.map((route,index) => (
        <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
        />
    ));
}