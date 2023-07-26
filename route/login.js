import React from 'react'
// import './login.css'
// import React, { useEffect, useState } from 'react'
import styled from "styled-components"

const Container=styled.div`
    
    background-color: rgb(17, 98, 112);
    background-size: cover;
    width: 1900px;
    height: 1090px;
    margin-top: -150px;
    margin-bottom: px;
    display: flex;
    
    .container1 {
        width: 445px;
    margin-left: 700px;
    margin-top: 350px;
    padding: 40px;
    height: 420px;
    background-color: #fff;
  }
  .form-group {
    margin-bottom: 20px;
  }
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input[type="email"],
  .form-group input[type="password"] {
    width: 94%;
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .form-group input[type="radio"] {
    margin-right: 5px;
  }
  
  .form-group input[type="submit"] {
    padding: 10px 20px;
    background-color: rgb(17, 98, 112);
    color: #fff;
    border: none;
    cursor: pointer;
    height: 50px;
    width: 100%;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-center a {
    text-decoration: none;
    font-size: 15px;
    color: #000000;
    word-spacing: 1px;
  }
  span{
      color:  rgb(17, 98, 112);
  }
  .container h2 {
font-weight: normal; 
}

.form-group label {
font-weight: normal; 
}

.text-center a {
font-weight: normal; 
}

/*media query*/
@media (max-width: 768px) {
    /* Styles for screens smaller than 768px */
    background-size: contain;
    width: 100%;
    height: auto;
    margin-top: -50px;

    .container1 {
      width: 100%;
      margin-left: 0;
      margin-top: 50px;
      padding: 20px;
      height: auto;
    }
  }

`;

export function Login() {
  return (
    <Container>
    <div class="container1">
      <h2 class="text-center">Login</h2>
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" onChange={(e)=>console.log(e.target.value)} id="email" name="email" placeholder="Enter email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" onChange={(e)=>console.log(e.target.value)} id="password" name="password" placeholder="Enter password" required />
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" name="show_password" value="true" /> Show Password
          </label>
        </div>
        <div class="form-group">
          <input type="submit" value="Sign In" />
        </div>
      </form>
      <p class="text-center">
        <a href="#">Forgot <span>Username / Password</span>? </a> <br /><a href="#">Don't have an account?<span> Sign up</span> </a>
      </p>
    </div>
    </Container>
  )
}

export default Login