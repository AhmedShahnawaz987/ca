import { Container } from "@material-ui/core";
import React from "react";
import "./Ourteam.css";
import ourteam from "/Myproject/ca/src/Assets/ourteam.jpg";
function Ourteam() {
  return (
    <div className="ourteam">
      <div className="ourteam__head">
        <img src={ourteam} className="ourteam__headImage" />
        <div className="ourteam__title">
          <h3>Our Team</h3>
        </div>
      </div>
      <Container>
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
              <h3>Charles</h3>
              <h5>founder and managing</h5>
            </div>
          </div>
          <div className="ourteam__management__profile1">
            <img src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" />
            <div className="ourteam__managemant__details">
              <h3>Charles</h3>
              <h5>founder and managing</h5>
            </div>
          </div>

          <div className="ourteam__management__profile1">
            <img src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" />
            <div className="ourteam__managemant__details">
              <h3>Charles</h3>
              <h5>founder and managing</h5>
            </div>
          </div>
        </div>

        <div className="ourteam__main">
          <div className="left">
            <h1>Our Team</h1>
          </div>
          <div className="right">
            <div className="ourteam__members">

            </div>
            <div className="ourteam__members">
              
            </div>
            <div className="ourteam__members">
              
            </div>
            <div className="ourteam__members">
              
            </div>
            <div className="ourteam__members">
              
            </div>
            <div className="ourteam__members">
              
            </div>
            <div className="ourteam__members">
              
            </div>
            <div className="ourteam__members">
              
            </div>
            <div className="ourteam__members">
              
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Ourteam;
