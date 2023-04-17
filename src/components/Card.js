import React, { useState } from 'react'
import {Link} from 'react-router-dom'




export default function Card(props) {

  function set(){
    localStorage.setItem('name' ,props.p_name);
    localStorage.setItem('img' ,props.img);
    localStorage.setItem('dis' ,props.dis);
    localStorage.setItem('rate' , props.rate);
  }
    

    
  return (
    <div className="card shadow col-auto m-4" style={{width: "25rem"}}>
  
    <img src={props.img} className="card-img-top w-100 rounded-3 mt-2 h-75" alt="..."/>
    <div className="card-body">
      <h5 className="card-title font-monospace">{props.p_name}</h5>
      <p className="card-text font-monospace text-secondary-emphasis">{props.dis}</p>
      <h5 className="hw-bold font-monospace">₹{props.rate}
        <span className="text-muted text-decoration-line-through">₹899</span>
        <span className="text-danger form-control-sm">15% Off</span>
      </h5>
      <div className="container-fluid d-flex justify-content-center ">

          <Link to="/addbag" className="btn text-decoration-underline fw-bold btn-close-white me-3" onClick={()=>set()} >add to bag</Link>
          
      </div>
    </div>
  </div>
  )
}
