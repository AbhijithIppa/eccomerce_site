import "./Productlist.css"
// import Header from "../header/Header"
import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs"
import Dropdown from 'react-bootstrap/Dropdown'

function Productlist() {
  return (
    <div className="container"> 
    <div className="d-flex justify-content-between">
      <h2 className="mx-5">FILTER</h2>
      <div>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        SortBy
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">from Low to High</Dropdown.Item>
        <Dropdown.Item href="#/action-2">from High to Low</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </div>
        <div className='row row-cols-1 row-cols-sm-2 row cols-md-3 row-cols-lg-5 row-cols-xl-5 justify-content-evenly my-3'>
          {/* 1st card */}
                <div className="col card" style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
          {/* 2nd card */}
          <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
          {/* 3rd card */}
          <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
          {/* 4th card */}
          <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
          {/* 5th card */}
          <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
          {/* 6th card */}
          <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
          {/* 7th card */}
          <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
          {/* 8th card */}
          <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
          {/* 9th card */}
          <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
          {/* 10th card */}
          <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text ">Brand name</p>
                    <p className='lead card-text'>mens jacket cotton </p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Productlist;