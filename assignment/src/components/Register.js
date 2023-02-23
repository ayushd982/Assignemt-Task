import React, { useState } from 'react'
import './Registers.css'

function Register() {
  const [FullName , setFullName] = useState('');
  let errorObj =  {FullName : " ", Email : " " , password : " "}
  const [errors, seterrors] = useState(errorObj)
  const [Email , setEmail] = useState('');
  const [password , setpassword] = useState('');

  function onSignUp(e) {
    e.preventDefault()
    let error = false;
    const errObj = {...errorObj}
    if(FullName === ""){
      errorObj.FullName = "FullName is required"
      error = true;
    }

    if(Email === ""){
      errorObj.Email = "Email is required"
      error = true;
    }
    if(password === ""){
      errorObj.password = "password is required"
      error = true;
    }

    seterrors(errObj)

    if(!error)
    {
      console.log("Form is Submitted")
    }
  }
  return (
    <div>
        <div>
           <div className='sign-up'>
           <h1>SignUp</h1>
            <form onSubmit={onSignUp}>
               <div>
                <label>Full name</label>
                 <div>
                  <input type='text' 
                  value = {FullName}
                  onChange={(e) => setFullName(e.target.value)}
                  />
                 </div>
                 {errors.FullName && <div>{errors.FullName}</div>}
               </div>
               <div>
                <label>Email</label>
                 <div>
                  <input type="Email" 
                  value = {Email}
                  onChange ={(e) => setEmail(e.target.value)}
                  />  
                 </div>
                 {errors.Email && <div>{errors.Email}</div>}
               </div>
               <div>
                <label>Password</label>
                 <div>
                  <input type="Password"
                   value = {password}
                   onChange={(e) => setpassword(e.target.value)}
                  />
                 </div>
                 {errors.password && <div>{errors.password}</div>}
               </div>
               <button className='btn' 
                type = 'submit'>
               Sign Up
               </button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Register
