
import './home.css';
import { Link, Outlet} from 'react-router-dom';
import logo from '../../images/Art design.png';
import { useState } from 'react';


export const Home = () => {
  const [active,setActive]=useState(false);
  const calla=()=>{
setActive(!active);
  }
  return (
    <div>
        <div className='Loginpage'>
          <div className='header'>
        <img src={logo} width="90rem" height="90rem"/>
          <div className='header-content'>
          <div><Link to="/" className={!active ? "active":"link"} onClick={calla}>About</Link></div>
          <div><Link to="login" className={active ? "active":"link"} onClick={calla}>Login/SignUp</Link></div>
          
          </div>
          </div>
        </div>
      
  <Outlet/>
  
    </div>
  )
}
export default Home;
