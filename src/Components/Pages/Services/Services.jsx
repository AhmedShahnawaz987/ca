import React, { lazy, Suspense } from "react";
import "./Service.css";
import { NavLink } from "react-router-dom";
import { Container, Tabs, Tab } from "react-bootstrap";
import Registration from "./Pages/Registration/Registration";
import Gst from "./Pages/GST/Gst";
import Compliance from "./Pages/Compliances/Compliance";
import Incometax from "./Pages/Income Tax/Incometax";
import Labourtax from "./Pages/Labour Tax/Labourtax";
import ServicesDataList from './ServicesData.js';
const Banner = lazy(() => import("../../banner/Banner"));

function Service() {
  return (
    <div className="service__main">
      <Suspense fallback={<div style={{ width:"100%", height:"500px", backgroundColor:"rgba(128, 128, 128, 0.1)"}}>Loading</div>}>
      <Banner img={"https://wallpapercave.com/wp/wp7319154.jpg"} heading={"Our Services"} />
      </Suspense>
      
      

      {/* <Container>
        <div className="service__tabs">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 tabs__wrapper"
          >
            <Tab eventKey="profile" title="Registration" className="tabs__inner ">
              <Registration />
            </Tab>
            <Tab
              eventKey="compliances"
              title="Compliances"
              className="tabs__inner "
            >
              <Compliance />
            </Tab>
            <Tab eventKey="gst" title="GST" className="tabs__inner">
              <Gst />
            </Tab>
            <Tab
              eventKey="income"
              title="Income Tax"
              className="tabs__inner"
            >
              <Incometax />
            </Tab>
            <Tab
              eventKey="labour"
              title="Labour Tax"
              className="tabs__inner"
            >
              <Labourtax />
            </Tab>
          </Tabs>
        </div>
      </Container> */}
      <Container>
      <div className="services_Grid">
        {ServicesDataList.map((content,index)=>(
         
            <div className="services_GridInner">
          <span>{content.title}</span>
          </div>
       
        ))}
                      
        </div>
      </Container>
    </div>
  );
}

export default Service;
