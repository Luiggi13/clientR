import React, { useState,useEffect } from "react";
import { Form, Input, Select, Button, Row, Col, notification} from "antd";
import { LockOutlined, UserOutlined, MailOutlined} from '@ant-design/icons';
import { signUpAdminApi } from "../../../../api/user"
import { getAccessTokenApi } from "../../../../api/auth"
import {
    minLengthValidation, emailValidation
  } from "../../../../utils/formValidation";
import "./AddUserForm.scss";

export default function AddUserForm(props) {
    const  { setIsVisibleModal, setReloadUsers} = props;
    const [userData, setUserData] = useState({});
    const [inputs, setInputs] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        role: ""
      });
      const [formValid, setFormValid] = useState({
        name: false,
        lastname: false,
        email: false,
        password: false,
        repeatPassword: false,
        role: false
      });
      useEffect(() => {
        setUserData({
          name: inputs.name,
          lastname: inputs.lastname,
          email: inputs.email,
          password: inputs.role,
          role: inputs.avatar,
        });
      }, [inputs]);
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
        if (type === "text") {
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
    
      const register = e => {
        e.preventDefault();
        
        const nombreVal = inputs.name;
        const lastnameVal = inputs.lastname;
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;
        const role = inputs.role;
        
        // console.log(inputs);
        if ( !nombreVal || !lastnameVal|| !emailVal || !passwordVal || !repeatPasswordVal || !role) {
            console.log(inputs);
            
          notification["error"]({
            message: "Todos los campos son obligatorios"
          });
        } else {
          if (passwordVal !== repeatPasswordVal) {
            notification["error"]({
              message: "Las contraseñas tienen que ser iguales."
            });
          } else {
            const accessToken = getAccessTokenApi();
            
            console.log(inputs);
            signUpAdminApi(accessToken, inputs)
                .then( response => {
                    notification["success"]({
                        message: response
                    });
                    setIsVisibleModal(false);
                    setReloadUsers(true);
                    resetForm();
                    setUserData({});
                })
                .catch(err => {
                    notification["error"]({
                        message: err
                    });
                })
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
          repeatPassword: ""
        });
    
        setFormValid({
          name: false,
          lastname: false,
          email: false,
          password: false,
          repeatPassword: false
        });
      };
      const { Option } = Select;
      return (
        <Form className="form-add" onSubmitCapture={register} onChange={changeForm}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                        prefix={<UserOutlined />}
                        type="text"
                        name="name"
                        placeholder="Nombre usuario"
                        onChange={inputValidation}
                        value={inputs.name}
                        />
                    </Form.Item>
                </Col>
            <Col span={12}>
                <Form.Item>
                    <Input
                        prefix={<UserOutlined />}
                        type="text"
                        name="lastname"
                        placeholder="Apellidos"
                        onChange={inputValidation}
                        value={inputs.lastname}
                    />
                </Form.Item>
            </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                      <Input
                        prefix={<MailOutlined />}
                        type="email"
                        name="email"
                        placeholder="Correo electronico"
                        onChange={inputValidation}
                        value={inputs.email}
                      />
                    </Form.Item>
                </Col>
                <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Selecciona un rol"
              onChange={e => {setInputs({ ...inputs, role: e });console.log(e);}}
              value={inputs.role}
            >
              <Option value="">Selecciona un rol</Option>
              <Option value="admin">Administrador</Option>
              <Option value="editor">Editor</Option>
              <Option value="reviewer">Revisor</Option>
            </Select>
          </Form.Item>
        </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                <Form.Item>
            <Input
              prefix={<LockOutlined />}
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={inputValidation}
              value={inputs.password}
            />
          </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item>
            <Input
              prefix={<LockOutlined />}
              type="password"
              name="repeatPassword"
              placeholder="Repetir contraseña"
              onChange={inputValidation}
              value={inputs.repeatPassword}
            />
          </Form.Item>
                </Col>
            </Row>
         


          <Form.Item>
            <Button type="primary" htmlType="submit" className="add-user__btn-submit">
              Crear usuario
            </Button>
          </Form.Item>
        </Form>
      );
}