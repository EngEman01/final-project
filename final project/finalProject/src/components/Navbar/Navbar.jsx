import React from 'react'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styleNavbar from './Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <div className={styleNavbar.navbar}>
                <div className={styleNavbar.logo}>
                    <h1>SHAGARA</h1>
                </div>

                <div className={styleNavbar.links}>
                        <Link to="/" className={styleNavbar.navElement}>Home</Link>
                        <Link to="/about" className={styleNavbar.navElement}>About</Link>
                        <Link  to="/trees" className={styleNavbar.navElement}>Trees</Link>
                        <Link  to="/contact" className={styleNavbar.navElement}>Contact</Link>
                    {/* <a className={styleNavbar.navElement} href="">Home</a>
                    <a className={styleNavbar.navElement} href="">About</a>
                    <a className={styleNavbar.navElement} href="">Trees</a>
                    <a className={styleNavbar.navElement} href="">Contact</a> */}
                    <div className={styleNavbar.profile}>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

