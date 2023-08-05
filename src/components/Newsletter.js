import React from 'react'
import Class from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={Class.container}>
      <h1 className={Class.title}>News Letter</h1>
      <div className={Class.desc}>Get timely updates from our favorite products</div>

      <div className={Class.incontainer}>
       <input className={Class.input} placeholder='your Email'/>
       <button className={Class.button}>
       Send</button>
      </div>

      

    </div>
  )
}

export default Newsletter


// function Row(props){
//   const{label} = props;
//   return(
//       <>
//       <label>{label}<br/></label>
//       {props.children}
//       <hr />
//       </>
//   )
// }