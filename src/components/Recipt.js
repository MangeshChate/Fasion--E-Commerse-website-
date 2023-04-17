import React, { useState ,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Recipt() {

    const [name , setName] = useState('')
    const [sirname , setSirName] = useState('')
    const [number , setNumber] = useState('')
    const [email , setemail] = useState('')
    const [address , setAddress] = useState('')
    const [city , setCity] = useState('')
    const [pin , setPin] = useState('')

    const [pname ,psetName] = useState('')
    const [img ,setImg] = useState('')
    const [dis ,setDis] = useState('')
    const [rate ,setRate] = useState('')

    useEffect(()=>{
        psetName(localStorage.getItem('name'));
        setImg(localStorage.getItem('img'));
        setDis(localStorage.getItem('dis'));
        setRate(localStorage.getItem('rate'));

    },[])


    return (
        <div>
            <div className="container-fluid m-5 p-5">
                <div className=" row ms-5 ps-5">
                    <div className=" col-lg-5 col-md-12 col-sm-12 shadow  h-75 rounded-2 bg-light p-5 me-5 ">
                        <form action="" className="form font-monospace">
                            <div className="row ">
                                <input type="text" className="col form-control me-3 " placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} required />
                                <input type="text" className="col form-control" placeholder='Enter Sirname'onChange={(e)=>setSirName(e.target.value)} />

                                <input type="number" name="" id="" className="form-control mt-3" placeholder='Enter Mobile Number' onChange={(e)=>setNumber(e.target.value)} required />

                                <input type="email" name="" id="" className="form-control mt-3" placeholder='Enter Email Address' onChange={(e)=>setemail(e.target.value)} required />

                                <textarea name="" id="" cols="30" rows="5" placeholder='Enter Address' className='form-text form-control mt-3' onChange={(e)=>setAddress(e.target.value)} required></textarea>


                                <input type="text" className="col form-control me-3 mt-3" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)} required />
                                <input type="number" className="col form-control mt-3" placeholder='Enter Pincode' onChange={(e)=>setPin(e.target.value)} />

                            </div>
                            <div className="d-grid mt-5">

                                <Link className="btn btn-success rounded-1 shadow-lg" to="https://phonepe.my.site.com/login?locale=us">Pay Online</Link>
                                <Link className="btn btn-success mt-3 rounded-1 shadow-lg" to="/confirm">Pay On Delivery</Link>
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 shadow rounded-2 bg-light font-monospace">
                        <div className='d-flex justify-content-center p-3 '>

                            <h2 className='fw-bold'>Recipt</h2>

                        </div>
                        <hr />
                        <div className="container mt-4 fw-bold border-black ">
                            Product Name :
                            <span className="text-secondary ms-4">{pname}</span>
                        </div>
                        <div className="container mt-4 fw-bold border-black ">
                            Product Discription :
                            <span className="text-secondary ms-4">{dis}</span>
                        </div>
                        <div className="container mt-4 fw-bold border-black ">
                            Product rate :
                            <span className="text-secondary ms-4">₹{rate}</span>
                        </div>
                        <hr />
                        <h5 className="container mt-4 fw-bold border-black ">
                            Total :
                            <span className="text-danger ms-4">₹{rate}</span>
                        </h5>
                        <hr />
                        <div className="container mt-4 fw-bold border-black ">
                             Name :
                            <span className="text-secondary ms-4">{name}</span>
                        </div>
                        <div className="container mt-4 fw-bold border-black ">
                            Sirname :
                            <span className="text-secondary ms-4">{sirname}</span>
                        </div>
                        <div className="container mt-4 fw-bold border-black ">
                            Mobile number :
                            <span className="text-secondary ms-4">{number}</span>
                        </div>
                        <div className="container mt-4 fw-bold border-black ">
                            Address :
                            <span className="text-secondary ms-4">{address}</span>
                        </div>
                        <div className="container mt-4 fw-bold border-black ">
                            City :
                            <span className="text-secondary ms-4">{city}</span>
                        </div>
                      
                    </div>

                </div>
            </div>
        </div>
    )
}
