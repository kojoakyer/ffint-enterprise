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
        img:'assets/img1.jpg',
        title:'Turia'
    },
    {
        img:'assets/img2.jpg',
        title:'Tinda'
    },
    {
        img:'https://images.pexels.com/photos/13422250/pexels-photo-13422250.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title:'Birdeye Chilli'
    },
    {
        img:'assets/img5.jpg',
        title:'Dried Hibiscus'
    },
    {
        img:'https://images.pexels.com/photos/2103946/pexels-photo-2103946.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:'Dried Coconut '
    },
    {
        img:'assets/img3.jpg',
        title:'Long Marrow'
    },
    {
        img:'assets/img6.jpg',
        title:'Fresh Puna Yam'
    },
    {
        img:'assets/img7.jpg',
        title:'Fresh White Yam'
    },
    {
        img:'assets/img4.jpg',
        title:'Tiger Nut'
    },
    {
        img:'assets/garriimg.webp',
        title:'Yellow Garri'
    },
    {
        img:'assets/Garriwhite.jpg',
        title:'White Garri'
    }
]