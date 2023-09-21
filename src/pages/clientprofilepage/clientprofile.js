import React from 'react'
import "./clientprofile.css"
import user from "../../images/user.png"
function Clientprofile() {
  return (
    <div className='main-layout'>
        <p className='topic'>Profile</p>
        <div className='layout-border-profile'>
            <div className='whole-div'>
            <form>
            <div className='first-inner'>
                <div><img src={user} width="100px" height="100px" /></div>
                 
                    <div>
                        <table className='profile-table'>
                            <tr><td><label>Name</label></td>
                   <td><input type='text' value="xxxxx" className='input' /></td></tr>
                    <tr><td><label>Email</label></td>
                    <td> <input type='text' value="xxxxx@gmail.com" className='input'/></td></tr>
                    <tr><td><label>Phone-no</label></td>
                    <td><input type='text' value="1234567890" className='input'/></td></tr>
                    <tr><td> <label>Address</label></td>
                    <td><input type='text' value="mayiladuthurai" className='input'/></td></tr></table></div>
            </div>    
                 </form>
                 

                 <div className='colum-2'>
                    <div className='accounttype'>
                     <h2>Account details</h2>
                      <table>
                      <tr><td>Account-type</td><td><input type='text' value="consumer" className='input'/></td></tr>
                        <tr><td>Total Visited Count:</td><td><input type='text' value="0" className='input'/></td></tr>
                      </table>
                    </div>

                    <div className='upgrade'>
                    <h2>Upgrade details</h2>
                    <p>Do you want to access th premium features to Subscribe</p>
                    <button>Subscribe</button>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Clientprofile;