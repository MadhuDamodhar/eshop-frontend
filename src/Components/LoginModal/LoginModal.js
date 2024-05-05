import React from "react";
import "./LoginModal.css";
import closebtn from "../Modal/closebtn.png";
import successGif from "../Modal/successGif.gif";
import { useNavigate } from "react-router-dom";
function LoginModel({closeModal}) {
  const navigate = useNavigate();
  return <>
  <div onClick={closeModal} className="loginmodal-conatiner"></div>
  <div className="loginmodal-wrapper">
    <img onClick={closeModal} className="logincloseBtn" src={closebtn}></img>
    <div className="loginmodal-content">
      <h1>Login Successful</h1>
      <p>Your Success Journey Begins Here!</p>
      <p>List now and grow</p>
      <img className="loginsuccessGif" src={successGif}></img>
      <button onClick={()=> navigate("/adminPanel")} className="gotoAdminPanel-btn">Go to AdminPanel</button>
    </div>
  </div>
</>
}

export default LoginModel;
