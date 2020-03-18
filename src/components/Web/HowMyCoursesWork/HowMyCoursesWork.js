import React from 'react'
import { Row, Col, Card, Button } from "antd";
import { ClockCircleOutlined, KeyOutlined, MessageOutlined, UserOutlined, DollarOutlined, CheckCircleOutlined} from '@ant-design/icons';

import "./HowMyCoursesWork.scss";
export default function HowMyCoursesWork() {
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>¿Cómo funcionan mis cursos?</h2>
                <h3>Cada curso cuenta con contenido bajo la web de <b>Udemy</b>, activa las 24 horas
                    al día, los 365 días del año.
                </h3>
            </Col>
            <Col lg={4} />
            <Col lg={16} className="how-my-courses-work__title">
                <Row className="row-cards">
                <Col lg={8}>
                    <CardInfo
                    icon={<ClockCircleOutlined />}
                    title="Cursos y clases"
                    description="Nostrud ut irure duis culpa est ea quis duis dolore qui.Sunt adipisicing id mollit fugiat laboris dolor."
                    />
                </Col>
                <Col lg={8}>
                    <CardInfo
                    icon={<KeyOutlined />}
                    title="Acceso 24/7"
                    description="Non ullamco proident laborum occaecat aliqua sint nisi quis mollit officia mollit laborum nostrud."
                    />
                </Col>
                <Col lg={8}>
                    <CardInfo
                    icon={<MessageOutlined />}
                    title="Aprendizaje colaborativo"
                    description="Non ullamco proident laborum occaecat aliqua sint nisi quis mollit officia mollit laborum nostrud."
                    />
                </Col>
                </Row>
                <Row className="row-cards">
                <Col lg={8}>
                    <CardInfo
                    icon={<UserOutlined />}
                    title="Mejora tu perfil"
                    description="Eiusmod mollit elit reprehenderit nostrud occaecat aliquip elit amet irure."
                    />
                </Col>
                <Col lg={8}>
                    <CardInfo
                    icon={<DollarOutlined />}
                    title="Precios bajos"
                    description="Non ullamco proident laborum occaecat aliqua sint nisi quis mollit officia mollit laborum nostrud."
                    />
                </Col>
                <Col lg={8}>
                    <CardInfo
                    icon={<CheckCircleOutlined />}
                    title="Certificados de finalización"
                    description="Non ullamco proident laborum occaecat aliqua sint nisi quis mollit officia mollit laborum nostrud."
                    />
                </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    )
}


function CardInfo(props) {
    const { icon, title, description} = props;
    const { Meta } = Card;

    return (
        <Card className="how-my-courses-work__card">
            {icon}
            <Meta title={title} description={description} />
        </Card>       
    )
}