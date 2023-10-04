import React, { useState } from 'react';
import './clienthome.css';
import clogo from '../../../images/law.png'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { image } from '../../../images/image';

function Clienthome() {
  const [drawer,setDrawer]=useState(true);
  const location=useLocation();
 const baseurl="/clienthome";
  const close=()=>{
setDrawer(!drawer);
  }
  return (
<div className='fullscreen'>
    <div className={drawer ?'navigation-side-min':'navigation-side-max'}>
      <div className='navigation-item'>
        <div><Link to="/"><img src={drawer ? clogo: image.url_logo}  className='clogo'/></Link></div>
        <div className='item-border'><Link to="/clienthome"><button className={location.pathname===baseurl?"item-active":'item'}>{drawer ?<img src={image.url_home} width="100%"/>:"Home"}</button></Link></div>
        <div className='item-border'><Link to="bookinhistory"><button className={location.pathname===baseurl+"/bookinhistory"?"item-active":'item'}>{drawer ?<img src={image.url_history} width="100%"/>:"History of Booking"}</button></Link></div>
        <div className='item-border'><Link ><button className='item'>{drawer ?<img src={image.url_appointment} width="100%"/>:"upcoming-Appointment"}</button></Link></div>
        <div className='item-border'><Link to="profile"><button className={location.pathname===baseurl+"/profile"?"item-active":'item'} >{drawer ?<img src={image.url_profile} width="100%"/>:"Profile"}</button></Link></div>
        <div className='item-border'><Link to="/login"><button className='item'>{drawer ?<img src={image.url_logout} width="100%"/>:"Logout"}</button></Link></div>
        <div className='item-border'><button className='item' onClick={close}>{drawer ?"details":"minimize"}</button></div>

      </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Clienthome