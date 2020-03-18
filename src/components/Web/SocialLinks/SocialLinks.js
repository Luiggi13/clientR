import React, { useState, useEffect } from 'react';
import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="http://youtube.com" className="youtube" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon />
            </a>
            <a href="http://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
            </a>
            <a href="http://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
            </a>
            <a href="http://linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
            </a>
        </div>
    )
}