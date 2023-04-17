import React from 'react'

import Card from './Card'

const data = [
    {
      img:"https://images.meesho.com/images/products/103713364/0ioi6_512.webp",
      p_name:"Urbane Latest Women Dresses",
      dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
      rate:"200"
    },
    {
      img:"https://images.meesho.com/images/products/70393359/7x5uz_512.webp",
      p_name:"Rayon",
      dis:"Fancy Sensational Sleeveless Dress",
      rate:"252"
    },
    {
      img:"https://images.meesho.com/images/products/221572346/9vvyg_512.webp",
      p_name:"Three-Quarter Sleeves",
      dis:"Vellical Men Shirt",
      rate:"279"
    },
    {
        img:"https://images.meesho.com/images/products/103713364/0ioi6_512.webp",
        p_name:"Urbane Latest Women Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/70393359/7x5uz_512.webp",
        p_name:"Rayon",
        dis:"Fancy Sensational Sleeveless Dress",
        rate:"252"
      },
      {
        img:"https://images.meesho.com/images/products/221572346/9vvyg_512.webp",
        p_name:"Three-Quarter Sleeves",
        dis:"Vellical Men Shirt",
        rate:"279"
      },
      {
        img:"https://images.meesho.com/images/products/103713364/0ioi6_512.webp",
        p_name:"Urbane Latest Women Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/70393359/7x5uz_512.webp",
        p_name:"Rayon",
        dis:"Fancy Sensational Sleeveless Dress",
        rate:"252"
      },
      {
        img:"https://images.meesho.com/images/products/221572346/9vvyg_512.webp",
        p_name:"Three-Quarter Sleeves",
        dis:"Vellical Men Shirt",
        rate:"279"
      },
      {
        img:"https://images.meesho.com/images/products/103713364/0ioi6_512.webp",
        p_name:"Urbane Latest Women Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/70393359/7x5uz_512.webp",
        p_name:"Rayon",
        dis:"Fancy Sensational Sleeveless Dress",
        rate:"252"
      },
      {
        img:"https://images.meesho.com/images/products/221572346/9vvyg_512.webp",
        p_name:"Three-Quarter Sleeves",
        dis:"Vellical Men Shirt",
        rate:"279"
      },
      {
        img:"https://images.meesho.com/images/products/103713364/0ioi6_512.webp",
        p_name:"Urbane Latest Women Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/70393359/7x5uz_512.webp",
        p_name:"Rayon",
        dis:"Fancy Sensational Sleeveless Dress",
        rate:"252"
      },
      {
        img:"https://images.meesho.com/images/products/221572346/9vvyg_512.webp",
        p_name:"Three-Quarter Sleeves",
        dis:"Vellical Men Shirt",
        rate:"279"
      },
      {
        img:"https://images.meesho.com/images/products/103713364/0ioi6_512.webp",
        p_name:"Urbane Latest Women Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/70393359/7x5uz_512.webp",
        p_name:"Rayon",
        dis:"Fancy Sensational Sleeveless Dress",
        rate:"252"
      },
      {
        img:"https://images.meesho.com/images/products/221572346/9vvyg_512.webp",
        p_name:"Three-Quarter Sleeves",
        dis:"Vellical Men Shirt",
        rate:"279"
      },
      {
        img:"https://images.meesho.com/images/products/103713364/0ioi6_512.webp",
        p_name:"Urbane Latest Women Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/70393359/7x5uz_512.webp",
        p_name:"Rayon",
        dis:"Fancy Sensational Sleeveless Dress",
        rate:"252"
      },
      {
        img:"https://images.meesho.com/images/products/221572346/9vvyg_512.webp",
        p_name:"Three-Quarter Sleeves",
        dis:"Vellical Men Shirt",
        rate:"279"
      },
  ]

export default function Women() {


    return (
        <div>
        <div className="container-fluid m-5 ">

            <h1 className='fw-bold font-monospace m-4'>Women Section</h1>
            <hr />
            <div className="row container-fluid">
            {
            data.map((item)=>{
              return(

                <Card img={item.img}  p_name={item.p_name} dis={item.dis} rate={item.rate}/>                 
              )
            })

            }

           
            </div>
        </div>
        </div>

    )
}
