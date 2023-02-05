import React from 'react'
import { Fade } from 'react-reveal'
import './values.css'


const Values = () => {
  return (
    <div className='values'>
        
        <div className="values-wrapper">
            
            <div className="values-wrapper-left">
            <Fade bottom>
                <h2>Core Values</h2>
                <p>Our mission is to promote healthy nutrition while encouraging economic development through exceptional produce from Ghana</p>
                <div className="value-btn">
                    <button>Learn more</button>
                    <button>Contact us</button>
                </div>
            </Fade>
            </div>
           
          
            <div className="values-wrapper-right">
            <Fade bottom>
                <div className="value-container">
                    <h4>15</h4>
                    <h5>YEARS OF EXPERIENCE</h5>
                </div>
                <div className="value-container">
                    <h4>7</h4>
                    <h5>TESTING LABORATORIES</h5>
                </div>
                <div className="value-container">
                    <h4>9 +</h4>
                    <h5>FARM PRODUCTS</h5>
                </div>
                <div className="value-container">
                    <h4>25</h4>
                    <h5>QUALIFIED WORKERS</h5>
                </div>
            </Fade>
            </div>
            
        </div>
    </div>
  )
}

export default Values