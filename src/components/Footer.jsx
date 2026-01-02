import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
     <div className="asicons">
      <div className="as">
      <div className="f-about">
      <h3>About</h3>
      <ul>
        <li>Team</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Chat With Us</li>
      </ul>
    </div>
     <div className="f-services">
      <h3>Services</h3>
      <ul>
        <li>Hire Drivers</li>
        <li>Hire Temporary Driver</li>
        <li>Hire Hourly Driver</li>
      </ul>
    </div>
    </div>
    <div className="icon">
    <h4>Follow Us</h4>
    <div className="icons">
    <FaFacebookSquare />
    <FaYoutube />
    <FaTwitter />
    <FaInstagram />
    </div>
   </div>
     </div>
     <div className="footercont">
     <p>Terms & Conditions | Privacy Policy | Refund & Cancellation Policy</p>
    <p>© SNAPDRIVE MOBILITY SOLUTIONS PRIVATE LIMITED (All rights reserved)</p>
   </div>
    </div>
  )
}

export default Footer
