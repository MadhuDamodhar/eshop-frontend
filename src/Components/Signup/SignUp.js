import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import Service from "../Service/Service";
import signupimg from "../Signup/signup2.png";
function SignUp() {
  const [showModal, setShowModel] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [seller, setSeller] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleModal = () => {
    setShowModel(true);
  };
  const handleModalClose = () => {
    setShowModel(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSeller({ ...seller, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const { FirstName, LastName, Dob, Age, Address, Mobile, Email, Password } =
    //   seller;
    // if (
    //   !FirstName.trim() ||
    //   !LastName.trim() ||
    //   !Dob.trim() ||
    //   !Age.trim() ||
    //   !Address.trim() ||
    //   !Mobile.trim() ||
    //   !Email.trim() ||
    //   !Password.trim()
    // )
    //   setMsg("Please fill all the details.");

    // setInterval(() => {
    //   setMsg("");
    // }, 5000);

    Service.signUp(seller)
      .then((res) => {
        setMsg(res.data.message);
        setSeller({
          firstName: "",
          lastName: "",
          address: "",
          mobile: "",
          email: "",
          password: "",
        });
        handleModal();
      })
      .then((err) => {
        console.log(err);
      });
    const messageTimer = setInterval(() => {
      setMsg("");
    }, 2000);
    // const navigationTimer = setTimeout(() => {
    //   navigate("/logIn");
    // }, 1500);
    return () => {
      clearInterval(messageTimer);
      // clearTimeout(navigationTimer);
    };
  };

  //confirm password logic

  const handlePassword = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);

    if (seller.password === "") {
      setMsg("");
    } else if (seller.password !== value) {
      setDisable(true);
      setMsg("Password didn't match");
      setTimeout(() => {
        setMsg("");
      }, 2000);
    } else {
      setDisable(false);
      setMsg("Password match");
      setTimeout(() => {
        setMsg("");
      }, 3000);
    }
  };

  return (
    <>
      {showModal && (
        <p>
          <Modal closeModal={handleModalClose} />
        </p>
      )}
      <div className="SignUp">
        <form onSubmit={handleSubmit} class="form">
          <p className="title">Create Your Account</p>
          {msg ? (
            <p className="Loginmsg">{msg}</p>
          ) : (
            <p className="message">
              Complete the quick registration on E-Shop.
            </p>
          )}

          <div class="flex">
            <label>
              <input
                class="input"
                autoComplete="off"
                name="firstName"
                value={seller.firstName}
                type="text"
                placeholder=""
                required
                onChange={handleInputChange}
              />
              <span>First Name :</span>
            </label>

            <label>
              <input
                class="input"
                autoComplete="off"
                name="lastName"
                value={seller.lastName}
                type="text"
                placeholder=""
                required
                onChange={handleInputChange}
              />
              <span>Last Name :</span>
            </label>
          </div>
          <div class="flex">
            <label>
              <input
                class="input"
                name="address"
                autoComplete="off"
                value={seller.address}
                type="text"
                placeholder=""
                required
                onChange={handleInputChange}
              />
              <span>Address :</span>
            </label>

            <label>
              <input
                class="input"
                name="mobile"
                autoComplete="off"
                value={seller.mobile}
                type="number"
                placeholder=""
                required
                onChange={handleInputChange}
              />
              <span>Mobile :</span>
            </label>
          </div>
          <label>
            <input
              class="input"
              name="email"
              autoComplete="off"
              value={seller.email}
              type="email"
              placeholder=""
              required
              onChange={handleInputChange}
            />
            <span>Email :</span>
          </label>
          <label>
            <input
              class="input"
              name="password"
              autoComplete="off"
              value={seller.password}
              type="password"
              placeholder=""
              required
              onChange={handleInputChange}
            />
            <span>password :</span>
          </label>
          <label>
            <input
              class="input"
              name="passwordCopy"
              value={confirmPassword}
              autoComplete="off"
              type="password"
              placeholder=""
              onChange={handlePassword}
              required
            />
            <span>Confirm Password :</span>
          </label>
          <button
            id="submitButton"
            disabled={disable}
            type="submit"
            class="submit"
          >
            Sign Up
          </button>
          <p class="signin">
            Already have an acount ?{" "}
            <Link className="Link" to="/logIn">
              Sign In
            </Link>{" "}
          </p>
        </form>
        <div className="right-section3">
          <img src={signupimg}></img>
          <p>
            Jumpstart your business by quickly <br></br>registering on E-Shop to
            set up <br></br>your seller profile today. . . . !
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
