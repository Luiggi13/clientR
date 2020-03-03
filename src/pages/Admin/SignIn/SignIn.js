import React from 'react';
import { Layout, Tabs} from "antd";
import { Redirect } from 'react-router-dom';
import Cllansola from "../../../assets/img/png/cllansola.png"
import RegisterForm from "../../../components/Admin/RegisterForm";


import "./SignIn.scss"

export default function SignIn () {
    const { Content } = Layout;
    const { TabPane } = Tabs;
    
    return(
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content-logo">
                    <img className="menu-top__left-logo" src={Cllansola} alt="Christian Llansola Llopis"/>
                </h1>
                <div className="sign-in__content-tabs">
                    <Tabs type="card" defaultActiveKey="2">
                        <TabPane tab={<span>Entrar</span>} key ="1">
                            Componente LoginForm
                        </TabPane>
                        <TabPane tab={<span>Nuevo usuario</span>} key ="2" >
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
}