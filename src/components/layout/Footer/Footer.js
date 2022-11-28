import React, { Fragment } from 'react';
import './Footer.css';
import { Facebook, Email, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Fragment>
            <div className={`footer row`}>
                <div className={`footerSocials`}>
                    <ul>
                        <li><a href='https://www.instagram.com/fulminare_studio_/'><Instagram/></a></li>
                        <li><a href='https://www.linkedin.com/company/fulminare-studio'><LinkedIn/></a></li>
                        <li><a href='mailto:fulminarestudio@gmail.com'><Email/></a></li>
                        <li><a href='https://www.facebook.com/Fulminare-104010465622712'><Facebook/></a></li>
                    </ul>
                    <p>&copy; Copyright 2022 - Fulminare Studios</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer