import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";
import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import cssGrid from "../../../assets/img/jpg/css-grid.jpg";

import "./HomeCourses.scss";

export default function HomeCourses(props) {
    
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4}></Col>
            <Col lg={16}>
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourse
                         image={reactJsHooks}
                         title="Hooks"
                         subtitle="Intermedio React/JS"
                         link="http://himmel.es/curso/1"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                         image={reactNative}
                         title="React Native"
                         subtitle="Intermedio React/JS"
                         link="http://himmel.es/curso/2"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                         image={javaScript}
                         title="JavaScript ES6"
                         subtitle="Básico JavaScript"
                         link="http://himmel.es/curso/3"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                         image={wordPress}
                         title="WordPress"
                         subtitle="Básico Wordpress/PHP"
                         link="http://himmel.es/curso/4"
                        />
                    </Col>

                </Row>
                <Row className="row-courses">
                <Col md={6}>
                    <CardCourse
                        image={prestaShop}
                        title="PrestaShop 1.7"
                        subtitle="Básico PrestaShop"
                        link="http://himmel.es/curso/5"
                    />
                </Col>
                <Col md={6}></Col>
                <Col md={6}></Col>
                <Col md={6}>
                    <CardCourse
                        image={cssGrid}
                        title="cssGrid"
                        subtitle="Básico CSS"
                        link="http://himmel.es/curso/6"
                    />
                </Col>
                </Row>
            </Col>
            <Col lg={4}></Col>
        </Row>
    )
}


function CardCourse(props) {
    const {image,title,subtitle,link} = props;
    const { Meta } = Card

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card className="home-courses__card"
            cover={<img src={image} alt={title} />}
            actions={[<Button>Ver curso</Button>]}
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    )
}