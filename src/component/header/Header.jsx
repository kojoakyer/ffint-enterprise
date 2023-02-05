import React from 'react'

import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-wrapper">
            <div className="header-wrapper-left">
                {/* <Fade bottom> */}
                <h2><span style={{color:'green'}}>Real</span>Quality</h2>
                <h3>farm-grown products</h3>
                <p
                >   We can call ourselves the innovators in agricultural business. And these are not just words. They have
                    solid background. You can find real proof reading more about our company.
                </p>
                {/* </Fade> */}
            </div>
            <div className="header-wrapper-right">
                {/* <Fade bottom> */}
                <button className='btn-left'>About us</button>
                <button className='btn-right'>Contact us</button>
                {/* </Fade> */}
            </div>
        </div>
    </div>
  )
}

export default Header