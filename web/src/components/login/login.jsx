import React from 'react';
import './login.css';
import axios from 'axios';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted")

    axios.post('http://localhost:3000/login', {
      email : email,
      password: password
    })
    .then(function (response) {
      console.log(response.data.message);
    })
    .catch(function (error) {
      console.log(error.data.message);
    });
}

  return (
    <div className="login-form">
     <div className='form'>
       <form onSubmit={submitHandler}>
        <h1>LogIn</h1>
        <input type="email" placeholder="Email"  className="input-box" required onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder="Password"  className="input-box" required onChange={(e)=>{setPassword(e.target.value)}} />
        <p>Forgot password?</p>
        <input type="submit" value="Login" id="login-btn" />
        <p> Don't have an account?   <Link to='/' id='link'> Sign Up </Link></p>
       </form>
    </div>
    </div>
  )
}

export default Login;
