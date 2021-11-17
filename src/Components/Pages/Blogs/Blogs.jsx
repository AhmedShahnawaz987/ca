import React, { lazy, Suspense, useEffect} from 'react'
import Blogimage from "../../../Assets/blog.jpg";
import "./Blogs.css";
import BlogsGrid from "./blogsGrid/BlogsGrid"
const Banner = lazy(() => import("../../banner/Banner"))


function Blogs() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="blogs">
            <Suspense fallback={<div style={{ width:"100%", height:"500px", backgroundColor:"rgba(128, 128, 128, 0.1)"}}>Loading</div>}>
           <Banner img={Blogimage} heading={"Blogs"}/>
           </Suspense>
           <BlogsGrid/>
        </div>

    )
}

export default Blogs
