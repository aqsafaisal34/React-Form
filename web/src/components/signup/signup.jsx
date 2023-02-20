import React from "react";
import "./signup.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    axios
      .post("http://localhost:3000/signup", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
      })
      .then(function (response) {
        console.log(response.data.message);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error.data.message);
      });
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <h1>SignUp</h1>
        <div id="name-box">
          <input
            type="text"
            placeholder="First Name"
            required
            id="firstname"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Last Name"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="input-box"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="input-box"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
          className="input-box"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <input type="submit" value="Signup" id="signup-btn" />
        <p>
          {" "}
          Already have an account? <Link to="/login" id="link"> Sign in </Link>
        </p>
        <p>
          
          Copyright @ Your Company.com
        </p>
      </form>
    </div>
  );
};

export default Signup;
