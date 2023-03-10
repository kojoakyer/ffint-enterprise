import React from 'react'
import './herosection.css'

const Herosection = () => {
  return (
    <div className='herosection' id='about'>
        <div className="herosection-wrapper">
            <div className="herosection-wrapper-left">
                {/* <Fade left> */}
                    <img src="http://maispura.ind.br/home/wp-content/uploads/2015/12/product_creative-600x449.png" alt="" />
                {/* </Fade> */}
            </div>
            <div className="herosection-wrapper-right">
                <h3>ABOUT FFINT ENTERPRISE</h3>
                <h5>We Believe In Producing The Best Quality Organic Farm Produce.
                </h5>

                <p>FFINT enterprise is a family run company founded in 2008 that produces organic farm produce.</p>
                <div className="herosection-wrapper-right-img">
                    <div className="hero-img">
                        <img src="assets/organic-food-1.png" alt="" />
                        <h6>Why Organic</h6>
                    </div>
                    <div className="hero-img">
                        <img src="assets/organic-food2.png" alt="" />
                        <h6>Specialty Produce</h6>
                    </div>
                </div>
                <p>
                    FFint Enterprise is a leading producer and supplier of exotic fresh fruits, vegetables and tubers in Ghana and beyound.
                </p>
                <button className='herosection-btn'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Herosection