import React from 'react'
import { Link } from 'react-router-dom'
import  './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <div className="footer-wrapper-left">
            <div className="logo-container ">
                <Link  style={{textDecoration:'none', color:'white'}} to='/'>
                <img src="assets/logo-web.png" className='navbar-logo' alt="" />
                </Link>
            </div>
                <p>@ Copyright FFINT ENTERPRISE 2023</p> 
            </div>
            <div className="footer-wrapper-right">
                <div className="footer-wrapper-right-co">
                    <ul>
                        <h3>Company</h3>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact us</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div className="footer-wrapper-right-le">
                    <ul>
                        <h3>Legal</h3>
                        <Link to='/terms' style={{textDecoration:'none',color:'white'}}> <li>Terms and Conditions</li></Link>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer