import React from 'react';
import { ReactTyped } from 'react-typed'


export const Text =()=>{
    return(
        <div className='text-cont'>
        <div className='text-1'>
             <p>Welcome to <strong>STUDY~VAULT</strong></p> <p>Platform designed to help university students 
             with easy access to collection of study 
             resources:
             </p>
             <p>
             <ReactTyped strings={['PDFs','Past Papers','Chat-Rev']} className='react-typed'  typeSpeed={120} backSpeed={140} loop /> 
             </p>
        </div>
        <div className='text-2'>
            <h2>Our Services:</h2>
             <p>Explore our extensive library of downloadable PDFs</p>
             <p>Practice with Revision Questions</p>
             <p>Streamlined Study Process</p>
        </div>
        <button className='text-button'>START</button>
        </div>
    )
}