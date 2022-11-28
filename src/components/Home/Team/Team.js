import React, { Fragment, useState, useEffect } from 'react';
import AhmadImg from '../../../images/Team/Ahmad.jpg';
import MansoorImg from '../../../images/Team/mansoor.jpg';
import HussainImg from '../../../images/Team/Hussain.jpg';
import { Instagram, GitHub, LinkedIn, YouTube } from '@mui/icons-material';
import './Team.css';

const Team = () => {
    const [scroll, setScroll] = useState(false);
    const [scroll1, setScroll1] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 1300);
        setScroll1(window.scrollY > 1450);
      });
    }, []);
    return (
        <Fragment>
            <div className='container'>
                <div id="team" className={`row TeamHeading ${scroll ? 'fadeIn': ''}`}>
                    <h1>MEET THE <span>TEAM</span></h1>
                    <span className='smallBorder'></span>
                </div>
                <br/><br/><br/><br/>
                <div className={`row ${scroll1 ? 'fadeIn': ''}`}>
                    <div className="col-lg-4 col-md-12 TeamItem">
                        <div className='insideTeamItem'>
                            <img src={AhmadImg} alt='team1' />
                        </div>
                        <div className="Teamoverlay">
                            <div className="Teamtext">
                                <br/>
                                <p className='teamItemName'>Ahmad Ajmal</p>
                                <p className='teamItemTitle'>Founder & CEO</p>
                                <span className='smallBorderWhite'></span>
                                <p className='teamItemDesc'>A BSCS graduate from FAST Lahore. I not 
                                only work to sustain life, but I have dreams, the dream to claim the lightning 
                                and help other businesses do the same.</p>
                                <div className='teamItemSocials'>
                                    <a href='https://www.instagram.com/_something_peachy/'><Instagram /></a>
                                    <a href='https://github.com/PeachyVVolf'><GitHub /></a>
                                    <a href='https://www.linkedin.com/in/ahmad-ajmal/'><LinkedIn /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 TeamItem">
                        <div className='insideTeamItem'>
                            <img src={HussainImg} alt='team1' />
                        </div>
                        <div className="Teamoverlay">
                            <div className="Teamtext">
                                <br/><br/>
                                <p className='teamItemName'>Hussain Ahmed Khan</p>
                                <p className='teamItemTitle'>Co-Founder</p>
                                <span className='smallBorderWhite'></span>
                                <p className='teamItemDesc'>Hi Hussain here. I'm a professional graphic designer and artist. As a Co-Founder of Fulminare my main 
                                aim is to offer all kinds of business branding with eye catching designs and unique illustrations.</p>
                                <div className='teamItemSocials'>
                                    <a href='https://www.instagram.com/hussainahmedkhan22/'><Instagram /></a>
                                    <a href='https://www.youtube.com/channel/UCGno4Do8ykEMhK1Exnwv2aw'><YouTube /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 TeamItem">
                        <div className='insideTeamItem'>
                            <img src={MansoorImg} alt='team1' />
                        </div>
                        <div className="Teamoverlay">
                            <div className="Teamtext">
                                <br/><br/><br/>
                                <p className='teamItemName'>Mansoor Mahmood</p>
                                <p className='teamItemTitle'>Co-Founder</p>
                                <span className='smallBorderWhite'></span>
                                <p className='teamItemDesc'>Salam, I'm Mansoor Mahmood. I have immense experience in marketing and business knowledge as I have previously
                                worked with 3 businesses. As a Co-Founder of Fulminare, my vision is that I want Pakistani Companies to complete globally.</p>
                                <div className='teamItemSocials'>
                                    <a href='https://www.instagram.com/mansoormahmd/'><Instagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/>
            </div>
        </Fragment>
    )
}

export default Team;