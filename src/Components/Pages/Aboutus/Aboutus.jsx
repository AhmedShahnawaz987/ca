import React from "react";
import aboutus from "/Myproject/ca/src/Assets/aboutus.jpg";
import wwa from "/Myproject/ca/src/Assets/whowe.webp";
import wwa1 from "/Myproject/ca/src/Assets/wwa2.jpg";
import wwa2 from "/Myproject/ca/src/Assets/wwa3.jpg";
import wwa3 from "/Myproject/ca/src/Assets/wwa4.jpg";
import "./About.css";
import { Container } from "react-bootstrap";
import { Tab, Nav, Col, Row } from "react-bootstrap";
function Aboutus() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__first">
        <img src={aboutus} className="aboutUs__image" />

        <div className="aboutUs__heading">
          <h3>About us</h3>
        </div>
      </div>

      <div className="aboutUs__wwa">
        <Container>
          <img src={wwa} className="aboutus__wwa__image" />
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="first"
            className="tabContainer"
          >
            <Row className="tabContainer__row">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <div className="filter-links3">
                    <div className="aboutUs__tabs">
                      <Nav.Item className="aboutUs__tab__links">
                        <Nav.Link
                          eventKey="first"
                          className="aboutUs__tab__links1"
                        >
                          Who we are
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                    <div className="aboutUs__tabs">
                      <Nav.Item className="aboutUs__tab__links">
                        <Nav.Link
                          eventKey="second"
                          className="aboutUs__tab__links1"
                        >
                          What are we
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                    <div className="aboutUs__tabs">
                      <Nav.Item className="aboutUs__tab__links">
                        <Nav.Link
                          eventKey="third"
                          className="aboutUs__tab__links1"
                        >
                          Our approaches
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                  </div>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first" className="aboutUs__tabPane">
                    <h1>Who we are?</h1>
                    <p>
                      We are a team of proficient professionals comprising Big
                      Four experienced financial experts, with expertise in
                      diverse business fields. Striving to deliver
                      custom-tailored financial management support to our
                      esteemed clientele through relentless and committed
                      efforts.
                    </p>
                    {/* <div className="aboutUs__wwa__image1__div"> */}
                    <img src={wwa1} className="aboutUs__wwa__image1" />
                    {/* </div> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="aboutUs__tabPane">
                    <h1>What are we?</h1>
                    <p>
                      An epitome of professionalism, CA Accounting and
                      Bookkeeping Services LLC is one of the most trusted
                      accounting firms in UAE, delivering customized accounting
                      and financial advisory services in Dubai and the other
                      regions in the country.
                    </p>
                    <img src={wwa2} className="aboutUs__wwa__image1" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" className="aboutUs__tabPane">
                    <h1>Our approaches</h1>
                    <p>
                      An all-encompassing analysis precedes our actions. The
                      team will ascertain the financial status, the performance
                      of the firm and economic activities to formulate the
                      custom-tailored process. It would be pivotal in attaining
                      the best outcome.
                    </p>
                    <img src={wwa3} className="aboutUs__wwa__image1" />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </div>
  );
}

export default Aboutus;
