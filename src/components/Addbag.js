import React, { useState ,useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Addbag() {
    
    const [name ,setName] = useState('')
    const [img ,setImg] = useState('')
    const [dis ,setDis] = useState('')
    const [rate ,setRate] = useState('')


    useEffect(()=>{
        setName(localStorage.getItem('name'));
        setImg(localStorage.getItem('img'));
        setDis(localStorage.getItem('dis'));
        setRate(localStorage.getItem('rate'));

    },[])

   
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column d-flex justify-content-center align-items-center">
                        <img src={img} alt="" className="img-fluid w-75 h-75 shadow rounded-2" />
                        <div className="container p-5 ms-5  " >

                            <button className="btn btn-outline-dark btn-lg shadow me-3 rounded-0" >add to cart</button>
                            <Link className="btn btn-primary btn-lg rounded-0 w-50 shadow-lg" to="/recipt">Buy</Link>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1 className='fw-bold font-monospace  '>{name}</h1>
                        <hr />
                        <h4 className='text-muted font-monospace fw-bold mt-5'>{dis}</h4>
                        <br />

                        <h1 className="fw-bold font-monospace mt-5 text-danger" style={{ fontSize: "4rem" }}>15% OFF
                            <span className="text-muted text-decoration-line-through ms-3 " style={{ fontSize: "3rem" }}>₹899</span>
                            <br />
                            <span className="  fw-bold text-primary " style={{ fontFamily: "monospace", fontSize: "10rem" }}>₹{rate}</span>
                        </h1>
                        <br />
                        <div className="container">
                            <div className="fw-bold font-monospace " style={{fontSize:"2rem"}}>
                                Rateing :


                                <img src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" width="45" />
                                <img src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" width="45" />
                                <img src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" width="45" />
                                <img src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" width="45" />






                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
