import React from 'react'
import './progress.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Fade } from 'react-reveal';

const Progress = () => {
  const percentage = 66;
  return (
    <div className='progress'>
      <div className="progress-wrapper">
        <div className="progress-wrapper-left">
          <h4>MANUFACTURED</h4>
          <h5>Expoter of agricultural goods</h5>
          <p>Our vision is to be Ghanas largest exporter of agriculturalgoods.</p>
        </div>
        <div className="progress-wrapper-right">
          <Fade bottom>
          <div className="cirle-cont">
            <CircularProgressbar className='circle' value={percentage} text={`${percentage}%`} />
            <p>GMO-FREE GUARANTEED</p>
          </div>
          </Fade>
          <Fade bottom>
          <div className="cirle-cont">
            <CircularProgressbar className='circle' value={75} text='75%' />
            <p>INTEGRITY</p>
          </div>
          </Fade>
          <Fade bottom>
          <div className="cirle-cont">
            <CircularProgressbar className='circle' value={90} text='90' />
            <p>QUALITY</p>
          </div>
          </Fade>
          <Fade bottom>
          <div className="cirle-cont">
            <CircularProgressbar className='circle' value={88} text='88' />
            <p>INNOVATION</p>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Progress