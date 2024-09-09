import React from "react";
import closebtn from "../Modal/closebtn.png";
import successGif from "../Modal/successGif.gif";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
function Modal({ closeModal }) {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={closeModal} className="modal-conatiner"></div>
      <div className="modal-wrapper">
        <img onClick={closeModal} className="closeBtn" src={closebtn}></img>
        <div className="modal-content">
          <h1>Registered Successfully</h1>
          <p>Now Sign In Into AdminPanel To List Your Products</p>
          <img className="successGif" src={successGif}></img>
          <button onClick={()=> navigate("/logIn")} className="login-btn">Sign In</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
