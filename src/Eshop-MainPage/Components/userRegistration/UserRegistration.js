import React, { useState } from "react";
import "./UserRegistration.css";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import Service from "../Service/UserRegistrationService.js";
import signupimg from "../userRegistration/signup2.png";

function UserRegistration() {
  const [showModal, setShowModal] = useState(false);
  const [disable, setDisable] = useState(false);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userAddress: "",
    userAbout: "",
    userGender: "",
    userPhone: "",
  });

  const handleModal = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Service.registerUser(user)
      .then((res) => {
        setMsg(res.data.message);
        console.log(user);
        
        setUser({
          userName: "",
          userEmail: "",
          userPassword: "",
          userAddress: "",
          userAbout: "",
          userGender: "",
          userPhone: "",
        });
        handleModal();
      })
      .catch((err) => {
        console.log(err);
        setMsg("Error signing up. Please try again.");
      });

    const messageTimer = setInterval(() => setMsg(""), 2000);
    return () => clearInterval(messageTimer);
  };

  return (
    <>
      {showModal && <Modal closeModal={handleModalClose} />}
      <div className="SignUp">
        <form onSubmit={handleSubmit} className="form">
          <p className="title">Create Your Account</p>
          {msg ? (
            <p className="Loginmsg">{msg}</p>
          ) : (
            <p className="message">
              Complete the quick registration on E-Shop.
            </p>
          )}

          <div className="flex">
            <label>
              <input
                className="input"
                autoComplete="off"
                name="userName"
                value={user.userName}
                type="text"
                required
                onChange={handleInputChange}
              />
              <span>User Name :</span>
            </label>

            <label>
              <input
                className="input"
                autoComplete="off"
                name="lastName"
                value={user.lastName}
                type="text"
                required
                onChange={handleInputChange}
              />
              <span>Mobile :</span>
            </label>
          </div>

          <div className="flex">
            <label>
              <input
                className="input"
                name="userAddress"
                autoComplete="off"
                value={user.userAddress}
                type="text"
                required
                onChange={handleInputChange}
              />
              <span>Address :</span>
            </label>

            <label>
              <input
                className="input"
                name="mobile"
                autoComplete="off"
                value={user.mobile}
                type="text"
                required
                onChange={handleInputChange}
              />
              <span>Gender :</span>
            </label>
          </div>

          <label>
            <input
              className="input"
              name="userEmail"
              autoComplete="off"
              value={user.userEmail}
              type="email"
              required
              onChange={handleInputChange}
            />
            <span>Email :</span>
          </label>

          <label>
            <input
              className="input"
              name="userPassword"
              autoComplete="off"
              value={user.userPassword}
              type="password"
              required
              onChange={handleInputChange}
            />
            <span>Password :</span>
          </label>

          <label>
            <input
              className="input"
              name="userAbout"
              value={user.userAbout}
              autoComplete="off"
              type="text"
              required
              onChange={handleInputChange}
            />
            <span>About :</span>
          </label>

          <button
            id="submitButton"
            disabled={disable}
            type="submit"
            className="submit"
          >
            Sign Up
          </button>

          <p className="signin">
            Already have an account?{" "}
            <Link className="Link" to="/logIn">
              Sign In
            </Link>
          </p>
        </form>

        <div className="right-section3">
          <img src={signupimg} alt="Sign up" />
          <p>
            Jumpstart your business by quickly registering on E-Shop to set up
            your user profile today...!
          </p>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
