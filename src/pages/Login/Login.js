import React, { useState } from 'react'
import './Login.css';
import Slideimg from '../../compontent/slide/slide';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();
  function signin(){
    const data={
      'name':email,
      'password':password
    }
    if(email==="admin" && password==="admin"){
      
      navigate("/clienthome",{state:data});
    }
    else{
      alert("incorrectpassword");
    }
  }
  return (
    <div className='loginpage'>
     
     <Slideimg />
      <div className='login-division'>
        <div className='login-border'>
            <form onSubmit={signin}>
            <div className='login-content'>    
            <div><h1>Login</h1></div>
            <div><input type='text' placeholder='email' onChange={(e)=> setEmail(e.target.value)} /></div>
            <div><input type='password' placeholder='password' onChange={(e)=> setPassword(e.target.value)} /></div>
            <div><input type='submit' value="Login" /></div>
            </div>
            </form>
            <div className='bottom'><div><button className='btn'>Forgetpassword</button></div>
            <div><button className='btn'>Signup</button></div></div>
        </div>
        </div>
        
    </div>
  )
}

export default Login