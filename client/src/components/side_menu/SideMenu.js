import React from "react";
import { FaHome, FaFire, FaFolder, FaPlayCircle, FaHistory, FaClock, FaThumbsUp, FaChevronDown } from "react-icons/fa";
import "./SideMenu.css"; // Import the CSS file for the side menu styles
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
function SideMenu() {

  let navigate=useNavigate();
  
  return (
    <div className="side-menu-container">
    
      <div className="side-menu">
        <ul className="menu-items">
          <li className="menu-item active">
            <FaHome className="menu-icon" />
            <span className="menu-text">View Profile</span>
          </li>
          <li className="menu-item">
            <FaFire className="menu-icon" />
            <span className="menu-text">My Orders</span>
          </li>
          <li className="menu-item">
            <FaFolder className="menu-icon" />
            <span className="menu-text">My Coupons</span>
          </li>
          <li className="menu-item">
            <FaPlayCircle className="menu-icon" />
            <span className="menu-text">Favorites</span>
          </li>
          <li className="menu-item">
            <FaHistory className="menu-icon" />
            <span className="menu-text">Help Center</span>
          </li>
          <li className="menu-item">
            <FaClock className="menu-icon" />
            <span className="menu-text">FAQs</span>
          </li>
          <li className="menu-item">
            <FaThumbsUp className="menu-icon" />
            <span className="menu-text">Privacy Policy</span>
          </li>
          <li className="menu-item">
            <FaChevronDown className="menu-icon" />
            <span className="menu-text">About Us</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
