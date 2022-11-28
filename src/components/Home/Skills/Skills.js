import React, { Fragment, useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css';

const Skills = () => {
    const [scroll, setScroll] = useState(false);
    const [scroll1, setScroll1] = useState(false);

    const [now1, setNow1] = useState(0);
    const [now2, setNow2] = useState(0);
    const [now3, setNow3] = useState(0);
    const [now4, setNow4] = useState(0);
    const [now5, setNow5] = useState(0);
    const [now6, setNow6] = useState(0);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 3100);
        setScroll1(window.scrollY > 3200);
      });
    }, []);
    setTimeout(function() {
        if(now1 < 85 && scroll1){
            setNow1(now1+1);
        }
        if(now2 < 95 && scroll1){
            setNow2(now2+1);
        }
        if(now3 < 85 && scroll1){
            setNow3(now3+1);
        }
        if(now4 < 90 && scroll1){
            setNow4(now4+1);
        }
        if(now5 < 95 && scroll1){
            setNow5(now5+1);
        }
        if(now6 < 100 && scroll1){
            setNow6(now6+1);
        }
        if(scroll1 === false){
            setNow1(0);
            setNow2(0);
            setNow3(0);
            setNow4(0);
            setNow5(0);
            setNow6(0);
        }
    }, 8)

    return (
        <Fragment>
            <div className='parallax1'>
                <div className='container'>
                    <br/><br/>
                    <div id="team" className={`row skillsHeading ${scroll ? 'fadeIn': ''}`}>
                        <h1>OUR <span>SKILLS</span></h1>
                        <span className='smallBorder'></span>
                    </div>
                    <br/><br/>
                    <div className='row'>  
                        <div className={`row ${scroll1 ? 'fadeIn': ''}`}>
                            <div className='col-lg-6 col-sm-12'>
                                <h5>Design</h5>
                                <ProgressBar now={now1} />
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <h5>Development</h5>
                                <ProgressBar now={now2} />
                            </div>
                        </div>
                    <br/><br/>
                    <br/><br/>
                        <div className={`row ${scroll1 ? 'fadeIn': ''}`}>
                            <div className='col-lg-6 col-sm-12'>
                                <h5>Marketing</h5>
                                <ProgressBar now={now3} />
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <h5>Branding</h5>
                                <ProgressBar now={now4} />
                            </div>
                        </div>
                    <br/><br/>
                    <br/><br/>
                        <div className={`row ${scroll1 ? 'fadeIn': ''}`}>
                            <div className='col-lg-6 col-sm-12'>
                                <h5>Monitoring</h5>
                                <ProgressBar now={now5} />
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <h5>Supporting</h5>
                                <ProgressBar now={now6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Skills;