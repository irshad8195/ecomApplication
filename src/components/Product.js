import React from 'react'
import Class from './Product.module.css'

const Product = ({item}) => {
  return (
    <div className={Class.container}>
      <div className={Class.circle}></div>
      <img className={Class.image} src={item.img}/>
      <div className={Class.info}>

        <div className={Class.icon}>
        <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className={Class.icon1}>
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        
        <div className={Class.icon2}>
        <i className="fa-regular fa-heart"></i>
        </div>
       
        </div>
        </div>
       
    
  )
}

export default Product
