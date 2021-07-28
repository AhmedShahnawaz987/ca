import { Button, Container } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TextField from '@material-ui/core/TextField';
import React from 'react'
import "./Contactus.css";
function Contactus() {
    return (
        <div className="contactUs__main">
            
            <img src="https://c1.wallpaperflare.com/preview/94/860/1004/office-tax-business-finance.jpg"/>
            <Container>
            <div className="contactUs__main1">
            <div className="contactUs__left">
                
                <div className="contactUs__call">
                <CallIcon className="calll"/>
                 <span>(+971) 23093344</span>
                </div>
                <div className="contactUs__call">
                <MailOutlineIcon className="calll"/>
                 <span>info@ms-ca.com</span>
                </div>
                <div className="contactUs__call">
                <LocationOnIcon className="calll"/>
                 <span>Suite 501, Floor 5, Al Neyadi Tower,
Sheikh Rashid Bin Saeed Road (Airport Road)
P.O.Box No 752 430 – Abu Dhabi, UAE</span>
                </div>
                <div className="contactUs__call">
                <AccessTimeIcon className="calll"/>
                 <span>Sat – Thur : 8.30 am – 5.30 pm
Friday : Closed</span>
                </div>
            </div>
            <div className="contactUs__right">
                <div>
                    <h3>Send us a message</h3>
                    <p>It just takes one conversation to get the ball unstuck and rolling in the right direction, so why not get in touch?</p>
                </div>
                <div className="contactUs__form">
                    <form >
                        <div className="contactUs__form1">
                        <TextField id="standard-basic" label="First name" required name="name"/>
                        </div>
                    <div className="contactUs__form1">
                    <TextField id="standard-basic" label="Email" required />
                    </div>
                    <div className="contactUs__form1">
                    <TextField id="standard-basic" label="Company/Organisation" />
                    </div>
                    <div className="contactUs__form1" >
                    <TextField id="standard-basic" label="Contact Number" required />
                    </div>
                    <div className="contactUs__form__input">
                    <textarea placeholder="Message1" required/>
                        {/* <input type="text" maxLength="100" className="contactUs__form__input1" placeholder="Message"></input> */}
                    </div>
                    <input type="submit" value="Submit" className="contactUs__submit"></input>
                    {/* <Button variant="contained" color="primary" value='submit' style={{backgroundColor:"#22abe3", width:"100%"}} >Submit</Button> */}

                    </form>
                    </div>
            </div>
            </div>
            </Container>

        </div>
    )
}

export default Contactus
