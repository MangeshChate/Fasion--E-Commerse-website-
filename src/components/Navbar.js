import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://img.freepik.com/premium-vector/logo-swan-vector-template-with-swan-line-art-logo_747203-713.jpg?w=2000" alt="" width="70" className='rounded-5 shadow ' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>



        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>


            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/men">Mens</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/women">Woman</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/childern">Childerns</Link>
            </li>
          

            <li className='container-fluid'>
              <input type="text" name="" id="search" className='form-control text-muted w-100 rounded-2 ' placeholder='Search' />

            </li>



          </ul>

          <div className=" d-flex justify-content-end w-75">

            <button className="btn btn-outline-dark shadow me-3">Login</button>
            <button className="btn btn-outline-dark shadow me-5">Sign Up</button>
          </div>


        </div>


      </div>

    </nav>
  )
}
