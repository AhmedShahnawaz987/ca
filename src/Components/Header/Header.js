import React, { useEffect, useState } from "react";
import "./Header.css";
import { Carousel } from "react-bootstrap";
import logo from "/Myproject/ca/src/Assets/ca-logo.png";
import CallIcon from '@material-ui/icons/Call';

// import heading from "/My project/ca/src/Assets/cheading.png";

function Header() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav(e) {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  }
  useEffect(() => {
    var header = document.getElementById("nav");
    var btns = header.getElementsByClassName("navbar__links1");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", () => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  });
  const [navbar,setNavbar]=useState(false);
  const changeBackground=()=>{
    if(window.scrollY>=80){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBackground)

  return (
    <div>
    
      <div className={navbar ? 'header1':'header' }>
        <div className="header__left">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="header__right">
          <div id="nav" className="navbar__links">
            {/* <ul>
              <li className="navbar__links">Home</li>
              <li className="navbar__links">About us</li>
              <li className="navbar__links">Services</li>
              <li className="navbar__links">Blogs</li>
              <li className="navbar__links">Contact us</li>
            </ul> */}
             <a href="as" className="navbar__links1">
              Home
            </a>
            <a href="as" className="navbar__links1 active">
              About
            </a>
            <a href="as" className="navbar__links1">
              Services
            </a>
            <a href="as" className="navbar__links1">
              Blogs
            </a>
            <a href="as" className="navbar__links1">
              Contact Us
            </a>
           
          </div>
          <button className="header__right_button"><CallIcon />Call us</button>
          <div className="hamburger">
            <div id="mySidenav" className="sidenav">
              <a href="a" className="closebtn" onClick={closeNav}>
                &times;
              </a>
              <a href="sf" className="hamburger__links">
                About
              </a>
              <a href="shd" className="hamburger__links">
                Services
              </a>
              <a href="gds" className="hamburger__links">
                Clients
              </a>
              <a href="gd" className="hamburger__links">
                Contact
              </a>
            </div>

            <span
              className="hamburger__button"
              style={{ fontSize: "30px", cursor: "pointer", float: "right" }}
              onClick={openNav}
            >
              &#9776;
            </span>
          </div>
      
      </div>
      </div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.indianexpress.com/2018/02/thinkstockphotos-881556266-e1519494802356.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel__caption">
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-200"
            src="https://image.shutterstock.com/image-photo/group-partner-working-conversation-business-260nw-1661937301.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="carousel__caption">
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-exp1.licdn.com/dms/image/C4E1BAQHe4cHI5GL4Kg/company-background_10000/0/1560453011421?e=2159024400&v=beta&t=I0F_Wxa1mIcL9GltR-wIDM0GFfCfPU3RqY54K3cv3U8"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel__caption">
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <div className="request__form">
        <div className="request__form__list">
          <h1 className="request__form__title">Request a consultation</h1>
          <div className="request__input">
            <input type="text" className="request__input__type" placeholder="" />
            <label className="request__label">Name</label>
          </div>
          <div className="request__input">
            <input type="email" className="request__input__type" placeholder=""/>
            <label className="request__label">Email</label>
          </div>

          <div className="request__input">
            <input type="text" className="request__input__type" placeholder=""/>
            <label className="request__label">Conatct Us</label>
          </div>
          <div className="request__form__send">
            <a href="request__send">Send</a>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Header;
