import "./Categ_seeds.css";
import React from "react";
import Navbar from "../navbar/Navbar";
import { Button } from "react-bootstrap";
import img from "../../images/planter.jpg";
import { MdLocalShipping, MdYard } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import x from "../../images/pexels-athena-2042915.jpg";
import y from "../../images/pexels-febe-theodora-1836600.jpg";
import z from "../../images/pexels-lisa-fotios-1982095.jpg";
function Categ_seeds() {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="first_c "
        style={{ display: "flex", marginLeft: "150px" }}
      >
        <div>
          <p
            style={{
              fontFamily: "Gelasio",
              fontWeight: "bold",
              fontSize: "60px",
              width: "518px",
              marginTop: "107px",
            }}
          >
            Choose Our Top Picks Planters
          </p>
          <p
            style={{
              fontFamily: "Gelasio",
              fontWeight: "regular",
              fontSize: "20px",
              color: "B8B8B8",
              width: "518px",
            }}
          >
            We stands for beauty& style in your house. We have an impressive
            selection of the planters that you'll love
          </p>
          <Button
            style={{
              fontSize: "15px",
              width: "168px",
              height: "55px",
              marginTop: "45px",
              backgroundColor: "#efab64",
            }}
          >
            Shop Now
          </Button>

          <div style={{ display: "flex" }}>
            <div>
              <h2
                style={{
                  marginTop: "45px",
                  fontFamily: "Gelasio",
                  fontWeight: "bold",
                  fontSize: "49px",
                }}
              >
                1573
              </h2>
              <p
                style={{
                  fontFamily: "gelasio",
                  fontSize: "19px",
                  color: "#A7A7A7",
                  marginTop: "0px",
                }}
              >
                Total Products
              </p>
            </div>
            <div>
              <h2
                style={{
                  marginLeft: "95px",
                  marginTop: "45px",
                  fontFamily: "Gelasio",
                  fontWeight: "bold",
                  fontSize: "49px",
                }}
              >
                12750+
              </h2>
              <p
                style={{
                  marginLeft: "95px",
                  fontFamily: "gelasio",
                  fontSize: "19px",
                  color: "#A7A7A7",
                  marginTop: "0px",
                }}
              >
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src={img}
            style={{
              width: "550px",
              marginTop: "75px",
              marginLeft: "75px",
              borderRadius: "50px",
            }}
          ></img>
        </div>
      </div>
      <hr></hr>

      <div
        className="container"
        style={{ marginLeft: "150px", marginTop: "150px" }}
      >
        <div className="row">
          <div className="col ">
            <MdLocalShipping style={{ fontSize: "70px" }}></MdLocalShipping>

            <h2
              style={{
                fontWeight: "bold",
                fontFamily: "gelasio",
                fontSize: "22px",
              }}
            >
              Free Worldwide Shipping
            </h2>
            <h2
              style={{ fontSize: "20px", color: "#B8B8B8", maxWidth: "300px" }}
            >
              Free Worldwide Shipping world with many specials only for our dear
              customers
            </h2>
          </div>

          <div className="col">
            <MdYard style={{ fontSize: "70px" }}></MdYard>
            <h2
              style={{
                fontWeight: "bold",
                fontFamily: "gelasio",
                fontSize: "22px",
              }}
            >
              Best Quality Product
            </h2>
            <h2
              style={{ fontSize: "20px", color: "#B8B8B8", maxWidth: "300px" }}
            >
              Free Worldwide Shipping world with many specials only for our dear
              customers
            </h2>
          </div>
          <div className="col">
            <HiCurrencyRupee style={{ fontSize: "70px" }}></HiCurrencyRupee>
            <h2
              style={{
                fontWeight: "bold",
                fontFamily: "gelasio",
                fontSize: "22px",
              }}
            >
              Super Affordable Price
            </h2>
            <h2
              style={{ fontSize: "20px", color: "#B8B8B8", maxWidth: "300px" }}
            >
              Free Worldwide Shipping world with many specials only for our dear
              customers
            </h2>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "200px" }}>
        <div className="row">
          <div className="col">
            <div className="row" style={{ maxWidth: "700px" }}>
              <div className="col">
                <h2
                  style={{
                    fontFamily: "gelasio",
                    color: "#B8B8B8",
                    fontSize: "30px",
                    marginTop: "30px",
                  }}
                >
                  #Accessories
                </h2>
                <h2
                  style={{
                    fontFamily: "gelasio",
                    fontSize: "18px",
                    fontWeight: "bold",
                    maxWidth: "290px",
                  }}
                >
                  Discover Our Accecories Collection
                </h2>
              </div>

              <div className="col">
                <img src={z} style={{ width: "200px" }}></img>
              </div>
            </div>
            <div className="row" style={{ maxWidth: "700px" }}>
              <div className="col">
                <h2
                  style={{
                    fontFamily: "gelasio",
                    color: "#B8B8B8",
                    fontSize: "30px",
                    marginTop: "30px",
                  }}
                >
                  #Accessories
                </h2>
                <h2
                  style={{
                    fontFamily: "gelasio",
                    fontSize: "18px",
                    fontWeight: "bold",
                    maxWidth: "290px",
                  }}
                >
                  Discover Our Accecories Collection
                </h2>
              </div>

              <div className="col">
                <img src={z} style={{ width: "200px" }}></img>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row" style={{ maxWidth: "700px" }}>
              <div className="col">
                <h2
                  style={{
                    fontFamily: "gelasio",
                    color: "#B8B8B8",
                    fontSize: "30px",
                    marginTop: "30px",
                  }}
                >
                  #Accessories
                </h2>
                <h2
                  style={{
                    fontFamily: "gelasio",
                    fontSize: "18px",
                    fontWeight: "bold",
                    maxWidth: "290px",
                  }}
                >
                  Discover Our Accecories Collection
                </h2>
              </div>

              <div className="col">
                <img src={z} style={{ width: "200px" }}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categ_seeds;
