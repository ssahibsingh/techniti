import React from 'react'
import { Link } from 'react-router-dom'

const RegisterforStar = () => {
  return (
    <div className='container bg-trans'>
        <h4 className="text-center content bg-trans">Register to attend TechNITi 2023</h4>

        <div className="d-flex justify-content-center mt-1">
          <Link to='starnight'>
            <button className="btn btn-green mx-auto w-125 rounded">
              Click here
            </button>
          </Link>
        </div>
        </div>
  )
}

export default RegisterforStar