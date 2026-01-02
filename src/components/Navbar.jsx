import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg'
function Navbar({fun}) {
  return (
   <div>
    <nav>
      <div className="comlogo">
      <div className="logo">
        <img src={Logo} alt="logo"/>
      </div>
        <div className="companyname">SNAPDRIVERS</div>
      </div>
     
     <div className="ankers">
      <Link to="/" className="nav-link">Homepage</Link>
      <div onClick={fun} className="nav-link">Services</div>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
     </div>
    </nav>
    </div>
  );
}

export default Navbar
