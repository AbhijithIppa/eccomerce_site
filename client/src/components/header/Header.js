import "./Header.css";
import React from "react";
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";
import { MdMonitorHeart } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { FaLightbulb, FaUserPlus } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";
import img from "./dan-cristian-padure-mIyZDPhuyY0-unsplash.jpg";
import { MdExplore, MdOutlineHandyman } from "react-icons/md";
import seedsimg from "../../images/seeds.jpg";
import planterimg from "../../images/planter.jpg";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaSeedling } from "react-icons/fa";
import { BsBasket2Fill } from "react-icons/bs";
import toolsimg from "../../images/tools.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  let navigate = useNavigate();

  let categ_seeds = () => {
    navigate("/categ_seeds");
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
                <FaUserPlus className="sicon"></FaUserPlus>
              </form>
            </div>
          </div>
        </nav>
        <div className="header-content">
          <h1 className="text">DIVE IN</h1>
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
              <img src={seedsimg} alt="Profile" className="cir-image" />
            </div>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title>Seeds</Card.Title>
                <FaSeedling
                  style={{
                    marginLeft: "10px",
                    marginTop: "3px",
                    color: "366207",
                  }}
                ></FaSeedling>
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
              <img src={planterimg} alt="Profile" className="cir-image" />
            </div>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title>Planter</Card.Title>
                <BsBasket2Fill
                  style={{
                    marginLeft: "10px",
                    marginTop: "3px",
                    color: "5D1E1E",
                  }}
                ></BsBasket2Fill>
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
              <img src={toolsimg} alt="Profile" className="cir-image" />
            </div>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title>Tools</Card.Title>
                <MdOutlineHandyman
                  style={{
                    marginLeft: "10px",
                    marginTop: "3px",
                    color: "515151",
                  }}
                ></MdOutlineHandyman>
              </div>

              <Card.Text>Quote</Card.Text>
              <Button style={{ backgroundColor: "black" }}>Shop Now</Button>
            </Card.Body>
          </div>
        </Card>
      </div>

      <div></div>
    </div>
  );
}

export default Header;
