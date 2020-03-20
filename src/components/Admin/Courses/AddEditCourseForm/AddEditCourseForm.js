import React, {useState, useEffect} from 'react'
import { Form, Input, Button, notification } from "antd";
import { KeyOutlined, GiftOutlined, DollarOutlined, LinkOutlined } from '@ant-design/icons';
import { getAccessTokenApi } from "../../../../api/auth";

import "./AddEditCourseForm.scss";

export default function AddEditCourseForm(props) {
    const { setReloadCourses, setIsVisibleModal, course } = props;
    const [courseData, setCourseData] = useState({});

    return (
        <div className="add-edit-course-form">
            <AddEditForm course={course}/>
        </div>
    )
}

function AddEditForm(props) {
    const { course } = props;
    // const course ="per";

    return(
        <Form className="form-add-edit" onSubmitCapture={() => console.log('add edit form')}>
            <Form.Item>
            <Input
                prefix={<KeyOutlined />}
                placeholder="ID del curso"
                disabled={course ? true : false}
                // onChange={}
                // value={}
            />
            </Form.Item>
            <Form.Item>
            <Input
                prefix={<GiftOutlined />}
                placeholder="Coupon"
                // onChange={}
                // value={}
            />
            </Form.Item>
            <Form.Item>
            <Input
                prefix={<DollarOutlined />}
                placeholder="Precio del curso"
                // onChange={}
                // value={}
            />
            </Form.Item>
            <Form.Item>
            <Input
                prefix={<LinkOutlined />}
                placeholder="Url del curso"
                // onChange={}
                // value={}
            />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" className="btn-submit">
                { course? "Actualizar curso" : "Crear Curso"}
            </Button>
            </Form.Item>
        </Form>
    )
}