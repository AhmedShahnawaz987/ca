import React from 'react'
import { Link } from 'react-router-dom';
import blogsdetails from "../Blog.js";
import "./BlogsGrid.css";
// console.log(blogsdetails);

function BlogsGrid() {    
    return (                 
            <div className="blogsGrid__wrap">
                {blogsdetails.map((detail,index)=>(
                    <div className="blogsGrid__imgdate__wrap">
                <div className="blogsGrid__imgdate" >                    
                        <img src={detail.img}/>
                        <span>{detail.date}</span>                        
                </div>
                <div className="blogsGrid__titlepara">
                <h3>{detail.title}</h3>
                <p>{detail.para}</p>
                </div>
                <Link to={`/blogs/${detail.id}`} className="readmore">Read more</Link>
                </div>                                               
                    ))}
            </div>
       
    )
}

export default BlogsGrid
