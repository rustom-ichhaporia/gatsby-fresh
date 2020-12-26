import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithubAlt, FaInstagram, FaTwitter, FaMediumM } from "@meronex/icons/fa";
import { SiGooglescholar } from "@meronex/icons/si";

const Icon = ({ name }) => {
    switch (name) {
        case 'Email':
            return <FaEnvelope />;
        case 'LinkedIn':
            return <FaLinkedinIn />;
        case 'GitHub':
            return <FaGithubAlt />;
        case 'Scholar':
            return <SiGooglescholar />;
        case 'Medium': 
            return <FaMediumM />;
        case 'Twitter':
            return <FaTwitter />;
        case 'Instagram':
            return <FaInstagram />;
        default: 
            return <FaEnvelope />;
    }
}

export default Icon;