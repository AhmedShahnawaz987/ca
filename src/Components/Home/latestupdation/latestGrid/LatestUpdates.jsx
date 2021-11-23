import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./LatestUpdates.css"
import updates from '../Updates'
function Latestudates() {

    
    
    return (
        <div className="latestUpdates">
            <h2>LATEST UPDATES</h2>
            <div className="latestUpdates__grid">
            {updates.map((latest,index)=>(                                       
            <div className="latestUpdates__grid__inner" key={index} >
                <span>Date : {latest.date}</span>
                <p>{latest.para}</p>
                
                {/* <Link to={`/LUpdate/${latest.id}`} className="latestUpdated__readmore">Read more</Link> */}
                <div className="latestUpdate__modal" id="latestModal">
                <CloseIcon/>
                    {latest.date}
                </div>
            </div>
            ))} 
        </div>
        <Link to="/LUpdate" className="latestUpdates__readMore">View more<ArrowForwardIcon className="latestUpdates__readMoreIcon"/></Link>
        </div>
    )
}

export default Latestudates
