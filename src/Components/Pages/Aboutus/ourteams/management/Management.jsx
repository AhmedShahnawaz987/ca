import React from 'react'
import "./Management.css"
import management from "./management.json";
function Management() {
    return (
        <div>
            <div className="ourteam__managemant">
          <h2>Meet our Management</h2>
          <p>
            The management is solely dedicated to support you and deliver you
            the best financial assistance and proven economic strategies to
            enhance your growth phenomenally.
          </p>
        </div>
        <div className="ourteam__management__profile">                   
            <div className="ourteam__management__profile1">
              <img src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" />
              <div className="ourteam__managemant__details">
                <>
                  <h1>Anoop K P</h1>
                  <h5>Founder and Managing Partner</h5>
                </>
              </div>
              
            </div>       
            <div className="ourteam__management__profile1">
              <img src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" />
              <div className="ourteam__managemant__details">
                <>
                  <h1>Arif K</h1>
                  <h5>Founder and Managing Partner</h5>
                </>
              </div>
              
            </div>   
        </div>
        <div className="ourteam__management__partner">
          {management.map((detail, index) => (
            <div className="ourteam__management__partner1">
              <img src={detail.img} />
              <div className="ourteam__managemant__partnerDetails">
                
                  <h3>{detail.namee}</h3>
                  <h5>{detail.des}</h5>
                
              </div>
            </div>            
          ))} 
          </div>
        </div>
    )
}

export default Management
