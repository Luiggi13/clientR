import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification} from "antd";
import { LockOutlined, UserOutlined, MailOutlined} from '@ant-design/icons';
import { signUpAdminApi } from "../../../../api/user"
import { getAccessTokenApi } from "../../../../api/auth"

import "./AddUserForm.scss";

export default function AddUserForm(props) {
    const  { setIsVisibleModal, setReloadUsers} = props;
    const [userData, setUserData] = useState({});

    const addUser = event => {
        event.preventDefault();
        console.log(event)
    }
    return (
        <div className="add-user-form">
            <AddForm
            userData={userData}
            setUserData={setUserData}
            addUser={addUser}
             />
        </div>
    )
}

function AddForm(props) {
    const { userData, setUserData, addUser} = props;
    const { Option } = Select;

    return (
        <Form className="form-add" onSubmitCapture={addUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            value={userData.name}
                            placeholder="Nombre"
                            onChange={ e => {
                                 setUserData({ ...userData, name: e.target.value} );
                                }
                            }
                            className="add-user-form__input"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            value={userData.lastname}
                            placeholder="Apellidos"
                            onChange={ e => {
                                 setUserData({ ...userData, lastname: e.target.value} );
                                }
                            }
                            className="add-user-form__input"
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<MailOutlined />}
                            value={userData.email}
                            placeholder="Correo electrónico"
                            onChange={ e => {
                                 setUserData({ ...userData, email: e.target.value} );
                                }
                            }
                            className="add-user-form__input"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select placeholder="Selecciona un rol"
                        onChange={ e => { setUserData({ ...userData, role: e }) }
                        }
                        value={userData.role}
                        >
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
                            value={userData.password}
                            placeholder="Contraseña"
                            onChange={ e => {
                                 setUserData({ ...userData, password: e.target.value} );
                                }
                            }
                            className="add-user-form__input"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            value={userData.repeatPassword}
                            placeholder="Repetir contraseña"
                            onChange={ e => {
                                 setUserData({ ...userData, repeatPassword: e.target.value} );
                                }
                            }
                            className="add-user-form__input"
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
    )
}