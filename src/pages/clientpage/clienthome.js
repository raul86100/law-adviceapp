import React from 'react';
import './clienthome.css';
import clogo from '../../images/law.png'
import { Link, Outlet } from 'react-router-dom';

function Clienthome() {
  return (
<div className='fullscreen'>
    <div className='navigation-side'>
      <div className='navigation-item'>
        <div><img src={clogo}  className='clogo'/></div>
        <div className='item-border'><Link to="/clienthome"><button className='item'>Home</button></Link></div>
        <div className='item-border'><Link ><button className='item'>Booking History</button></Link></div>
        <div className='item-border'><Link ><button className='item'>upcoming-Appointment</button></Link></div>
        <div className='item-border'><Link to="profile"><button className='item'>Profile</button></Link></div>
        <div className='item-border'><Link to="/login"><button className='item'>Logout</button></Link></div>
      </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Clienthome