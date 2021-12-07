import React, { useState } from 'react'
import './RequestForm.css'
function RequestForm() {
    const [records,setRecords] = useState([]);
  const [userRegistration, setUserRegistration] = useState({
    fullname:"",
    email:"",
    message:""
  })
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
        <div>
            <form action="" onSubmit={handleSubmit}>
      <div className="request__form" >
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
    )
}

export default RequestForm
