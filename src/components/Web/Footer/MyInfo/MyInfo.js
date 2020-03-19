import React from 'react'
import Cllansola from "../../../../assets/img/png/cllansola.png"
import SocialLinks from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={Cllansola} alt="Christian" />
            <h4>Comparte y disfruta del conocimiento.</h4>
            <SocialLinks />
        </div>
    )
}
