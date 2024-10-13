import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styleSidebar from './UserSidebar.module.css'


export default function Usersidebar() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch user data from backend when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId'); // Get user ID from localStorage

      if (!userId) {
        setError("No user ID found. Please login.");
        return;
      }

      try {
        const response = await fetch(`http://localhost:4000/user/getUsers/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }
        const data = await response.json();
        setUserData(data); // Set fetched user data
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className={styleSidebar.userSidebar}>
        <div className={styleSidebar.info}>
          <img className={styleSidebar.profileImage} src="/tree-images/carob tree 1.jpeg" alt="" />
          {error ? (
            <h2>{error}</h2>
          ) : userData ? (
            <h2>{userData.name}</h2>
          ) : (
            <h2>Loading...</h2>
          )}

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
          <Link to="/user/logout" className={styleSidebar.userElement}>
            <FontAwesomeIcon icon={faSignOutAlt} className={styleSidebar.icon} title="Logout" />
            logout
          </Link>
        </div>
      </div>
    </>
  )
}

