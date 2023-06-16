import React from 'react'
import "./Productdetails.css"
import Navbar from "../navbar/Navbar"
import { Button } from 'react-bootstrap';
import {AiOutlinePlus} from "react-icons/ai"
function Productdetails() {
    const boxStyle = {
        width: '72px',
        height: '70px',
        backgroundColor: 'gray',
        marginBottom:"5px",
        marginTop:"15px"
      };
  return (
    <div>
        <Navbar></Navbar>
    <div className='container row' style={{marginLeft:"85px"}}>
        {/* left component */}
            <div className='col' style={{marginTop:"95px"}}>
                <div>
                    <div style={boxStyle}></div>
                </div>
                <div>
                    <div style={boxStyle}></div>
                </div>
                <div>
                    <div style={boxStyle}></div>
                </div>



            </div>
        {/* middle component */}

            <div className='col-5 mt-5'>
                <div style={{width:"507px",height:"456px",backgroundColor:"gray"}}></div>
                <h3 style={{fontSize:"13px",marginTop:"25px",marginBottom:"15px",fontFamily:"gelasia"}}>Also Something for You</h3>
                <div className='row'>
                    <div className='col'>
                        <div style={{width:"149px",height:"120px",backgroundColor:"gray"}}></div>
                        <div style={{fontSize:"10px",fontFamily:"gelasia"}}>Company</div>
                    </div>
                    <div className='col'>
                        <div style={{width:"149px",height:"120px",backgroundColor:"gray"}}></div>
                      <div style={{fontSize:"10px",fontFamily:"gelasia"}}>Company</div>
                    </div>
                    <div className='col'>
                        <div style={{width:"149px",height:"120px",backgroundColor:"gray"}}></div>
                        <div style={{fontSize:"10px",fontFamily:"gelasia"}}>Company</div>
                    </div>
                </div>
            </div>
        {/*3rd component  */}
            <div className='col-6 mt-5'>
                <div className="mx-auto"style={{maxWidth:"380px",fontSize:"45px",fontFamily:"gelacia",fontWeight:"bold"}}>BEARBRICK BLACK</div>
                <div className="mx-auto"style={{fontSize:"27px",maxWidth:"380px",fontFamily:"gelacia",fontWeight:"bold"}}>75.56</div>
                
                <div style={{fontSize:"20px",fontFamily:"gelacia",fontWeight:"bold",marginTop:"60px",fontWeight:"bold"}}>Size : </div>
                <div className='row'>
                    <div style={{fontSize:"25px",fontFamily:"gelacia",fontWeight:"regular"}}className='col'>Small</div>
                    <div style={{fontSize:"25px",fontFamily:"gelacia",fontWeight:"light"}}className='col'>Medium</div>
                    <div style={{fontSize:"25px",fontFamily:"gelacia",fontWeight:"light"}}className='col'>Large</div>
                </div>

                <div style={{fontSize:"20px",fontFamily:"gelacia",fontWeight:"bold",marginTop:"30px",fontWeight:"bold"}}>Material : </div>
                <div className='row'>
                    <div style={{fontSize:"25px",fontFamily:"gelacia",fontWeight:"regular"}}className='col'>Poster</div>
                    <div style={{fontSize:"25px",fontFamily:"gelacia",fontWeight:"light"}}className='col'>Glass</div>
                    <div style={{fontSize:"25px",fontFamily:"gelacia",fontWeight:"light"}}className='col'>Large</div>
                </div>

                <div style={{fontSize:"20px",fontFamily:"gelacia",fontWeight:"bold",marginTop:"30px",fontWeight:"bold"}}>ANTAL </div>
           
           <div className='row'>
                <div className='col'>
                <input id="form1"
                        min="0"
                        name="quantity"
                        value="1"
                        type="number"
                        className="form-control form-control-sm pe-0"
                        style={{maxWidth:"170px",height:"80px"}}
                            />
                
                </div>
                <div className='col pe-0' style={{maxWidth:"50px",height:"80px",fontSize:"35px"}}><AiOutlinePlus></AiOutlinePlus></div>
                <div className='col'>
                    <Button style={{width:"250px",height:"80px"}}className='bg-black'>Shop Now</Button>
                </div>
           </div>
            </div>
        </div>


    </div>
  )
}

export default Productdetails