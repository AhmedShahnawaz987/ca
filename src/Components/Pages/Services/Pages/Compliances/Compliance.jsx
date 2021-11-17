import React from "react";
import { Col, Nav, Row, Tab, TabContainer } from "react-bootstrap";
// import "./Compliance.css";
import "../Pages.css";
// import "../Registration/Registration.css";
function Compliance() {
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
          <Col sm={9} className="tabs__area">
            <Tab.Content className="tab__content">
              <Tab.Pane eventKey="first" className="tab__pane">
               <h4>GST</h4>
               <p>GST has been implemented all over India with effect from 1st July, 2017. Under the new GST regime, nearly 2 crores businesses in India have obtained GST registration. All businesses having GST registration are required to file GST returns.</p>
               <h5>GST Registration?</h5>
               <ol>
                   <li> Turnover of goods and services crossing Rs.20/40 Lakhs</li>
                   <li>E-commerce operators – Such as Flipkart, Snapdeal Etc</li>
                   <li>Non Resident entities - Any Non-resident person or company supplying goods or services irrespective of turnover.</li>
                   <li>Inter-state supplies - Anyone supplying goods or services to another state, need to apply for GST regardless of turnover. Even online service provider serving customers in another State will instantly attract GST registration.</li>
                   <li>Vendors through Ecommerce portals – Persons who supplies goods through E-commerce sites</li>
                   <li>Services from outside India – Any person providing services out of India need to register GST with irrespective of turnover.</li>
               </ol>
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="tab__pane">
               <h4>Tax Deducted Source (TDS)</h4>
               <p>Tax Deducted at Source (TDS) is one of the modes of collecting income tax in India at the very source of income, governed under the Indian Income Tax Act of 1961. It is controlled by the Central Board for Direct Taxes (CBDT) and is part of the Department of Revenue in-charge of Indian Revenue Service (IRS).</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third" className="tab__pane">
               <h4>Payroll</h4>
               <p>Payroll is part of statutory audit and involves lot of compliances under various acts. Discrepancies will result in heavy penalties, interest and disallowance of expenditure.</p>
               <p>Payroll compliances are always complicated until unless you are not with us. We offer statutory reports, ESS (Employee self-portal) and other Payroll info at ease.</p>
               <p>We offer collaborative service with payroll and labor taxes, which make us very unique in this industry.</p>
               <p>Ease your payroll burden with CA.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth" className="tab__pane">
               
              </Tab.Pane>
              <Tab.Pane eventKey="fifth" className="tab__pane">
               <h4>Company Law</h4>
               <p>A company which has been incorporated in India must ensure compliance with the Companies Act,2013.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="sixth" className="tab__pane">
               
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    
  );
}

export default Compliance;
