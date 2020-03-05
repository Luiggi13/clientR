import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import {SmileOutlined, MailOutlined, UserOutlined,LockOutlined } from '@ant-design/icons';
import {
  emailValidation,
  minLengthValidation
} from "../../../utils/formValidation";
import { signUpApi } from "../../../api/user";

import "./RegisterForm.scss";

export default function RegisterForm() {
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false
  });
  const [formValid, setFormValid] = useState({
    name: false,
    lastname: false,
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false
  });

  const changeForm = e => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      });
    }
  };

  const inputValidation = e => {
    const { type, name } = e.target;

    if (type === "name") {
        setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 3) });
    }
    if (type === "lastname") {
        setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 3) });
    }
    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
    }
    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };

  const register = async e => {
    e.preventDefault();
 
    const nombreVal = inputs.name;
    const lastnameVal = inputs.lastname;
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;
    const privacyPolicyVal = inputs.privacyPolicy;
    console.log(inputs);
    if ( !nombreVal || !lastnameVal|| !emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
      notification["error"]({
        message: "Todos los campos son obligatorios"
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales."
        });
      } else {
        const result = await signUpApi(inputs);
        if (!result.ok) {          
          notification["error"]({
            message: result.message
          });
        } else {
          notification["success"]({
            message: result.message,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />
          });
          resetForm();
        }
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setInputs({
      name: "",
      lastname: "",
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false
    });

    setFormValid({
      name: false,
      lastname: false,
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false
    });
  };

  return (
    <Form className="register-form" onSubmitCapture={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="name"
          name="name"
          placeholder="Nombre usuario"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.name}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="lastname"
          name="lastname"
          placeholder="Apellidos"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.lastname}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<MailOutlined />}
          type="email"
          name="email"
          placeholder="Correo electronico"
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
          He leído y acepto la política de privacidad.
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
