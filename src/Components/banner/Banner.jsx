import React from 'react'
import './Banner.css';
import { lazy } from 'react';


function Banner({img,style,heading}) {
    return (
        <div className="common__banner" style={{background:`url(${img}) center no-repeat`,...style}}>
            <h3>{heading}</h3>
        </div>
    )
}

export default Banner
