import React from 'react'

const imgdata = [
    {
        id:1,
        img: "https://wallpaperaccess.com/full/2631692.jpg",
        text: "Hurry Now",
        off: "50"

    },
    {
        id:2,
        img: "https://wallpaperaccess.com/full/2840522.jpg",
        text: "Offer Closes Soon !!!",
        off: "90"
    }
]


export default function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide m-5 rounded-3  shadow-lg text-dark" data-bs-ride="carousel" >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner font-monospace">

                <div className="carousel-item active  " >
                    <div className=" row " >
                        <div className="container col-lg-6 col-sm-12 align-items-center d-flex justify-content-center flex-column p-3 ">
                            <h1 className='fw-bolder '>UP TO 70% OFF</h1>
                            <br />
                            <h3>Shop Now</h3>


                        </div>
                        <img src="https://www.itl.cat/pngfile/big/52-521530_boys-wallpapers-men-wallpapers-guys-models-1080p-hd.jpg" className="d-block rounded-3 col-lg-6 col-sm-12" alt="..." style={{ width: "50%" ,height:"50%"}} />
                    </div>
                </div>
                {
                    imgdata.map((item) => {
                        return (

                            <div className="carousel-item  " key={item.id}>
                                <div className=" row " >
                                    <div className="container col-lg-6 col-sm-12 align-items-center d-flex justify-content-center flex-column p-3 ">
                                        <h1 className='fw-bolder '>UP TO {item.off}% OFF</h1>
                                        <br />
                                        <h3>{item.text}</h3>


                                    </div>
                                    <img src={item.img} className="d-block rounded-3 col-lg-6 col-sm-12" alt="..." style={{ width: "50%",height:"50%" }} />
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
