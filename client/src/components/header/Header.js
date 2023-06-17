import "./Header.css";
import React from "react";
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";
import { MdMonitorHeart } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { FaLightbulb, FaUserPlus } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";
import img from "./dan-cristian-padure-mIyZDPhuyY0-unsplash.jpg";
import { MdExplore } from "react-icons/md";
import { Carousel } from "react-bootstrap";
import planterimg from "../../images/planter.jpg";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsChatRightDots } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";

import toolsimg from "../../images/tools.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosMan } from "react-icons/io";
import { ImWoman } from "react-icons/im";
import { FaChild, FaExchangeAlt } from "react-icons/fa";
import menimg from "../../images/men_fashion.jpg";
import womenimg from "../../images/women_fashion.jpg";
import kidsimg from "../../images/kids_fashion.jpg";
import Footer from "../footer/Footer";

function Header() {
  let navigate = useNavigate();

  let categ_seeds = () => {
    navigate("/categ_seeds");
  };

  let tocart = () => {
    navigate("/cart");
  };

  let [customs, setCustoms] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setCustoms(data);
    } catch (err) {
      console.log("error in getting data", err);
    }
  };
  const imageStyle = {
    objectFit: "contain", // Ensure images fit within the carousel viewport

    maxHeight: "100%", // Set maximum height of images to 100% of carousel height
    width: "100%", // Set width of images to 100% to maintain aspect ratio
  };

  return (
    <div>
      <div className="image-container">
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={img} alt="Logo" className="logo" />
            </a>

            <a class="navbar-brand" href="#">
              FASHION
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
               
                <HiShoppingCart onClick={tocart} className="sicon"></HiShoppingCart>
              
                <FaUserPlus className="sicon"></FaUserPlus>
              </form>
            </div>
          </div>
        </nav> */}
        <Navbar></Navbar>
        <div>
          {/* <Carousel style={{maxHeight: '100vh'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          style={imageStyle}
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image2.jpg"
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image3.jpg"
          alt="Image 3"
        />
      </Carousel.Item>
    </Carousel> */}
        </div>

        <div className="header-content">
          <h1 className="text">NEW FASHION IS HERE</h1>
          <BsChevronDoubleDown
            style={{ color: "white", fontSize: "30" }}
            className="test"
          />
        </div>
      </div>

      <div style={{ display: "flex", marginLeft: "110px", marginTop: "20px" }}>
        <h2 style={{ fontSize: "42px" }}>Explore</h2>
        <MdExplore
          style={{ marginTop: "10px", marginLeft: "3px" }}
          className="sicon"
        ></MdExplore>
      </div>

      <div style={{ display: "flex", marginLeft: "110px", marginTop: "20px" }}>
        {/*BELOW IS THE REFERENCE CODE FOR RETRIVING DATA FROM MONGODB*/}
        {/* {customs.map((custom) => (
          <Card
            className="horizontal-card"
            style={{ width: "400px", marginRight: "25px" }}
          >
            <div className="d-flex">
              <div className="img-container">
                <img
                  src={require(`../../${custom.email}`)}
                  alt="Profile"
                  className="cir-image"
                />
              </div>
              <Card.Body>
                <div style={{ display: "flex" }}>
                  <Card.Title>{custom.name}</Card.Title>
                  <FaSeedling
                    style={{
                      marginLeft: "10px",
                      marginTop: "3px",
                      color: "366207",
                    }}
                  ></FaSeedling>
                </div>

                <Card.Text>{custom.phone}</Card.Text>
                <Button
                  style={{ backgroundColor: "black" }}
                  onClick={categ_seeds}
                >
                  Shop Now
                </Button>
              </Card.Body>
            </div>
          </Card>
        ))} */}
        {/* ---------------------------------------------------------------------- */}

        <Card
          className="horizontal-card"
          style={{ width: "400px", marginRight: "25px" }}
        >
          <div className="d-flex">
            <div className="img-container">
              <img src={menimg} alt="Profile" className="cir-image" />
            </div>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title>Men</Card.Title>
                <IoIosMan
                  style={{
                    marginLeft: "10px",
                    marginTop: "3px",
                    color: "366207",
                  }}
                ></IoIosMan>
              </div>

              <Card.Text>Quote</Card.Text>
              <Button
                style={{ backgroundColor: "black" }}
                onClick={categ_seeds}
              >
                Shop Now
              </Button>
            </Card.Body>
          </div>
        </Card>

        <Card
          className="horizontal-card"
          style={{ width: "400px", marginRight: "25px" }}
        >
          <div className="d-flex">
            <div className="img-container">
              <img src={womenimg} alt="Profile" className="cir-image" />
            </div>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title>Women</Card.Title>
                <ImWoman
                  style={{
                    marginLeft: "10px",
                    marginTop: "3px",
                    color: "5D1E1E",
                  }}
                ></ImWoman>
              </div>

              <Card.Text>Quote</Card.Text>
              <Button style={{ backgroundColor: "black" }}>Shop Now</Button>
            </Card.Body>
          </div>
        </Card>
        <Card
          className="horizontal-card"
          style={{ width: "400px", marginRight: "25px" }}
        >
          <div className="d-flex">
            <div className="img-container">
              <img src={kidsimg} alt="Profile" className="cir-image" />
            </div>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title>Kids</Card.Title>
                <FaChild
                  style={{
                    marginLeft: "10px",
                    marginTop: "3px",
                    color: "515151",
                  }}
                ></FaChild>
              </div>

              <Card.Text>Quote</Card.Text>
              <Button style={{ backgroundColor: "black" }}>Shop Now</Button>
            </Card.Body>
          </div>
        </Card>
      </div>
      <hr />
      {/* new 24/7 tag */}
      <div
        className="d-flex justify-content-evenly border border-dark"
        style={{ backgroundColor: "ButtonShadow" }}
      >
        <div className="text-center">
          <CiDeliveryTruck style={{ fontSize: "180px" }} />
          <p style={{ fontFamily: "fantasy" }}>Free delivery</p>
        </div>
        <div className="text-center py-4">
          <BsChatRightDots style={{ fontSize: "140px" }} />
          <p style={{ fontFamily: "fantasy" }}>24/7 Free chat</p>
        </div>
        <div className="text-center py-2">
          <BsCreditCard2Back style={{ fontSize: "150px" }} />
          <p style={{ fontFamily: "fantasy" }}>Secured Payment</p>
        </div>
        <div className="text-center py-4">
          <FaExchangeAlt style={{ fontSize: "130px" }} />
          <p style={{ fontFamily: "fantasy" }}>Free exchange & returns</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Header;
