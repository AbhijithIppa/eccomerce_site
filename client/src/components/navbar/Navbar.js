import "./Navbar.css"
import React from 'react'
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";
import { MdMonitorHeart } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { FaLightbulb, FaUserPlus } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";
import img from "./dan-cristian-padure-mIyZDPhuyY0-unsplash.jpg"
import { MdExplore, MdOutlineHandyman } from "react-icons/md";
import planterimg from "../../images/planter.jpg";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaSeedling } from "react-icons/fa";
import { BsBasket2Fill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
function Navbar() {
  return (
    <div>
          <div className="image-container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={img} alt="Logo" className="logo" />
            </a>

            <a class="navbar-brand" href="#">
              FARM
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex rightpart" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Type To Search..."
                  aria-label="Search"
                />
                <BiSearchAlt className="sicon"></BiSearchAlt>
                <BiFilterAlt className="sicon"></BiFilterAlt>
                <MdMonitorHeart className="sicon"></MdMonitorHeart>
                <HiShoppingCart className="sicon"></HiShoppingCart>
                <FaLightbulb className="icon"></FaLightbulb>
                
              </form>
            </div>
          </div>
        </nav>
       
      </div>
    </div>
  )
}

export default Navbar