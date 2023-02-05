import React from 'react'

import './titlesection.css'

const Titlesection = () => {
  return (
    <div>
        <div className="titlesection">
            <h5>WHAT WE DO</h5>
            <h3>Products that we make</h3>
            {/* <Fade bottom> */}
            <div className="titlesection-wrapper">
                <div className="titlesection-wrapper-content">
                {/* <Fade bottom> */}
                    <img src="assets/img-5.webp" alt="" />
                    <h5>Vegetables</h5>
                    <p>Vegetable farming is the growing of vegetables for human consumption. We produce  variety of vegtables</p>
                {/* </Fade> */}
                </div>
                <div className="titlesection-wrapper-content">
                {/* <Fade bottom > */}
                <img src="assets/img-6.webp" alt="" />
                    <h5>Fruits</h5>
                    <p>Fruit farming is the growing of fruits for human consumption. We produce variety of fruits.</p>
                {/* </Fade> */}
                </div>
                <div className="titlesection-wrapper-content">
                {/* <Fade bottom> */}
                <img src="assets/img-7.webp" alt="" />
                    <h5>Tubers</h5>
                    <p>We produce varities of tubers such as fresh puna yam and fresh white yam. All out tubers are organic.</p>
                {/* </Fade> */}
                </div>
            </div>
            {/* </Fade> */}
        </div>
    </div>
  )
}

export default Titlesection