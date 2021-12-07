import { Container } from "@material-ui/core";
import React from "react";
import "./Ourteams.css";
import team from "./team.json";
import Management from "./management/Management.jsx";
function Ourteam() {
  return (
    <div className="ourteam">
      <Container>
        <Management/>
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