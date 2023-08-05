import React from 'react'
import Class from "./Categories.module.css"
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {

  return (
    <div className={Class.container}>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Categories
