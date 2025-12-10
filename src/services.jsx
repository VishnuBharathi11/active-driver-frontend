import React from 'react'
import { GiSteeringWheel } from "react-icons/gi";
import { GiSecurityGate } from "react-icons/gi";
import { RiServiceFill } from "react-icons/ri";
import { RiCarWashingLine } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
function services() {
  return (
    <div className="servicesdd">
      <div className="s-grid">
        <div className="service">
            <div className="s-icon"><GiSteeringWheel /></div>
            <div className="service-c">
            <h5>Hire Drivers</h5>
            <p>Get driven by professional drivers</p>
            </div>
        </div>
        <div className="service">
            <div className="s-icon"><GiSecurityGate /></div>
            <div className="service-c">
            <h5>FASTag Recharge</h5>
            <p>Get your FASTag Recharge and go!</p>
            </div>
        </div>
        <div className="service">
            <div className="s-icon"><RiServiceFill /></div>
            <div className="service-c">
            <h5>Car Service</h5>
            <p>Book car service & maintence services</p>
            </div>
        </div>
        <div className="service">
            <div className="s-icon"><RiCarWashingLine /></div>
            <div className="service-c">
            <h5>Car Wash</h5>
            <p>Doorstep pressure & eco car wash by professionals</p>
            </div>
        </div>
        <div className="service">
            <div className="s-icon"><IoPeopleSharp /></div>
            <div className="service-c">
            <h5>Snapdrivers Crew</h5>
            <p>Hire multiple drivers for same event</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default services
