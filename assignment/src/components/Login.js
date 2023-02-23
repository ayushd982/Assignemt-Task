import React, { useState } from 'react';
 const Login = (props) => {
  // State variables
   const [username , setUsername] = useState ('');
   const [password , setPassword] = useState ('');

  return (
    <div>
      <div className="container">
        <h2 className="heading">{'User Login'}</h2>
        
        <div className="form_wrapper">
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            size="large"
            className="form_input"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            size="large"
            type="password"
            className="form_input"
          />
        </div>
        <div className="form_buttons">
          <button
            type="primary"
            className="form_button"
            color={'#208AEC'}
            size="large"
            block
          >
            </button>
            Log In
        <button onClick={(event)=>props.onFormSwitch('SignUp')} className="form__hint">Don't have an account? Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;