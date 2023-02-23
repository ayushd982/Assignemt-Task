import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaLinkedin , FaInstagramSquare , FaTwitter} from "react-icons/fa";
import './Style.css'
import { GiHamburgerMenu} from 'react-icons/gi'
function Navbar(props) {

 const[showMediaIcons , setshowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
            <h2>
                <span>I</span>nfinite
                <span>C</span>ontact
            </h2>
        </div>
        <div className="menu-link">
            <ul className='mobile-menu-link'>
                <li>
                    <a href='/'>
                    Home
                    </a>
                </li>
                <li>
                </li>
                <li>
                <a href='/'>
                    Log in
                    </a>
                </li>
            </ul>
        </div>
        <div className="Social-media">
            <ul className='Social-media-desktop'>
                <li>
                    <a href="https://www.linkedin.com/in/ayush-sharma982/" target="ayushd982">
                    <FaLinkedin/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ayushd982/" target="ayushd982">
                    <FaInstagramSquare/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/SharmaAyushd982" target="ayushd982">
                    <FaTwitter/>
                    </a>
                </li>
            </ul>
            <div className="humburger-menu">
                      <a href="/" onClick="() => setshowMediaIcons(!showMediaIcons)">
                      <GiHamburgerMenu/>
                      </a>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
