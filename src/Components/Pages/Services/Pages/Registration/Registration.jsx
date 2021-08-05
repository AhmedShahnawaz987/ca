import React from "react";
import "./Registration.css";
import { Tab, Nav, Col, Row, Container } from "react-bootstrap";
import register from "/Myproject/ca/src/Assets/register.svg";
import shop from "/Myproject/ca/src/Assets/shop.png";
import tax from "/Myproject/ca/src/Assets/tax.png";
import License from "/Myproject/ca/src/Assets/License.png";
import foodLicense from "/Myproject/ca/src/Assets/foodLicense.png";
import percentage from "/Myproject/ca/src/Assets/percentage.png";
import invoice from "/Myproject/ca/src/Assets/invoice.png";
import reminder from "/Myproject/ca/src/Assets/reminder.png";
import partnership from "/Myproject/ca/src/Assets/partnership.png";
import Serviceicon from "../../Serviceicon";
function Registration() {
  return (
    
      <div className="register__main">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills">
                <Nav.Item className="navitem">
                  <Nav.Link eventKey="first" className="navlink">
                    Sole Proprietor Registration
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navitem">
                  <Nav.Link eventKey="second" className="navlink">
                    GST
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navitem">
                  <Nav.Link eventKey="third" className="navlink">
                    Labour Tax Registration
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navitem">
                  <Nav.Link eventKey="fourth" className="navlink">
                    Limited Liability Partnership
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navitem">
                  <Nav.Link eventKey="fifth" className="navlink">
                    Partnership Firm
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navitem">
                  <Nav.Link eventKey="sixth" className="navlink">
                    Private Limited Company
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="tabs__area">
              <Tab.Content>
                <Tab.Pane eventKey="first" className="tab__pane">
                  <h4>Sole Proprietor Registration</h4>
                  <p>
                    Most businesses in India start individually without other’s
                    participation. An individual carrying out business
                    activities is the sole proprietor and its business entity is
                    said to be a Proprietorship Firm. The identity of an
                    individual and the business are not different from each
                    other. But due to the lower tax rate, flexibility and
                    multiple advantages people prefer this structure for the
                    early stage of business.
                  </p>
                  <div className="tab__pane1">
                    <img src={register} />

                    <div className="tab__pane2">
                      <div className="tab__pane3">
                        <Serviceicon src={tax} />
                        <Serviceicon title="Professional Tax" />
                      </div>
                      <div className="tab__pane3">
                        <Serviceicon src={shop} />
                        <Serviceicon title="Shop and Establishment" />
                      </div>
                      <div className="tab__pane3">
                        <Serviceicon src={percentage} />
                        <Serviceicon title="GST" />
                      </div>
                      <div className="tab__pane3">
                        <Serviceicon src={foodLicense} />
                        <Serviceicon title="Food License (Food Industry)" />
                      </div>
                      <div className="tab__pane3">
                        <Serviceicon src={License} />
                        <Serviceicon title="Trade License Etc" />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="tab__pane">
                  <h4>GST</h4>
                  <p>GST registration is applicable for all the businesses, whose</p>
                  <ul>
                    <li>Turnover is more than Rs 20 Laks for service providers or</li>
                    <li>Businesses dealing with Ecommerce platforms</li>
                    <li>Turnover is more than Rs 40 Laks for goods or</li>
                  </ul>
                  <div className="tab__pane2">
                  <div className="tab__pane3">
                    <Serviceicon src={reminder}/>
                    <Serviceicon title="GST timely reminders"/>
                  </div>
                  <div className="tab__pane3">
                    <Serviceicon src={percentage}/>
                    <Serviceicon title="One stop solution for your GST Needs"/>
                  </div>
                  <div className="tab__pane3">
                    <Serviceicon src={invoice}/>
                    <Serviceicon title="Free Invoicing software"/>
                  </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third" className="tab__pane">
                  <h4>Labor Tax Registrations</h4>
                  <p>Entrepreneurs are having legal responsibility in complying with labor tax compliances. Based on the number of employees, gross salary, gender, working hours and other allied compliances, employers need to register under various laws.</p>
                  <ul>
                    <li>Provident Fund registration</li>
                    <li>Provident Fund registration is applicable for all the businesses whose employees are more than 20.</li>
                    <li>ESI registration</li>
                    <li>Employee state registration is applicable for all the businesses whose employees are more than 10.</li>
                    <li>Professional Tax</li>
                    <li>Professional Tax is applicable for all the businesses and self-employed professionals. Professional Tax registration is classified as 1. Professional Tax Employer Registration - Certificate of Enrollment (EC) 2. Professional Tax Employee Registration -- Certificate of Registration (RC)</li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth" className="tab__pane">
                  <h4>Limited Liability Partnership</h4>
                  <p>Limited Liability Partnership can be formed with a minimum of two designated partner and there is no maximum limit on the partners. You can know more about limited liability partnership through our Blog.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth"  className="tab__pane">
                  <h4>Partnership Firm</h4>
                  <p>A Partnership Firm is a popular form of business constitution for businesses that are owned, managed and controlled by an association of people for profit. Partnership Firms are relatively easy to start, prevalent among small and medium sized businesses in the unorganized sectors.</p>
                  
                  
                </Tab.Pane>
                <Tab.Pane eventKey="sixth" className="tab__pane">
                  <h4>Private Limited Company</h4>
                  <p>Private Limited Company, the most popular legal structure for businesses, should be chosen by anyone planning to raise funds and with a long term business view. A Private limited company can be incorporated with minimum 2 directors and minimum paid up capital of Rs.1,00,000/-</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    
  );
}

export default Registration;

