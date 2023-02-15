import React from 'react'
import { Link } from 'react-router-dom';

import ninja from "../files/ninja.jpg";

const StarNight = () => {
  return (
    <div className="container ">
       <div className='singleevents'>
    <div className=' mx-auto d-flex justify-content-center align-items-center flex-column'>
    <img src={ninja} className="start-image"/>
    <div className="d-flex justify-content-center mt-4">
          <a href='https://forms.gle/p9BWzsML7K98nD5q7' target="_blank">
            <button className="btn btn-green mx-auto w-125 rounded">
             Register Now
            </button>
          </a>
        </div>
    </div>

       </div>
    </div>
  )
}

export default StarNight