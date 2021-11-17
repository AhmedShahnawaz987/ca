import React from 'react'
import "../Pages.css";
import { Col, Nav, Row, Tab, TabContainer } from "react-bootstrap";
function Gst() {
    return (
        <div className="pages__main">
                       
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="navitem">
                <Nav.Link eventKey="first" className="navlink">GST</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navitem">
                <Nav.Link eventKey="second" className="navlink">Tax Deducted Source (TDS)</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navitem">
                <Nav.Link eventKey="third" className="navlink">Pay roll</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navitem">
                <Nav.Link eventKey="fourth" className="navlink">Labour Tax</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navitem">
                <Nav.Link eventKey="fifth" className="navlink">Company Law</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navitem">
                <Nav.Link eventKey="sixth" className="navlink">Annual Compliance</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
               
              </Tab.Pane>
              <Tab.Pane eventKey="second">
               
              </Tab.Pane>
              <Tab.Pane eventKey="third">
               
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
               
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
               
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
               
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      
        </div>
    )
}

export default Gst
