import React from 'react';
import { Button } from 'antd';
import FusoLogo from "../../../assets/img/png/cllansola.png"
import { MenuFoldOutlined, LogoutOutlined } from '@ant-design/icons';

import "./MenuTop.scss"


export default function MenuTop(props) {
    
    const { menuCollapsed, setMenuCollapsed } = props;

    // return (
    //     <div className="menu-top">
    //         <div className="menu-top__left">
    //             <img className="menu-top__left-logo" src={FusoLogo} alt="Fusito"/>
    //             <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
    //             <MenuFoldOutlined />
    //             </Button>
    //         </div>
    //         <div className="menu-top__right">
    //         <Button type="link" onClick={ () => console.log("asdas") }>
    //         <LogoutOutlined />
    //             </Button>
    //         </div>
    //     </div>
    // )
    return (
        <div className="menu-top">
          <div className="menu-top__left">
            <img
              className="menu-top__left-logo"
              src={FusoLogo}
              alt="Christian Llansola"
            />
            <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
              <MenuFoldOutlined />
            </Button>
          </div>
          <div className="menu-top__right">
            <Button type="link">
              <LogoutOutlined />
            </Button>
          </div>
        </div>
      );
}