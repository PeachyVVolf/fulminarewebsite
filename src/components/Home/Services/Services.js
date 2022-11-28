import React, { Fragment, useState, useEffect } from 'react';
import './Services.css';
import { DesignServicesOutlined, LanguageOutlined, CampaignOutlined, PhoneAndroidOutlined, SearchOutlined, ColorLensOutlined } from '@mui/icons-material'

const Services = () => {
    const [scroll, setScroll] = useState(false);
    const [scroll1, setScroll1] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 2620);
        setScroll1(window.scrollY > 2750);
      });
    }, []);

    return (
        <Fragment>
            <div className='container'>
                <br/><br/>
                <div id="services" className={`row servicesHeading ${scroll ? 'fadeIn': ''}`}>
                    <h1>OUR <span>SERVICES</span></h1>
                    <span className='smallBorder'></span>
                </div>
                <br/><br/>
                <div className='row'>
                    <div className='row'>
                        <div className={`col-lg-4 col-sm-12 serviceItem ${scroll1 ? 'fadeIn':''}`}>
                            <DesignServicesOutlined/>
                            <div>
                                <h4>Web Design & Development</h4>
                                <p>We create custom websites for your business, from portfolio and restaurant
                                    websites to full on e-commerce stores and management systems.
                                </p>
                            </div>
                        </div>
                        <div className={`col-lg-4 col-sm-12 serviceItem ${scroll1 ? 'fadeIn1':''}`}>
                            <LanguageOutlined/>
                            <div>
                                <h4>Branding</h4>
                                <p>Want to create a brand identity? or just want to create a product packaging 
                                    that attracts customers? Well, don't worry. We got you.
                                </p>
                            </div>
                        </div>
                        <div className={`col-lg-4 col-sm-12 serviceItem ${scroll1 ? 'fadeIn2':''}`}>
                            <CampaignOutlined/>
                            <div>
                                <h4>Campaign</h4>
                                <p>We can offer creative and unique campaign ideas with complete company/product 
                                    branding. <br/>Campaigns that would even attract Zeus, the God of Lightning.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className={`col-lg-4 col-sm-12 serviceItem ${scroll1 ? 'fadeIn':''}`}>
                            <PhoneAndroidOutlined/>
                            <div>
                                <h4>Mobile Apps</h4>
                                <p>An optimized, user-friendly mobile app that makes your customers happy. <br/>That 
                                    sounds pretty good, doesn't it? Well, we got that aswell.
                                </p>
                            </div>
                        </div>
                        <div className={`col-lg-4 col-sm-12 serviceItem ${scroll1 ? 'fadeIn1':''}`}>
                            <SearchOutlined/>
                            <div>
                                <h4>SEO Services</h4>
                                <p>Without good SEO, your website would just hide behind the dark storm clouds. 
                                    Our SEO is like lightning, shines through everything.
                                </p>
                            </div>
                        </div>
                        <div className={`col-lg-4 col-sm-12 serviceItem ${scroll1 ? 'fadeIn2':''}`}>
                            <ColorLensOutlined/>
                            <div>
                                <h4>Content Creation</h4>
                                <p>Take our crazy artists and strike them with lightning, you get astonishing
                                     content and interested customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Services;