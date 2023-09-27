import React, { useState } from 'react';
import './home.css';
import { Link, Outlet} from 'react-router-dom';
import logo from '../../images/Art design.png';


export const Home = () => {
  
  return (
    <div>
        <div className='Loginpage'>
          <div className='header'>
        <img src={logo} width="90rem" height="90rem"/>
          <div className='header-content'>
          <div><Link to="/" className='link'>About</Link></div>
          <div><Link to="login" className='link'>Login</Link></div>
          
          </div>
          </div>
        </div>
      
  <Outlet/>
  
    </div>
  )
}
export default Home;
