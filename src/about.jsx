import React from 'react'
import Header from './header'
import Footer from './footer'

function about() {
  return (
<>
<Header/>
    <div className="about">
      <h1>About Our Services</h1>
      <p>Active Driver is a professional driver hiring platform that connects people with trusted and skilled drivers for different needs.</p>
      <p>Whether you need a private car driver for a long trip, a light truck driver for shifting goods, or a heavy truck driver for long-distance transport, we’ve got you covered.</p>
      <p>Our mission is to make hiring drivers quick, safe, and reliable.</p>
      <p>We ensure that every driver on our platform is verified, experienced, and dependable, so you can travel or transport goods without any worries.</p>
      <p>With 24/7 availability, affordable pricing, and an easy booking process, Active Driver is the one-stop solution for individuals, families, and businesses who want hassle-free driver services.</p>
      <div className="about-features">
      <h3>Why we use Active Driver</h3>
      <ul>
        <li>Trusted & Verified Drivers</li>
        <li>Affordable & Transparent Pricing</li>
        <li>24/7 Availability</li>
        <li>Easy Online Booking</li>
      </ul>
      </div>
    </div>
    <Footer/>
 </>
  )
}

export default about
