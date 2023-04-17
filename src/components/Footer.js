import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className=" m-5 bg-dark text-light shadow-lg rounded-2 p-5 font-monospace">
                <div className="row m-5 p-5">
                    <div className="col  m-5">
                        <div className="container">
                            <h2 className='fw-bold'>About :</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, at. Distinctio nisi numquam repellat officiis vitae odio fugit soluta illum aut pariatur iure non, tenetur dolore animi nam sunt nostrum temporibus! Iusto?</p>
                        </div>
                    </div>
                    <div className="col  m-5">
                        <h2 className='fw-bold'>Contact Us :</h2>
                        <div>
                            <div className="row mt-5">
                                <div className="col text-decoration-underline">
                                    Whatsapp
                                </div>
                                <div className="col text-decoration-underline">
                                    Facebook
                                </div>   
                                <div className="col text-decoration-underline">
                                    Youtube
                                </div>   
                                <div className="col text-decoration-underline">
                                    Github
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>
        </div>
    )
}
