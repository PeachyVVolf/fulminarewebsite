import React, { Fragment, useState, useEffect } from 'react';
import './AboutUs.css';
import { WorkOutlineOutlined, TimelineOutlined, TrackChangesOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import subAboutImg from '../../../images/bg-side-1.jpg';

const AboutUs = () => {
    const [scroll, setScroll] = useState(false);
    const [scroll1, setScroll1] = useState(false);
    const [scroll2, setScroll2] = useState(false);
    const [scroll3, setScroll3] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 150);
        setScroll1(window.scrollY > 350);
        setScroll2(window.scrollY > 600);
        setScroll3(window.scrollY > 780);
      });
    }, []);

    return (
        <Fragment>
            <div className='container'>
                <div id="about" className={`row aboutUsHeading ${scroll ? 'fadeIn': ''}`}>
                    <h1>WHO WE <span>ARE?</span></h1>
                    <span className='smallBorder'></span>
                </div>
                <br/><br/>
                <div className={`row ${scroll1 ? 'fadeIn': ''}`}>
                    <div className="col-lg-3 col-md-12 aboutUsItem">
                        <div className='insideAboutItem'>
                            <WorkOutlineOutlined/>
                            <h4>Our Portfolio</h4>
                            <p>Our Recent Works</p>
                        </div>
                        <div className="overlay">
                            <div className="text">Check out our Portfolio</div>
                            <a href='#works'>Portfolio</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 aboutUsItem">
                        <div className='insideAboutItem'>
                            <TimelineOutlined/>
                            <h4>Experiences</h4>
                            <p>What We Have Done</p>
                        </div>
                        <div className="overlay">
                            <div className="text">Wanna see what we have worked on?</div>
                            <a href='#'>Experiences</a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 aboutUsItem'>
                        <div className='insideAboutItem'>
                            <TrackChangesOutlined/>
                            <h4>Our Vision</h4>
                            <p>View Our Story</p>
                        </div>
                        <div className="overlay">
                            <div className="text">Wanna hear our Story?</div>
                            <a href='#vision'>Vision</a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 aboutUsItem'>
                        <div className='insideAboutItem'>
                            <FavoriteBorderOutlined/>
                            <h4>Happy Clients</h4>
                            <p>What They Say</p>
                        </div>
                        <div className="overlay">
                            <div className="text">Check out all the happy customers</div>
                            <a href="#testimonials">Happy Clients</a>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
            
            <div id="vision" className={`row subAbout`}>
                <div className={`col-md-5 subAboutImg`}>
                    <img className={`${scroll2 ? 'fadeInSideLeft': ''}`} src={subAboutImg} alt='subAboutImg' />
                </div>
                <div className={`col-md-7 col-sm-12 subAboutText`}>
                    <div className={`row ${scroll3 ? 'fadeInSideRight': ''}`}>
                        <div className='col-md-2 col-sm-12'></div>
                        <div className='col-md-9 col-sm-12'>
                            <h2>We are group of professionals focused on making creative and innovative works</h2>
                            <p>We are all from seperate fields and backgrounds, and we came together to fight for 
                                our dream and from that dream Fulminare was born.
                                Fulminare is a one-stop solution for all your business needs. All you need is one strike of 
                                lightning and Fulminare to get your business running and into the market.
                            </p>
                        </div>
                        <div className='col-1'></div>
                    </div>
                    <div className={`row ${scroll3 ? 'fadeInSideRight': ''}`}>
                        <div className='col-md-2'></div>
                        <div className='col-md-4 col-sm-12'>
                            <h4>Our Vision</h4>
                            <p>Without thunder lightning won't be so impactful, just like a business isn't so
                                impactful without the proper marketing and strategy. Fulminare can provide you
                                that thunder.
                            </p>
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-4 col-sm-12'>
                            <h4>Our Mission</h4>
                            <p>Be the <strong>lightning</strong> to your <strong>customers,</strong> through the dark clouds of <strong>business confusion</strong>.
                            </p>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutUs;