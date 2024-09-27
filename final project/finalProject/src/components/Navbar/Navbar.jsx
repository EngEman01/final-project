import React, { useState } from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "../Popups/Login";  
import Register from "../Popups/Register";
import styleNavbar from './Navbar.module.css';

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); 
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleRegisterPopup = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  return (
    <>
      <div className={styleNavbar.navbar}>
        <div className={styleNavbar.logo}>
          <h1>SHAGARA</h1>
        </div>
        <div className={styleNavbar.links}>
          <Link to="/" className={styleNavbar.navElement}>Home</Link>
          <Link to="/about" className={styleNavbar.navElement}>About</Link>
          <Link to="/trees" className={styleNavbar.navElement}>Trees</Link>
          <Link to="/contact" className={styleNavbar.navElement}>Contact</Link>

          <div className={styleNavbar.profile}>
            <button className={styleNavbar.enter} onClick={toggleLoginPopup}>Login</button>
            <button className={styleNavbar.enter} onClick={toggleRegisterPopup}>Register</button>
          </div>
        </div>
      </div>

      
      {isLoginOpen && (
        <div className={styleNavbar.popup}>
          <div className={styleNavbar.popupInner}>
            <button className={styleNavbar.closeBtn} onClick={toggleLoginPopup}>X</button>
            <Login />
          </div>
        </div>
      )}

      
      {isRegisterOpen && (
        <div className={styleNavbar.popup}>
          <div className={styleNavbar.popupInner}>
            <button className={styleNavbar.closeBtn} onClick={toggleRegisterPopup}>X</button>
            <Register />
          </div>
        </div>
      )}
    </>
  );
}
