import React from 'react';

import img1 from "../../images/slideimg1.jpg";
import img2 from '../../images/slideimg2.jpg';
import img3 from '../../images/slideimg3.jpg';
import img4 from '../../images/slideimg4.jpg';

import './slide.css';


function Slideimg() {
   const url=[img1,img2,img3,img4] ;
  return (
    <div className='slide'><img src={url[3]} className='slideimg'/>
    
    </div>
  )
}

export default Slideimg;