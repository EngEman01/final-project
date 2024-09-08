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
                    {/* <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Trees</Link>
                        <Link>Contact</Link> */}
                    <a className={styleNavbar.navElement} href="">Home</a>
                    <a className={styleNavbar.navElement} href="">About</a>
                    <a className={styleNavbar.navElement} href="">Trees</a>
                    <a className={styleNavbar.navElement} href="">Contact</a>
                    <div className={styleNavbar.profile}>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

