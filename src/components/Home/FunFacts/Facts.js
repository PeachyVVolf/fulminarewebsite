import React, { Fragment, useState, useEffect } from 'react';
import './Facts.css';
import { Alarm, ArticleOutlined, ColorLensOutlined, CoffeeOutlined } from '@mui/icons-material';
import Counter from './Counter';

const Facts = () => {
    const [scroll, setScroll] = useState(false);
    const [scroll1, setScroll1] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 2100);
        setScroll1(window.scrollY > 2300);
      });
    }, []);

    return (
        <Fragment>
            <div className="parallax">
                <div className='container'>
                    <br/><br/>
                    <div id="team" className={`row FactsHeading ${scroll ? 'fadeIn': ''}`}>
                        <h1>FUN <span>FACTS</span></h1>
                        <span className='smallBorder'></span>
                    </div>
                    <div className={`row FactsItems ${scroll1 ? 'fadeIn': ''}`}>
                        <div className='col-lg-3 col-sm-12'>
                            <Alarm/>
                            {scroll1 ? (
                                <Counter range={1280} />
                            ):(
                                <Fragment></Fragment>
                            )}
                            <p>HOURS OF WORK</p>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <ArticleOutlined/>
                            {scroll1 ? (
                                <Counter range={2747} />
                            ):(
                                <Fragment></Fragment>
                            )}
                            <p>LINES OF CODE</p>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <ColorLensOutlined/>
                            {scroll1 ? (
                                <Counter range={726} />
                            ):(
                                <Fragment></Fragment>
                            )}
                            <p>DESIGNS CREATED</p>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <CoffeeOutlined />
                            {scroll1 ? (
                                <Counter range={856} />
                            ):(
                                <Fragment></Fragment>
                            )}
                            <p>CUPS OF COFFEE</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ) 
}

export default Facts;