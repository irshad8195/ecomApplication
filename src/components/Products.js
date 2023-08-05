import React, { useEffect, useState } from 'react'
import Class from './Products.module.css'
import  { product1 } from '../data'
//import { categories } from '../data'
import Product from './Product'
import axios from 'axios'

const Products = ({cat,filters, sort}) => {
  //console.log(cat,filter, sort)
  const [products, setProducts]=useState([])
  const [filterProducts, setFilteredProducts]=useState([])

  useEffect(()=>{
const getProducts=async ()=>{
  try{
       const res=await axios.get('http://localhost:5000/product')
  console.log(res)
  //setProducts(res.data)
  }catch(err){ }
}
getProducts()
  }, [cat])

useEffect(()=>{
 cat && setFilteredProducts(
     products.filter((item)=> 
      Object.entries(filters).every(([key, value])=>
          item[key].includes(value)
     )
   )
 )

}, [products,cat, filters])


// useEffect(()=>{
//   if(sort==='newest'){
//     setFilteredProducts((prev)=>
//     [...prev].sort((a,b)=>a.createdAt-b.createdAt))

//   }else if((sort==='asc')){
//     setFilteredProducts((prev)=>
//     [...prev].sort((a,b)=>a.price-b.price)
//     )
//   }else{
//     setFilteredProducts((prev)=>{
//       [...prev].sort((a,b)=>b.createdAt-a.createdAt)
//     })
//   }
// }, [sort])



  return (
    <div className={Class.container}>
      {product1.map((item)=>(
        <Product item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Products
