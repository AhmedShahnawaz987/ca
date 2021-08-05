import React from 'react'
import './Serviceicon.css';
function Serviceicon({title,src}) {
    return (
        <div className="serviceicon">
        <img src={src}/>
        <span>{title}</span>
        </div>
    )
}

export default Serviceicon
