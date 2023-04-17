import React from 'react'
import Card from './Card'

 const data = [
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR796Tx1Sj_2_t0BfxzgMdnpLuqNw0StuYqJRw30sZefihN0fML",
    p_name:"tista ben",
    dis:"Stripes Pattern Regular Fit Men's Cotten Shirt",
    rate:"764"
  },
  {
    img:"https://images.meesho.com/images/products/117942578/ufb9v_400.webp",
    p_name:"Shirt",
    dis:"Fancy Sensational Men Dress",
    rate:"363"
  },
  {
    img:"https://images.meesho.com/images/products/148828496/vfcip_400.webp",
    p_name:"Checked Shirt",
    dis:"Vellical Men Shirt",
    rate:"279"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR796Tx1Sj_2_t0BfxzgMdnpLuqNw0StuYqJRw30sZefihN0fML",
    p_name:"tista ben",
    dis:"Stripes Pattern Regular Fit Men's Cotten Shirt",
    rate:"764"
  },
  {
    img:"https://images.meesho.com/images/products/117942578/ufb9v_400.webp",
    p_name:"Shirt",
    dis:"Fancy Sensational Men Dress",
    rate:"363"
  },
  {
    img:"https://images.meesho.com/images/products/148828496/vfcip_400.webp",
    p_name:"Checked Shirt",
    dis:"Vellical Men Shirt",
    rate:"279"
  },
  
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR796Tx1Sj_2_t0BfxzgMdnpLuqNw0StuYqJRw30sZefihN0fML",
    p_name:"tista ben",
    dis:"Stripes Pattern Regular Fit Men's Cotten Shirt",
    rate:"764"
  },
  {
    img:"https://images.meesho.com/images/products/117942578/ufb9v_400.webp",
    p_name:"Shirt",
    dis:"Fancy Sensational Men Dress",
    rate:"363"
  },
  {
    img:"https://images.meesho.com/images/products/148828496/vfcip_400.webp",
    p_name:"Checked Shirt",
    dis:"Vellical Men Shirt",
    rate:"279"
  },
  
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR796Tx1Sj_2_t0BfxzgMdnpLuqNw0StuYqJRw30sZefihN0fML",
    p_name:"tista ben",
    dis:"Stripes Pattern Regular Fit Men's Cotten Shirt",
    rate:"764"
  },
  {
    img:"https://images.meesho.com/images/products/117942578/ufb9v_400.webp",
    p_name:"Shirt",
    dis:"Fancy Sensational Men Dress",
    rate:"363"
  },
  {
    img:"https://images.meesho.com/images/products/148828496/vfcip_400.webp",
    p_name:"Checked Shirt",
    dis:"Vellical Men Shirt",
    rate:"279"
  },
  
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR796Tx1Sj_2_t0BfxzgMdnpLuqNw0StuYqJRw30sZefihN0fML",
    p_name:"tista ben",
    dis:"Stripes Pattern Regular Fit Men's Cotten Shirt",
    rate:"764"
  },
  {
    img:"https://images.meesho.com/images/products/117942578/ufb9v_400.webp",
    p_name:"Shirt",
    dis:"Fancy Sensational Men Dress",
    rate:"363"
  },
  {
    img:"https://images.meesho.com/images/products/148828496/vfcip_400.webp",
    p_name:"Checked Shirt",
    dis:"Vellical Men Shirt",
    rate:"279"
  },
  
  
]

export default function Mens() {
  return (
    <div>
      
        <div className="container-fluid m-5 ">

            <h1 className='fw-bolder  font-monospace m-4 '>Men's Section</h1>
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
