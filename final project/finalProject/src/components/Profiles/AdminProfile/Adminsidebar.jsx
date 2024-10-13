import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styleAdminSidebar from './Adminsidebar.module.css'


export default function Adminsidebar() {
  return (
    <div className={styleAdminSidebar.adminSidebar}>
    <div className={styleAdminSidebar.info}>
      <img className={styleAdminSidebar.profileImage} src="/tree-images/carob tree 1.jpeg" alt="" />
      <h1>Ali mohamed</h1>

    </div>
    <div className={styleAdminSidebar.links}>
      <Link to="/admin" className={styleAdminSidebar.adminElement}>
        <FontAwesomeIcon icon={faUser} className={styleAdminSidebar.icon} title="Profile" />
        dashboard
      </Link>
      <Link to="/admin/updateTrees" className={styleAdminSidebar.adminElement}>
        <FontAwesomeIcon icon={faUser} className={styleAdminSidebar.icon} title="Profile" />
        trees
      </Link>
      <Link to="/admin/informationUser" className={styleAdminSidebar.adminElement}>
        <FontAwesomeIcon icon={faShoppingCart} className={styleAdminSidebar.icon} title="Cart" />
        users
      </Link>
      <Link to="/admin/orders" className={styleAdminSidebar.adminElement}>
        <FontAwesomeIcon icon={faShoppingCart} className={styleAdminSidebar.icon} title="Cart" />
        orders
      </Link>
      <Link to="/admin/logout" className={styleAdminSidebar.adminElement}>
        <FontAwesomeIcon icon={faSignOutAlt} className={styleAdminSidebar.icon} title="Logout" />
        logout
      </Link>
    </div>
  </div>
  )
}
