import React from 'react';
import { Form, Input, Button, notification } from "antd";
import { SmileOutlined, MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

import "./LoginForm.scss"

export default function LoginForm() {
    return (
        <Form className="login-form">
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