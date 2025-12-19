import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from './Services'
import Gif from '../assets/videos/gif.mp4'
import { GiSteeringWheel } from "react-icons/gi";
import { MdOutlineLocalCarWash } from "react-icons/md";
import { SiThunderstore } from "react-icons/si";

function Homepage() {
  const [sclicked,setSclicked]=useState(false);
 function changedisplay(){
  setSclicked(prev=>!prev);
 }
 const navigate=useNavigate();
  return (
    <>
    {sclicked && <Service/>}
    <div className="maincontainer">
      <div className="homecontainer">
      <Navbar fun={changedisplay} />
      <div className="hero-gif">
        <div className="hero">
        <h1>“Hire professional drivers, and all car services at your fingertips.”</h1>
        <div className="h-button">
        <div className="h-button1">
          <button onClick={()=>navigate("userlogin")}>User Login</button>
        </div>
        <div className="h-button2">
          <button onClick={()=>navigate("driverlogin")}>Driver Login</button>
        </div>
        </div>
      </div>
      <div className="h-gif">
        <video src={Gif} autoPlay loop muted>Your browser will not support video</video>
      </div>
      </div>
      <div className="h-service">
        <h2>Our Services</h2>
        <div className="h-service-grid">
          <div className="h-ser-flex">
            <div className="h-s-icons"><GiSteeringWheel /></div>
            <h4>Personal Drivers</h4>
            <p>Hire verified, professional drivers for hassle-free commutes, running errands and safe after-party drops on an hourly basis</p>
          </div>
          <div className="h-ser-flex">
            <div className="h-s-icons"><MdOutlineLocalCarWash /></div>
            <h4>Car Wash</h4>
            <p>Pressure wash, eco wash & daily wash by trained executives equipped with high-grade machines and premium materials</p>
          </div>
            <div className="h-ser-flex">
            <div className="h-s-icons"><SiThunderstore /></div>
            <h4>Recharge FASTag</h4>
            <p>Zip through the toll-gates on your outstation trips without any worries. Recharge your FASTag in just a few taps</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Homepage
