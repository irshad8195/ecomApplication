import { useEffect, useRef, useState } from "react";
import Class from "./Blog.module.css"

//Blogging App using Hooks
export default function Blog(){
    const [title, setTitle]=useState("");
    const [content, setContent]=useState('');
    const [blogs, setBlogs]=useState([]);
    
    const titleRef=useRef();

    
    useEffect(()=>{
        titleRef.current.focus();
    },[])

    useEffect(()=>{
if(blogs.length && blogs[0].title){
document.title=blogs[0].title;
}else{
    document.title="No Blogs !"
}
    },[blogs])
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();

        //for updating the array we use rest operator
        setBlogs([{title, content}, ...blogs])
        setTitle("");
        setContent("");

        titleRef.current.focus();

    }

    const handleDelete =(i)=>{
        setBlogs(blogs.filter((ele, index)=> i!==index))
    }

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className={Class.section}>
        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                    <input className={Class.input}
                placeholder="Enter the Title of the Blog here.." 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                ref={titleRef}
                />
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className={Class.input}
                        placeholder="Content of the Blog goes here.."
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}
                        
                        />
                </Row >

                {/* Button to submit the blog */}            
                <button className = {Class.btn}>ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((ele, i)=> (
            <div className={Class.blog} key={i}>
           <h3>{ele.title}</h3>
            <p>{ele.content}</p>

            <div className={Class.btn1}>
                <button 
                onClick={()=>handleDelete(i)}
                className={Class.remove}>Delete</button>
            </div>
            </div>
        ))}
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
