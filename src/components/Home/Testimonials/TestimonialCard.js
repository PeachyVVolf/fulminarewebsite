import React, { Fragment } from 'react';
import { FormatQuote } from '@mui/icons-material';
import testPic from '../../../images/testPic.jpg';
import AnnaImg from '../../../images/Clients/Anna.jpg';

const TestimonialCard = ({text, name}) => {
    return (
        <Fragment>
            <div className='testBox'>
                <FormatQuote/>
                <p>
                    {text}
                </p>
                <div className='imgRow'>
                    <img src={name === 'Anna Vanderpune' ? AnnaImg : testPic} alt='pfp'/> 
                    <p>{name}</p>
                </div>
                <br/><br/>
            </div>
        </Fragment>
    )
}

export default TestimonialCard;