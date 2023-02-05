import React, { useState } from 'react'
import './navbar.css'
// import {Link} from 'react-router-dom'

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


function Navbar() {

    

    const [click, setClick] = useState(false)

    function handleClick(){
        setClick(!click)
    }

    function closeMobileMenu(){
        setClick(false)
    }




  return (
    <>
    <div className="navbar">
        <div className="nav-left">
            <div className="logo-container ">
                <Link  style={{textDecoration:'none', color:'white'}} to='/'>
                <img src="assets/logo-web.png" className='navbar-logo' alt="" />
                </Link>
            </div>
        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times':'fas fa-bars'}/>
        </div>
        <div className="nav-center">
            <ul className={click ? 'nav-menu active':'nav-menu'}>
           
                <li className="nav-item" onClick={closeMobileMenu}>
                <HashLink style={{textDecoration:'none', color:'white'}} smooth to='/#'>
                    Home
                    </HashLink>
                
                </li>
            
    
                <li className="nav-item" onClick={closeMobileMenu}>
                <HashLink  style={{textDecoration:'none', color:'white'}} smooth to='/#about'>
                    About us
                    </HashLink>
                </li>
        
         
                <li className="nav-item" onClick={closeMobileMenu}>
                <Link  style={{textDecoration:'none', color:'white'}} smooth to='/contact-us'>
                    Contact us
                </Link>
                </li>
       
                <li className="nav-item" onClick={closeMobileMenu}>
                <HashLink  style={{textDecoration:'none', color:'white'}} smooth to='/#gallery'>
                    Gallery
                    </HashLink>
                </li>
            </ul>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
