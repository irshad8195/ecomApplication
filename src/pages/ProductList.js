import React, { useState } from 'react'
import Class from './ProductList.module.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const ProductList = () => {
  const location=useLocation()
  const cat=location.pathname.split('/')[2]
  const[filters, setFilter]=useState({})
  const [sort, setSort]=useState('newest')

const handleFilters=(e)=>{
//const value=e.target.value;
setFilter({
  ...filters,
  [e.target.name]:e.target.value,
})
}
console.log(filters)

  return (
    <div className={Class.container}>
      <Navbar/>
      <Announcement/>
      <h1 className={Class.h1}>Dresses</h1>

      <div className={Class.filterCon}>
          <div className={Class.Filter}><span className={Class.span}>Filter Products:</span>
          
    <select  name='color' onChange={handleFilters} className={Class.select}>
       <option  disabled>Color</option>
        <option>white</option>
        <option>black</option>
        <option>red</option>
        <option>blue</option>
        <option>yellow</option>
        <option>green</option>  
        </select>

        <select name='size' onChange={handleFilters} className={Class.select}>
       <option  disabled selected>Size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        </select>
          </div>

          <div className={Class.Filter}><span className={Class.span}>Sort Products:</span>
  
<select onChange={(e)=>setSort(e.target.value)} 
          className={Class.select}>
       <option value="newest">Newest</option>
        <option value="asc">Price (asc)</option>
        <option value="desc">Price (desc)</option> 
        </select>
          
          </div>
      </div>
      <Products cat={cat} filter={filters} sort={sort} />
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductList
