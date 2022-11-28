import React, { Fragment, useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const testis = [
    {
        text: 'It was great working with Fulminare. Fulminare was very efficient in their work and very friendly with me. I have never had a better experience. Would definitely work with Fulminare again.',
        name: 'Anna Vanderpune'
    },
    {
        text: "I asked Fulminare to make me a mobile app and I was expceting them to simply ask for the functionality and start working. But they had a whole system to interact with me so that I am assured and don't have issues or misunderstandings.",
        name: 'Niel Jeffrey'
    },
    {
        text: `Absolute perfect job done by Ahmad, Thank you Ahmad Regards Ray`,
        name: 'Ray F'
    }
]

const Testimonials = () => {
    const [scroll, setScroll] = useState(false);
    const [scroll1, setScroll1] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 5450);
        setScroll1(window.scrollY > 5600);
      });
    }, []);

    return (
        <Fragment>
            <div className='parallax2'>
                <div className='container'>
                    <br/><br/>
                    <div id="testimonials" className={`row testHeading ${scroll ? 'fadeIn': ''}`}>
                        <h1>CUSTOMER <span>SAYS</span></h1>
                        <span className='smallBorder'></span>
                    </div>
                    <br/><br/>
                    <div className={`row ${scroll1 ? 'fadeIn': ''}`}>
                        <div className='col-lg-4 col-sm-12'><TestimonialCard text={testis[0]['text']} name={testis[0]['name']} /></div>
                        <div className='col-lg-4 col-sm-12'><TestimonialCard text={testis[1]['text']} name={testis[1]['name']} /></div>
                        <div className='col-lg-4 col-sm-12'><TestimonialCard text={testis[2]['text']} name={testis[2]['name']} /></div>
                    </div>
                    <br/><br/>
                </div>
            </div>
            {/* <div className={`row partnerSlider`}>
                <div className='partners'>
                    <ul>
                        <li>Revive Solutions</li>
                        <li>Rastay.pk</li>
                        <li>NOWA Resolve</li>
                    </ul>
                </div>
            </div> */}
        </Fragment>
    )
}

export default Testimonials;