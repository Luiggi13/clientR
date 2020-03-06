import React from 'react';
import { Button } from 'antd';
import Cllansola from "../../../assets/img/png/cllansola.png"
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined } from '@ant-design/icons';
import { logout } from  "../../../api/auth";

import "./MenuTop.scss"


export default function MenuTop(props) {
    
    const { menuCollapsed, setMenuCollapsed } = props;

    // return (
    //     <div className="menu-top">
    //         <div className="menu-top__left">
    //             <img className="menu-top__left-logo" src={Cllansola} alt="Fusito"/>
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

    function IconOpenSideBar() {
        
        if (menuCollapsed) {
            return <MenuUnfoldOutlined />;
        }
        return <MenuFoldOutlined />;
      }

      const logoutUser = () => {
        logout();
        window.location.reload();
      };

    return (
        <div className="menu-top">
          <div className="menu-top__left">
            <img
              className="menu-top__left-logo"
              src={Cllansola}
              alt="Christian Llansola"
            />
            <Button type="link" onClick={() => {setMenuCollapsed(!menuCollapsed);}}>
            {IconOpenSideBar()}
            </Button>
          </div>
          <div className="menu-top__right">
            {/* <Button type="link">
              <LogoutOutlined />
            </Button> */}
            <Button type="link" onClick={logoutUser}>
            <LogoutOutlined />
            </Button>
          </div>
        </div>
      );
}