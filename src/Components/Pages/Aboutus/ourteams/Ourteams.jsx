import { Container } from "@material-ui/core";
import React from "react";
// import Banner from "../../../banner/Banner";
import "./Ourteams.css";
// import ourteam from "/Myproject/ca/src/Assets/ourteam.jpg";
import team from "./team.json";
import managment from "./management.json";
function Ourteam() {
  return (
    <div className="ourteam">
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
          {managment.map((detail, index) => (
            <div className="ourteam__management__profile1">
              <img src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" />
              <div className="ourteam__managemant__details">
                <>
                  <h1>{detail.name}</h1>
                  <h5>{detail.des}</h5>
                </>
              </div>
            </div>
          ))}
        </div>
        <div className="ourteam__main">
          <div className="left">
            <h3>Our Team</h3>
            <p>
              We strive to ensure the best customer experience. In order to do
              that, CA has also built one of the best teams in the financial
              service industry. Our team consists of experts from each field, be
              it accounting, auditing, analytics or reporting, with Experience
              from Big 4 Audit firms. Because of this team, CA is capable of
              delivering comprehensive reports that speak facts and ideas,
              instead of mere numbers. Our beyond-the-numbers approach have been
              devised by the team and the approach has had a notable success in
              the past.
            </p>
          </div>
          <div className="right">
            {team.map((details, index) => (
              <div className="ourteam__members" key={index}>
                <h6 >{details.name}</h6>
                <img src={details.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Ourteam;