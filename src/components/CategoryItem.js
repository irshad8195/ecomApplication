import React from 'react'
import Class from "./CategoryItem.module.css"
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <div className={Class.container}> 
  <Link to={`/products/${item.cat}`}>
      <img src={item.img}/>
      
      <div className={Class.info}>
      <div className={Class.title}>{item.title}</div>
      <button className={Class.button}>
        SHOP NOW</button>
      </div>
    </Link>
    </div>
  )
}

export default CategoryItem
