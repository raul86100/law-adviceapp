
import './home.css';
import { Link, Outlet, useLocation} from 'react-router-dom';
import logo from '../../../images/Art design.png';
//import { useState } from 'react';


export const Home = () => {
  const location=useLocation();
  
  
  return (
    <div>
        <div className='Loginpage'>
          <div className='header'>
        <img src={logo} width="90rem" height="90rem"/>
          <div className='header-content'>
          <div><Link to="/" className={location.pathname==="/" ? "active":"link"} >About</Link></div>
          <div><Link to="login" className={location.pathname==="/login"? "active":"link"} >Login/SignUp</Link></div>
          
          </div>
          </div>
        </div>
      
  <Outlet/>
  
    </div>
  )
}
export default Home;

