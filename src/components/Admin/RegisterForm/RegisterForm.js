import React, { useState } from 'react';
import { Layout,Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { emailValidation, minLengthValidation} from "../../../utils/formValidation";
import "./RegisterForm.scss"

export default function RegisterForm() {

    const [inputs, setInputs] = useState({
        email:"",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    });
    
    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    });

    const changeForm = e => {
        if( e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]:e.target.checked
            })
        } else {
            setInputs({
                ...inputs,
                [e.target.name]:e.target.value
            })
        }
    };

    const inputValidation = e => {
        const { type, name} = e.target;
        
        if ( type === "email" ) { setFormValid({...formValid, [name]: emailValidation(e.target) }) }
        if ( type === "password" ) { setFormValid({...formValid, [name]: minLengthValidation(e.target, 6) }) }
        if ( type === "checkbox" ) { setFormValid({...formValid, [name]: e.target.checked }) }
        
    }

    const register = (e) => {
        e.preventDefault();
        const { email, password, repeatPassword, privacyPolicy }  = formValid;
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;
        const privacyPolicyVal = inputs.privacyPolicy;
        
        if ( !emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal ) {
            notification['error']({
                message: "Todos los mensajes son obligatórios",
                duration: 3
            })
        } else {
            if (passwordVal !== repeatPasswordVal) {
                notification['error']({
                    message: "Las contraseñas tienen que ser iguales",
                    duration: 3
                })
            } else {
                // TODO: conectar api y registrar el user
                
            }
        }
    }
    
    return (
        <Form className="register-form" onSubmitCapture={register} onChange={changeForm}>
            <Form.Item>
                <Input
                prefix={<UserOutlined />}
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="register-form__input"
                onChange={inputValidation}
                value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix={<LockOutlined />}
                type="password"
                name="password"
                placeholder="Contraseña"
                className="register-form__input"
                onChange={inputValidation}
                value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix={<LockOutlined />}
                type="password"
                name="repeatPassword"
                placeholder="Repetir contraseña"
                className="register-form__input"
                onChange={inputValidation}
                value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                name="privacyPolicy"
                onChange={inputValidation}
                checked={inputs.privacyPolicy}
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