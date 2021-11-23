import React from 'react'
import "./Footer.css";
import logo from "/Myproject/ca/src/Assets/ca-logo.png";
import {Container} from "react-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <Container>
            <div className="footer__container1">
                <div className="footer__left">
                <img src={logo} alt="" className="footer__logo"></img>
                <p>Chattered Associates Accounting and Bookkeeping Services LLC is a central hub for all the Management Consultant Services you need in Mumbai. From Advisory Services to Tax Auditing, we offer a wide variety of services to an inclusive clientele.</p>
                </div>
            
            <div className="footer__middle">
                <h1 style={{fontSize:"20px"}}>Our services</h1>
                <Link to="/about" className="footer__links"><li>About us</li></Link>
                <Link to="" className="footer__links"><li>Why CA</li></Link>
                <Link to="/contactus" className="footer__links"><li>Contact Us</li></Link>
                <a href="our services" className="footer__links"><li>Privacy policy</li></a>
                <a href="our services" className="footer__links"><li>Careers</li></a>

            </div>
            <div className="footer__middle1">
                <h1 style={{fontSize:"20px"}}>Our services</h1>
                <a href="our services" className="footer__links"><li>Bussiness services</li></a>
                <a href="our services" className="footer__links"><li>Accounting</li></a>
                <a href="our services" className="footer__links"><li>Auditing & Assurance Services</li></a>
                <a href="our services" className="footer__links"><li>Vat</li></a>
                <a href="our services" className="footer__links"><li>Accounting Software</li></a>

            </div>
            <div className="footer__right">
                <h1 style={{fontSize:"20px"}}>Contact Us</h1>
                <p>40th floor, Citadel tower Business Bay Mumbai</p>
                <a href="dd" >Phone No: +971 426 100 89</a>
                <a href="dd">Mobile No: +971 426 100 89</a>
                <a href="dd">Mobile No1: +971 426 100 89</a>
                <a href="email" style={{color:"white"}}>E-mail: info@ca     audit.com</a>
            </div>
            </div>
            <div className="social__links">
            <h2>SOCIAL LINKS</h2>
            <div className="social__links2">
            
            <div className="social__links1">
              <a href="ac"><FacebookIcon /></a>
              </div>
              <div className="social__links1">
              <a href="ac"><TwitterIcon /></a>
              </div>
              <div className="social__links1">
              <a href="ac"><LinkedInIcon /></a>
              </div>
              <div className="social__links1">
              <a href="ac"><InstagramIcon /></a>
              </div>

              </div>
             
              
              
              </div>
              
              </Container>
              {/* <div className="footer__line"></div> */}
              <div className="footer__copy">
                  <p>2021 Copyright © <span className="footer__copy__ca">Intplus technosolution</span> All Rights Reserved.</p>
              </div>
        </div>
    )
}

export default Footer
