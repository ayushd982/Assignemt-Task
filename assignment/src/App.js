// import Parse from 'parse/react-native.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import List from './components/List'
import React, { useState } from 'react';
import { BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
import './App.css';
function App() {
  const[currentState ,setcurrentState] = useState("Login")
  const toggleForm = (formName) =>{
    setcurrentState(formName); 
  }
  return (
    <div className='App'>
      {/* <Router>
        <Navbar/> 
         <Route
          exact path = '/List' component = {Navbar}
          ></Route> 
        </Router> */}
        <Navbar/>
        {
         currentState === "Login" ?  <Login onFormSwitch={toggleForm}/> :  <Register onFormSwitch={toggleForm}/>
        }  
      <List/> 
        
     </div> 
  ); 
}

export default App;
    