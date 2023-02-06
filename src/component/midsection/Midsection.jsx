import React from 'react'
import './midsection.css'

const Midsection = () => {
  return (
    <div className='midsection'>
        <div className="midsection-wrapper">
            <div className="midsection-wrapper-left">
                <h3>ABOUT FFINT ENTERPRISE</h3>
                <h5>Some Reasons To Choose FFINT ENTERPRISE?</h5>

                <p>Our vision is to be Ghana's largest exporter of agricultural goods.</p>
                <div className="midsection-wrapper-right-img">
                    <div className="mid-img">
                        <img src="assets/staff.png" alt="" />
                        <div className="mid-img-con">
                            <h5>Professional Staff</h5>
                            <p>Our staff are dedicated to producing the best quality products</p>
                        </div>
                    </div>
                    <div className="mid-img">
                        <img src="assets/payment.png" alt="" />
                        <div className="mid-img-con">
                            <h5>100% Payment Secure</h5>
                            <p>Secure payment is assured. All form of payment is accepted, we ensure all transactions are smooth and secured</p>
                        </div>
                    </div>
                    <div className="mid-img">
                        <img src="assets/organic1.png" alt="" />
                        <div className="mid-img-con">
                            <h5>Quality Organic Food</h5>
                            <p>Quality organic food are guaranteed. We pride ourselves in providing quality products for ou clients</p>
                        </div>
                    </div>
                </div>
                <button className='mid-btn'>Learn more</button>
            </div>
            <div className="midsection-wrapper-right">
                {/* <Fade right> */}
                    <img src="assets/choose-us.png" alt="" />
                {/* </Fade> */}
            </div>
        </div>
    </div>
  )
}

export default Midsection