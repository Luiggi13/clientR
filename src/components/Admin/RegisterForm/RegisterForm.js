import React from 'react';
import { Layout,Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import "./RegisterForm.scss"

export default function RegisterForm() {
    // <MenuOutlined />
    return (
        <Form className="register-form">
            <Form.Item>
                <Input
                prefix={<UserOutlined />}
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix={<LockOutlined />}
                type="password"
                name="password"
                placeholder="Contraseña"
                className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix={<LockOutlined />}
                type="password"
                name="repeatPassword"
                placeholder="Repetir contraseña"
                className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                name="privacyPolicy"
                >
                    He leído y acepto la política de privacidad
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    );
}