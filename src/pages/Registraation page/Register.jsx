import React from 'react'
import './Register.css'

function Register() {
    console.log("teadd");
  return (
    <div className='reg-outer-border'>
        <div className='reg-inner-border'>
            <div className='reg-img'>
            <img src="https://images.unsplash.com/photo-1605664041952-4a2855d9363b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80" />
           
            </div>
            <form>
        <div className='reg-form-div'>
            <div><span className="reg-p">Registration</span></div>
                
                    <div><p>Email</p>
                    <input type='email' placeholder='ex@gmail.com'/></div>
                    <div> <p>Name</p>
                    <input type='text' placeholder='name'/></div>
                    <div><p>Phoneno</p>
                    <input type='text' placeholder='123456789' /></div>
                    <div><p>Address</p>
                    <textarea placeholder='123,ABCD address'/>
                    </div>
                    <div><p>DOB</p>
                    <input type='date' /></div>
                    <div><p>Password</p>
                    <input type='password' placeholder='*********'/></div>
                    <div>
                        <input type='submit' value="Signup" />
                    </div>
                
            </div>
            </form>
            </div>
    </div>
  )
}

export default Register