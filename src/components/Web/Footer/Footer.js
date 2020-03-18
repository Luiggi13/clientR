import React from 'react'
import { Layout, Row, Col } from "antd";
// import { ClockCircleOutlined, KeyOutlined, MessageOutlined, UserOutlined, DollarOutlined, CheckCircleOutlined} from '@ant-design/icons';
import MyInfo from "./MyInfo";
import "./Footer.scss";
export default function Footer() {
    const { Footer } = Layout;
    return (
        <Footer className="footer">
            <Row>
                <Col md={4} />
                <Col md={16}>
                    <Row>
                        <Col md={8}><MyInfo /></Col>
                        <Col md={8}>Navegación</Col>
                        <Col md={8}>newsletter</Col>
                    </Row>
                    <Row className="footer__copyright">
                        <Col md={12}>© 2019 ALL RIGHTS RESERVED</Col>
                        <Col md={12}>Christian Llansola Llopis | Front End Dev.</Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </Footer>
    )
}
