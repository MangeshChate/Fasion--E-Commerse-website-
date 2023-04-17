import React from 'react'
import {Link} from 'react-router-dom'
export default function Confirm() {
  return (
    <div>

      <div className="container mt-5 bg-light shadow font-monospace d-flex p-5 justify-content-center align-items-center flex-column">
            <h1 className='fw-bold mt-5 ' style={{fontFamily:"sans-serif" , fontStyle:"inherit"}}>Your Order Will Arrive Quickely At Your Home </h1>
            <h2 className='fw-bold text-success mb-5' >Stay Tuned</h2>
            <hr />
            <h3>Thanks For Shooping !</h3>
            
            <h4 className="text-secondary">have A Nice Day</h4>
            <Link to="/" className="btn btn-outline-dark  fw-bold rounded-1  btn-lg shadow-lg m-4">Go To Home</Link>
        
      </div>
    </div>
  )
}
