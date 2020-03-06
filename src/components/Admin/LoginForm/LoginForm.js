import React, { useState } from 'react';
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {signInApi} from "../../../api/user"
import { ACCESS_TOKEN, REFRESH_TOKEN} from "../../../utils/constants"
import "./LoginForm.scss"

export default function LoginForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
      });


    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const login = async e => {
        e.preventDefault();
        const result = await signInApi(inputs);
        
        if (result.message) {
            notification["error"]({
                message: result.message
            });
        } else {
            const { accessToken, refreshToken, user } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
            notification["success"]({
                message: `Bienvenido  ${user.name}`
            });
            window.location.href = "/admin";
        }
        
        
    }
    return (
        <Form className="login-form" onSubmitCapture={login} onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined />}
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="login-form__button">
                    Iniciar sesión
                </Button>
            </Form.Item>
        </Form>
    )
}