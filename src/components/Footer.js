import React from 'react'
import Class from './Footer.module.css'

const Footer = () => {
  return (
    <div className={Class.container}>
      <div className={Class.left}>
        <h1 className={Class.logo}>Web Info</h1>
        <p className={Class.desc}>
        Lorem Ipsum is simply dummy text of
         the printing and typesetting industry. 
         Lorem Ipsum has been the industry's
          standard dummy text ever since the 
          1500s, when an unknown printer took a
           galley of type and scrambled it to
            make a type specimen book. 
        </p>
        <div className={Class.social}>
            <div className={Class.icon}>
            <i class="fa-brands fa-square-facebook"></i>
            </div>
            <div className={Class.icon1}>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <div className={Class.icon2}>
            <i class="fa-brands fa-twitter"></i>
            </div>
            <div className={Class.icon3}>
            <i class="fa-brands fa-pinterest"></i>
            </div>
           
        </div>
      </div>
      <div className={Class.center}>
        <h3 className={Class.title}>Useful Links</h3>
      <ul className={Class.ul}>
        <li className={Class.li}>Home</li>
        <li className={Class.li}>Cart</li>
        <li className={Class.li}>Man Fashion</li>
        <li className={Class.li}>WomenFashion</li>
        <li className={Class.li}>Accessories</li>
        <li className={Class.li}>My Account</li>
        <li className={Class.li}>Order Tracking</li>
        <li className={Class.li}>Wishlist</li>
        <li className={Class.li}>Wishlist</li>
        <li className={Class.li}>Terms</li> 
       
      </ul>

      </div>
      <div className={Class.right}>
       <h3 className={Class.contactlist}>Contact</h3>
        <div className={Class.contact}>
        <i className="fa-solid fa-location-dot" style={{marginRight:'10px'}}></i> HouseNo-127,  New South Delhi, 110006
        </div>
        <div className={Class.contact}>
        <i class="fa-solid fa-phone" style={{marginRight:'10px'}}></i> +222 819507
        </div>

        <div className={Class.contact}>
        <i class="fa-sharp fa-solid fa-envelope" style={{marginRight:'10px'}}></i> alamirsh1996@gmail.com
        </div>

      <img className={Class.payment} style={{marginRight:'10px'}} />Credit Card<i class="fa-solid fa-credit-card" ></i>
      </div>
    </div>
  )
}

export default Footer
