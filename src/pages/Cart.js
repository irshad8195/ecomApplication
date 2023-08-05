import React from 'react'
import Class from './Cart.module.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <div className={Class.container}>
      <Navbar/>
      <Announcement/>
      <div className={Class.wrapper}>
        <h1 className={Class.h1}>YOUR BAG</h1>
        <div className={Class.top}>
            <button className={Class.button}>CONTINUE SHOPPING</button>
            <div className={Class.toptext}>
     <span className={Class.text}>Shopping Bag(2)</span>
     <span className={Class.text}>Your Wishlist(0)</span>     
            </div>
            <button className={Class.button1}>CHECKOUT NOW</button>
        </div>
        <div className={Class.bottom}>
            <div className={Class.info}>

<div className={Class.product}>
    <div className={Class.productdetails}>
        <img className={Class.img} src='https://m.media-amazon.com/images/I/715TLEvzxUS._SY500_.jpg' />
        <div className={Class.details}>
<span className={Class.productname}><b>Product:</b>DESSIE THUNDER SHOES</span>
<span className={Class.productid}><b>ID:</b>978SC43</span>       
<span className={Class.productcolor}></span>   
<span className={Class.productsize}><b>Size:</b> 37.5</span>   
        </div>

     <div className={Class.pricedetails}>
        <div className={Class.pac}>
            <span className={Class.span}>+</span>
            <span className={Class.pamount}>2</span>
            <span className={Class.span}>-</span>
        </div>
        <div className={Class.productp}>$50</div>
        </div>   
    </div>
</div>

<hr className={Class.hr}/>
<div className={Class.product}>
    <div className={Class.productdetails}>
        <img className={Class.img} src='https://rukminim1.flixcart.com/image/850/1000/xif0q/shoe/h/o/7/-original-imaghvb6dxbuu9gj.jpeg?q=90' />
        <div className={Class.details}>
<span className={Class.productname}><b>Product:</b>PUMA SHOES</span>
<span className={Class.productid}><b>ID:</b>978SC43</span>       
<span className={Class.productcolor}></span>   
<span className={Class.productsize}><b>Size:</b>40 </span>   
        </div>

     <div className={Class.pricedetails}>
        <div className={Class.pac}>
            <span className={Class.span}>+</span>
            <span className={Class.pamount}>2</span>
            <span className={Class.span}>-</span>
        </div>
        <div className={Class.productp}>$40</div>
        </div>   
    </div>
</div>
            </div>

        <div className={Class.summary}>
          <h1 className={Class.summarytitle}>ORDER SUMMARY</h1>
      <div className={Class.summaryitem}>
        <span className={Class.stext}>SubTotal</span>
        <span className={Class.stextp}>$80</span>
        </div> 

        <div className={Class.summaryitem}>
        <span className={Class.stext}>Estimated Shipping</span>
        <span className={Class.stextp}>$5.90</span>
        </div> 

        <div className={Class.summaryitem}>
        <span className={Class.stext}>Shipping Discount</span>
        <span className={Class.stextp}>$-5.90</span>
        </div> 

        <div className={Class.summaryitem}>
        <span className={Class.sitemtext}>Total</span>
        <span className={Class.sitemtext}>$80</span>
        </div> 
        <button className={Class.button2}>CHECKOUT NOW</button>
        </div>
        </div>
       
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
