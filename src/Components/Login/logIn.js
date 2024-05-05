import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logIn.css";
import { Link } from "react-router-dom";
import LoginImg from "../Login/login-animated1.gif";
import Service from "../Service/Service";
import LoginModal from "../LoginModal/LoginModal";

function LogIn() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [seller, setSeller] = useState({
    email: "",
    password: "",
  });

  const handleModal = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSeller({ ...seller, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Service.signIn(seller)
      .then((res) => {
        const response = res.data.message;
        console.log(response)
        if(response==="success"){
          handleModal();
          setSeller({
            email: "",
            password: "",
          });
        }else{
          setMsg("Invalid Details!");
          const messageTimer = setInterval(() => {
           setMsg("")
         }, 2000);
         return(()=>{
          clearInterval(messageTimer);
         })
        }
      })
  };

  return (
    <>
      {showModal && (
        <p>
          <LoginModal closeModal={handleModalClose} />
        </p>
      )}
      <div className="Login">
        <form onSubmit={handleSubmit} className="Loginform">
          <p className="Logintitle">Log Into Your Account</p>
          {msg ? (
            <p className="Loginmsg">{msg}</p>
          ) : (
            <p className="message">LogIn to list your products</p>
          )}
          <label>
            <input
              className="Logininput"
              name="email"
              autoComplete="off"
              value={seller.email}
              type="email"
              required
              onChange={handleInputChange}
            />
            <span>Email :</span>
          </label>
          <label>
            <input
              className="Logininput"
              name="password"
              autoComplete="off"
              value={seller.password}
              type="password"
              required
              onChange={handleInputChange}
            />
            <span>Password :</span>
          </label>
          <button className="Loginsubmit">Sign In</button>
          <p className="Loginlink">
            Don't have an account?{" "}
            <Link className="Link" to="/signUp">
              Sign Up
            </Link>
          </p>
        </form>
        <div className="right-section2">
          <img src={LoginImg} alt="Unlock Your Potential"></img>
          <p>
            Unlock your full potential by accessing
            <br /> your dashboard to expertly manage your <br />
            products on E-Shop. . . . !
          </p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
