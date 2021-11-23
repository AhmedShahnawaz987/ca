import { Button, Container } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import TextField from "@material-ui/core/TextField";
import React,{lazy, useEffect , Suspense, useState} from "react";
import "./Contactus.css";
// import Banner from "../../banner/Banner";
function Contactus() {
  const [input, setInput] = useState({
    name:"",
    email:"",
    company:"",
    contact:"",
    message:""
});
const [record,setRecord]=useState([]);
  const handleInput=(e)=>{
    const name = e.target.name;
    // console.log(name);
    const value = e.target.value;
    // console.log(value);
    setInput({...input, [name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newRecord = ({...input, id:new Date().getTime().toString()})
    console.log(record);
    setRecord([...record,newRecord]);
    setInput({name:"",email:"",company:"",contact:"",message:""})
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const Banner = lazy(() => import("../../banner/Banner"))

  return (
    <div className="contactUs__main">
      <div className="contactUs__first">
      <Suspense fallback={<div style={{ width:"100%", height:"500px", backgroundColor:"rgba(128, 128, 128, 0.1)"}}>Loading</div>}>
        <Banner img={"https://media.istockphoto.com/photos/dice-with-communication-symbols-on-keyboard-picture-id1161344489?k=6&m=1161344489&s=612x612&w=0&h=1I4Q-mgrNzEMJZVmX9XoVpYKh4H0WH03n03LL3FPyds="} heading={"Contact Us"}/>        
        </Suspense>
      </div>

      <Container>
        <div className="contactUs__main1">
          <div className="contactUs__left" >  {/*data-aos="fade-down"*/}
            <div className="contactUs__call">
              <CallIcon className="contactUs__icon" />
              <span>(022) 232444</span>
            </div>
            <div className="contactUs__call">
              <MailOutlineIcon className="contactUs__icon" />
              <span>info@ms-ca.com</span>
            </div>
            <div className="contactUs__call">
              <LocationOnIcon className="contactUs__icon" />
              <span>
                Suite 501, Floor 5, City Tower, M.G Road (Airport Road) –
                Mumbai, INDIA
              </span>
            </div>
            <div className="contactUs__call">
              <AccessTimeIcon className="contactUs__icon" />
              <span> Mon – Sat : 8.30 am – 5.30 pm Sunday : Closed</span>
            </div>
          </div>

          <div className="contactUs__right "   >          {/* data-aos="fade-up" */}
            
              <h3>Send us a message</h3>
              
            
            <div className="contactUs__form">
              <form onSubmit={handleSubmit}>
                <div className="contactUs__form1">
                  <TextField
                    id="standard-basic"
                    label="First name"
                    required
                    name="name" autoComplete="off" value={input.name}  onChange={handleInput}
                  />
                </div>
                <div className="contactUs__form1">
                  <TextField id="standard-basic" label="Email"  autoComplete="off"required name="email" 
                  value={input.email} onChange={handleInput}/>
                </div>
                <div className="contactUs__form1">
                  <TextField id="standard-basic" label="Company/Organisation" name="company" autoComplete="off" 
                  value={input.company} onChange={handleInput}/>
                </div>
                <div className="contactUs__form1">
                  <TextField
                    id="standard-basic"
                    label="Contact Number" autoComplete="off" name="contact"
                    required
                    value={input.contact} onChange={handleInput}
                  />
                </div>
                <div className="contactUs__form__input">
                  <textarea placeholder="Message" name="message" value={input.message} />
                </div>
                {/* <br/> */}
                <button
                  type="submit"                  
                  className="contactUs__submit"
                >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contactus;
