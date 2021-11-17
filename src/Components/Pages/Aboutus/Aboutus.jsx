import React, { lazy, Suspense, useEffect } from 'react'
// import Banner from '../../banner/Banner';
import About from "./about/About";
import "./Aboutus.css";
import Ourteams from './ourteams/Ourteams';
import aboutus from "/Myproject/ca/src/Assets/aboutus.jpg";
const Banner = lazy(() => import("../../banner/Banner"));
function Aboutus() {
  useEffect(() => {
    window.scrollTo(0,0)
     
  }, [])
  return (
    <div>
      <div className="aboutus">
      <Suspense fallback={<div style={{ width:"100%", height:"500px", backgroundColor:"rgba(128, 128, 128, 0.1)"}}>Loading</div>}>
      <Banner img={aboutus} heading="About Us"/>
      </Suspense>
      </div>
     
      <About/>
      <Ourteams/>
    </div>
  )
}

export default Aboutus
