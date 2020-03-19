import React from 'react'
import { Row, Col } from "antd";
import { DatabaseOutlined, BookOutlined, CodeOutlined, RightOutlined,
HddOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import "./NavigationFooter.scss";

export default function NavigationFooter() {
    return (
        <Row className="navigation-footer">
            <Col md={24}>
                <h3>Navegación</h3>
            </Col>
            <Col md={12}>
                <RenderListLeft />
            </Col>
            <Col md={12}>
                <RenderListRight />
            </Col>
        </Row>
    )
}

function RenderListLeft() {
    return (
        <ul>
            <li>
                <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">
                    <BookOutlined /> Cursos online
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <CodeOutlined /> Desarrollo Web
                </Link>
            </li>
            <li>
                <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">
                    <DatabaseOutlined /> Base de datos
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <RightOutlined /> Política de privacidad
                </Link>
            </li>
        </ul>
    )
}
function RenderListRight() {
    return (
        <ul>
            <li>
                <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">
                    <HddOutlined /> Sistemas / Servidores
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <AppstoreOutlined /> E-commerce
                </Link>
            </li>
            <li>
                <a href="http://www.google.es" target="_blank" rel="noopener noreferrer">
                    <UserOutlined /> Portfolio
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <RightOutlined /> Cookies
                </Link>
            </li>
        </ul>
    )
}
