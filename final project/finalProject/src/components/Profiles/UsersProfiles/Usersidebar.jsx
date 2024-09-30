import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styleSidebar from './UserSidebar.module.css'


export default function Usersidebar() {
  return (
    <>
      <div className={styleSidebar.userSidebar}>
        <div className={styleSidebar.info}>
          <img className={styleSidebar.profileImage} src="/tree-images/carob tree 1.jpeg" alt="" />
          <h1>Ali mohamed</h1>

        </div>
        <div className={styleSidebar.links}>
          <Link to="/user" className={styleSidebar.userElement}>
            <FontAwesomeIcon icon={faUser} className={styleSidebar.icon} title="Profile" />
            Profile
          </Link>
          <Link to="/user/cart" className={styleSidebar.userElement}>
            <FontAwesomeIcon icon={faShoppingCart} className={styleSidebar.icon} title="Cart" />
            my cart
          </Link>
          <Link to="/user" className={styleSidebar.userElement}>
            <FontAwesomeIcon icon={faSignOutAlt} className={styleSidebar.icon} title="Logout" />
            logout
          </Link>
        </div>
      </div>
    </>
  )
}

