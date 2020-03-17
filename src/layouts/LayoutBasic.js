import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import MenuTop from "../components/Web/MenuTop";

import "./LayoutBasic.scss"


export default function LayoutBasic(props) {
    const { Footer} = Layout;
    const { routes } = props; 
  
    return (
        <Row>
            <Col lg={4} />
            <Col lg={16}>
                <MenuTop/>
                <LoadRoutes routes={routes} />
                <Footer>Christian 2019</Footer>
            </Col>
            <Col lg={4} />
        </Row>
    )
  
    // return (
    //     <Layout>
    //         <h2>Menu sidebar</h2>
    //         <Layout>
    //             <Content>
    //                 <LoadRoutes routes={routes} />
    //             </Content>
    //             <Footer>Christian 2019</Footer>
    //         </Layout>
    //     </Layout>

    // )
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