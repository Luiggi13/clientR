import React from 'react';
import { Button, Icon } from 'antd';
import FusoLogo from "../../../assets/img/png/cllansola.png"
import "./MenuTop.scss"


export default function MenuTop() {
    
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" src={FusoLogo} alt="Fusito"/>
                <Button type="link" onClick={ () => console.log("asdas") }>
                    <Icon type="menu-fold"/>
                </Button>
            </div>
            <div className="menu-top__right">
            <Button type="link" onClick={ () => console.log("asdas") }>
                    <Icon type="poweroff"/>
                </Button>
            </div>
        </div>
    )
}