import React, { useEffect, useState } from 'react'
import Banner from '../../../banner/Banner.jsx';
// import { Link } from 'react-router-dom';
import blogsdetails from "../Blog.js";
import Blogimage from "../../../../Assets/blog.jpg";
import "./BlogsMore.css";
function BlogsMore({match}) {   
    // const [blog, setBlog] = useState('') 
    useEffect(()=>{
        // window.scrollTo(0,500);
        // console.log(blogsdetails);
        // console.log(detail);

        // fetchBlogs();
    })
    // const fetchBlogs = async () => {
    //     const fetchBlogs = await fetch(`/Blogs/${match.params.id}`);
    //     setBlog(fetchBlogs.data);
    //     console.log(fetchBlogs);
    // }
     const blooog = blogsdetails.find((detail)=>
        detail.id===parseInt(match.params.id));
        
        
    return (                 
            <div className="bolgsMore">
                <Banner img={Blogimage} heading={"Blogs"}/>
                <div className="blogsMore__inner">
                <img src={blooog.img} />   
                <span className="blogsMore__date">{blooog.date}</span>
                       <h3>{blooog.title}</h3>  
                       <p>{blooog.para}</p>  
                       </div> 
            </div>
       
    )
}

export default BlogsMore
