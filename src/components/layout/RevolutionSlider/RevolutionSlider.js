import React, { Fragment } from 'react';
import './RevolutionSlider.css';
import Carousel from 'react-bootstrap/Carousel'
import wide1 from '../../../slider-images/wide1.jpg';
import wide2 from '../../../slider-images/wide2.jpg';
import wide3 from '../../../slider-images/wide3.jpg';

const RevolutionSlider = () => {
    return (
        <Fragment>
            <Carousel>
                <Carousel.Item>
                    <div className='carouselImg'>
                        <img
                        className="d-block w-100"
                        src={wide1}
                        alt="First slide"
                        />
                    </div>
                    <div className='carouselCaption'>
                        <div className='captionP'><p>WE CREATE</p></div>
                        <div className='captionH'>
                            <h1>AWESOME WORKS</h1>
                            <a href='#works'>OUR PORTFOLIO</a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carouselImg'>
                        <img
                        className="d-block w-100"
                        src={wide2}
                        alt="First slide"
                        />
                    </div>
                  
                    <div className='carouselCaptionC'>
                        <div className='captionP'><p>WE HELP</p></div>
                        <div className='captionH'>
                            <h1>YOUR BUSINESS GROW</h1>
                            <a href='#contact'>HIRE US NOW</a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carouselImg'>
                        <img
                        className="d-block w-100"
                        src={wide3}
                        alt="First slide"
                        />
                    </div>

                    <div className='carouselCaptionB'>
                        <div className='captionP'><p>SPECIALIZE ON</p></div>
                        <div className='captionH'>
                            <h1>WEB & MOBILE APPS</h1>
                            <a href='#contact'>HIRE US NOW</a>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Fragment>
    );
};

export default RevolutionSlider