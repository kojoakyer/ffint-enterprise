import React from 'react'

import './titlesection.css'

const Titlesection = () => {
  return (
    <div>
        <div className="titlesection">
            <h5>WHAT WE GROW</h5>
            <h3>Products that we make</h3>
            {/* <Fade bottom> */}
            <div className="titlesection-wrapper">
                <div className="titlesection-wrapper-content">
                {/* <Fade bottom> */}
                    <img src="assets/img-5.webp" alt="" />
                    <h5>Vegetables</h5>
                    <p>We produce a vriety of vegetables such as Turia, Tinda, Long Marrow, Birdeye Chilli</p>
                {/* </Fade> */}
                </div>
                <div className="titlesection-wrapper-content">
                {/* <Fade bottom > */}
                <img src="assets/img-6.webp" alt="" />
                    <h5>Herbs</h5>
                    <p>we supply nutritional herbs like Dried Hibiscus Flowers.</p>
                {/* </Fade> */}
                </div>
                <div className="titlesection-wrapper-content">
                {/* <Fade bottom> */}
                <img src="assets/img-7.webp" alt="" />
                    <h5>Tubers</h5>
                    <p>We grow fresh organic tubers such as Fresh Puna Yam, Fresh White Yam and Tiger nut.</p>
                {/* </Fade> */}
                </div>
            </div>
            {/* </Fade> */}
        </div>
    </div>
  )
}

export default Titlesection