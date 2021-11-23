import { useEffect, useState } from "react";
import "./Header.css";
import { Carousel } from "react-bootstrap";
function Header() {
  const [records,setRecords] = useState([]);
  const [userRegistration, setUserRegistration] = useState({
    fullname:"",
    email:"",
    message:""
  })
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

const handleInput = (e) =>{
 const name= e.target.name;
 const value = e.target.value;
 setUserRegistration({...userRegistration,[name]:value})
}

const handleSubmit = (e) =>{
  e.preventDefault();
  const newRecord = {...userRegistration,  id:new Date().getTime().toString()}
  console.log(records);

  setRecords([...records, newRecord])
  console.log(records);


  setUserRegistration({fullname:"",email:"",message:""});
 
}
  return (
    <div className="header__main">
      <Carousel fade className="carousal">
        <Carousel.Item className="carousal__image">
          <img
            className="d-block w-100"
            src="https://images.indianexpress.com/2018/02/thinkstockphotos-881556266-e1519494802356.jpg"
            alt="Loading"
          />
          <Carousel.Caption className="carousel__caption">
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-200"
            src="https://image.shutterstock.com/image-photo/group-partner-working-conversation-business-260nw-1661937301.jpg"
            alt="Loading"
          />

          <Carousel.Caption className="carousel__caption">
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-exp1.licdn.com/dms/image/C4E1BAQHe4cHI5GL4Kg/company-background_10000/0/1560453011421?e=2159024400&v=beta&t=I0F_Wxa1mIcL9GltR-wIDM0GFfCfPU3RqY54K3cv3U8"
            alt="Loading"
          />

          <Carousel.Caption className="carousel__caption">
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <form action="" onSubmit={handleSubmit}>
      <div className="request__form" data-aos="fade-right">
        <div className="request__form__list">
          <h1 className="request__form__title">Request a consultation</h1>

          <div className="request__input">
            <input type="text" className="request__input__type" autoComplete="off"  name="fullname" 
             value={userRegistration.fullname} onChange={handleInput}/>
            <label className="request__label">Name</label>
          </div>

          <div className="request__input">
            <input type="email" className="request__input__type" autoComplete="off" name="email" 
            value={userRegistration.email} onChange={handleInput}/>
            <label className="request__label">Email</label>
          </div>

          <div className="request__input">
            <input type="text" className="request__input__type" autoComplete="off" name="message"
             value={userRegistration.message} onChange={handleInput}/>
            <label className="request__label">Contact Number</label>
          </div>

          {/* <div className="request__form__send"> */}
            <button type="submit" className="request__form__send">Send</button>
          {/* </div> */}
        </div>
      </div>
      </form>
    
    </div>
  );
}

export default Header;
