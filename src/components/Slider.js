import React from 'react'
//import IMG from '../data'
import Class from './Slider.module.css'

const Slider = () => {
  return (
    <div className={Class.center}>
      <div className={Class.slide}>
      <img src='images/img21.jpg'/>
      </div>

      <div className={Class.arrow}>
      <span className={Class.prev}>&#10094;</span>
      
      
      <span className={Class.next}>&#10095;</span>
      </div>
      
    </div>
  )
}

export default Slider

// {IMG.map((item)=>{
//   return<div key={item.id}>
//     <img src={item.img} alt=''/>
//     </div>
// })}




// import React, { useState } from 'react'
// import Class from './Slider.module.css'
// import { sliderItems } from '../data'


// const Slider = () => {

// const [slideIndex, setSlideIndex]=useState(0)

//   const handleClick=()=>{



//   }

//   return (
//     <div className={Class.slide}>
//         <div className={Class.left}  onClick={()=>handleClick("left")}>
//         <i className="fa-solid fa-chevron-left"></i>
//         </div>
//         <div>
//           {sliderItems.map((item)=> (
//            <div  bg={item.img} className={Class.image}>
//            <img src={item.img} />
//            </div>   
//           ))}
//         </div>
        
// < div className={Class.des}>
// <h1>Summer Sale</h1>
// <p>DON'T COMPARE ON STYLE GET FLAT 30% OFF FOR NEW ARRIVALS</p>
// <button>Shop Now </button>
// </div> 

// <div className={Class.right} onClick={()=>handleClick("right")}>

//         <i className="fa-solid fa-chevron-right"></i>
//      </div>
//     </div>
//   )
// }

// export default Slider
