import { Button, Container } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import TextField from "@material-ui/core/TextField";
import React,{useEffect} from "react";
import "./Contactus.css";
function Contactus() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="contactUs__main">
      <div className="contactUs__first">
        <img src="https://media.istockphoto.com/photos/dice-with-communication-symbols-on-keyboard-picture-id1161344489?k=6&m=1161344489&s=612x612&w=0&h=1I4Q-mgrNzEMJZVmX9XoVpYKh4H0WH03n03LL3FPyds=" />
        <div className="contactUs__heading">
          <h3>Contact us</h3>
        </div>
      </div>
      <Container>
        <div className="contactUs__main1">
          <div className="contactUs__left" data-aos="fade-down">
            <div className="contactUs__call">
              <CallIcon className="calll" />
              <span>(022) 232444</span>
            </div>
            <div className="contactUs__call">
              <MailOutlineIcon className="calll" />
              <span>info@ms-ca.com</span>
            </div>
            <div className="contactUs__call">
              <LocationOnIcon className="calll" />
              <span>
                Suite 501, Floor 5, City Tower, M.G Road (Airport Road) –
                Mumbai, INDIA
              </span>
            </div>
            <div className="contactUs__call">
              <AccessTimeIcon className="calll" />
              <span> Mon – Sat : 8.30 am – 5.30 pm Sunday : Closed</span>
            </div>
          </div>
          <div className="contactUs__right " data-aos="fade-up">
          
            <div>
              <h3>Send us a message</h3>
              <p>
                It just takes one conversation to get the ball unstuck and
                rolling in the right direction, so why not get in touch?
              </p>
            </div>
            <div className="contactUs__form">
              <form>
                <div className="contactUs__form1">
                  <TextField
                    id="standard-basic"
                    label="First name"
                    required
                    name="name"
                  />
                </div>
                <div className="contactUs__form1">
                  <TextField id="standard-basic" label="Email" required />
                </div>
                <div className="contactUs__form1">
                  <TextField id="standard-basic" label="Company/Organisation" />
                </div>
                <div className="contactUs__form1">
                  <TextField
                    id="standard-basic"
                    label="Contact Number"
                    required
                  />
                </div>
                <div className="contactUs__form__input">
                  <textarea placeholder="Message" required />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="contactUs__submit"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contactus;
