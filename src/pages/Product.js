import React from 'react'
import Class from './Product.module.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Product = () => {
  return (
    <div className={Class.container}>
      <Navbar/>
      <Announcement/>
      <div className={Class.wrapper}>
        <div className={Class.imgcontainer}>
        <img className={Class.img} src='images/p3.jpg' />
        </div>

        <div className={Class.info}>
           <h1 className={Class.h1}>Denim Jumsuit</h1> 
           <p className={Class.p}>  Lorem Ipsum is simply dummy text of
         the printing and typesetting industry. 
         Lorem Ipsum has been the industry's
          standard dummy text ever since the 
          1500s, when an unknown printer took a
           galley of type and scrambled it to
            make a type specimen book. </p>
           <span className={Class.span}>$ 20</span>
       
        <div className={Class.filtercon}>
            <div className={Class.filter}>
             <span className={Class.span12}>Color</span>
             <span className={Class.filtercolor}></span> 
             <span className={Class.filtercolor1}></span>   
             <span className={Class.filtercolor2}></span>     
            </div>

            <div className={Class.filter}>
             <span className={Class.span12}>Size</span>
          <select className={Class.filterselect}>
            <option className={Class.filteroption}>XS</option>
            <option className={Class.filteroption}>S</option>
            <option className={Class.filteroption}>M</option>
            <option className={Class.filteroption}>L</option>
            <option className={Class.filteroption}>XL</option>
          </select>
            </div>
        </div>
        
        <div className={Class.addcontainer}>
    <div className={Class.amountcontainer}>
<span className={Class.amount}>-</span>
<span className={Class.amount}>1</span>
<span className={Class.amount}>+</span>
    </div>
    <button className={Class.button}>ADD TO CART</button>
        </div>
</div>

      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Product
