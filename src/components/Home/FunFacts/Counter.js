import React, { useState } from 'react';
import './Facts.css';

const Counter = ({range}) => {

    const [number, setNumber] = useState(0);
    
    setTimeout(function() {
        if(number < range){
            setNumber(number + 1);
        }
    }, 0.00001)

    return (
        <div className='counter'>
            {number}
        </div>
    )
}

export default Counter;