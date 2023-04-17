import React from 'react'

import Card from './Card'

const data = [
    {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
      {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
      {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
      {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
      {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
      {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
      {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
      {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
      {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
      {
        img:"https://images.meesho.com/images/products/218333711/gzqzq_512.webp",
        p_name:"Girls Unique Velvet Frock & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"200"
      },
      {
        img:"https://images.meesho.com/images/products/229143134/rflwd_512.webp",
        p_name:"Princess Trendy Girls Frocks & Dresses",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"189"
      },
      {
        img:"https://images.meesho.com/images/products/156657544/p7q70_512.webp",
        p_name:"Princess Angel long GGowns",
        dis:"Extend your wardrobe collection with the stylish range of clothing from JK TRADER",
        rate:"296"
      },
]

export default function Childern() {


    return (
        <div>
        <div className="container-fluid m-5 ">

            <h1 className='fw-bold font-monospace m-4'>Childern's Section</h1>
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
