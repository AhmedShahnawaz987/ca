import React, { useState } from "react";
import logo from "/Myproject/ca/src/Assets/ca-logo.png";
import CallIcon from '@material-ui/icons/Call';
import { NavLink } from "react-router-dom";
import "./Header.css";


function Navbar() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
    
      function closeNav(e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";
      }
      

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
             
             <NavLink  activeClassName="actives" to="/" exact={true} className="navbar__links1">
              Home
            </NavLink>
            <NavLink  activeClassName="actives" to="/about" className="navbar__links1 ">
              About us
            </NavLink>
            <NavLink activeClassName="actives"  to="/services" className="navbar__links1">
              Services
            </NavLink>
            <NavLink activeClassName="actives"  to="/blogs" className="navbar__links1">
              Blogs
            </NavLink>
            <NavLink activeClassName="actives"  to="/contactus" className="navbar__links1">
              Contact us
            </NavLink>
           
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
                Blogs
              </a>
              <a href="gd" className="hamburger__links">
                Contact Us
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
    )
}

export default Navbar