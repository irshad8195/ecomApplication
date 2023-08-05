import React from 'react'
import Class from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={Class.nav}>
      <div className={Class.leftDiv}>
        <input type='text'/><button>Search</button>
        <a href=''/>
        <img alt='' src=''/>
      </div>

<div className={Class.rightNav}>
  <a href=''/>
  <img alt='' src='' />
</div>

<div className={Class.navLinks}>
  <ul>
    <li>
    REGISTER
    </li>
    <li>
     SIGN IN
    </li>
    <li>
    <i class="fa-solid fa-cart-shopping"></i>
    </li>
  </ul>
</div>
    </div>
  )
}

export default Navbar
