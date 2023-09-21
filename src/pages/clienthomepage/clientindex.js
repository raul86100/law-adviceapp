import React from 'react'
import './clientindex.css';

function Clientindex() {
    const call=()=>{
      console.log("work");
    }
  return (
    <div className='index-fullscreen'>
      <div className='clientindex-topcontent'>
       <div><select className='feild-selection'>
          <option>onlineshopping</option>
          <option>offlineshopping</option>
          <option>...............</option>
        </select></div>
        <div className='compliant-flex'><div className='compliant-field'><input type='text' placeholder='Enter your compilant for serach law' onKeyDown={(e)=>{
          if(e.code==="Enter") call();
        }}/></div>
        <div><button className='client-search-btn'>Search</button></div> </div>
     
      </div>
    </div>
  )
}

export default Clientindex;