import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import "./LayoutAdmin.scss"
// const { Header, Footer, Sider, Content } = Layout;

export default function LayoutAdmin(props) {
    const { Header, Content, Footer} = Layout;
    const { routes } = props; 
    // console.log(props);     

    return (
        <Layout>
            {/* TO DO: Menu Sisdebar */}
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    {/* TO DO: Menu top */}
                </Header>
                <Content className="layout-admin__content">
                    <LoadRoutes routes= {routes} />
                </Content>
                <Footer className="layout-admin__footer">Christian 2019</Footer>
            </Layout>
        </Layout>

    )
}

function LoadRoutes({routes}) {

    return (
        <Switch>
            {routes.map((route,index) => (
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
            />
        ))}
        </Switch>
    );
}