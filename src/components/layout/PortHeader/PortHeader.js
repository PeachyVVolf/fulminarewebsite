import React, { Fragment } from 'react';
import './PortHeader.css';

const PortHeader = ({title}) => {
    return (
        <Fragment>
            <div className='header'>
                <h1>{title}</h1>
            </div>
        </Fragment>
    )
}

export default PortHeader;