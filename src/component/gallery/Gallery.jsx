import React from 'react'
import './gallery.css'

const Gallery = () => {
  return (
    <div className='gallery' id='gallery'>
        <h6>Why choose us</h6>
        <h3>Gallery</h3>
        <div className="gallery-wrapper">
            <div className="image-grid">
                {items.map((item)=>{
                    return(
                        <div className="gallery-img">
                            <img src={item.img} alt="" />
                            <div className="img-desc">
                                <h6>{item.title}</h6>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Gallery


const items =[
    {
        img:'assets/berry.jpg',
        title:'Strawbery'
    },
    {
        img:'assets/berry.jpg',
        title:'Strawberry'
    },
    {
        img:'assets/green.jpg',
        title:'Tomatoes'
    },
    {
        img:'assets/bag-img2.jpg',
        title:'tomato'
    },
    {
        img:'assets/plants.jpg',
        title:'plant'
    },
    {
        img:'assets/bag-img.jpg',
        title:'plant'
    },
    

]