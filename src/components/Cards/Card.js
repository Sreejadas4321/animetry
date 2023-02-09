import React from 'react'
import Slider from 'react-slick'
import NextArrow from '../Home/NextArrow'
import PrevArrow from '../Home/PrevArrow';
import "./Card.css"



const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    spaceBetween: 30,
    delay: 4500,
    nextArrow: <NextArrow/>,
     prevArrow:  <PrevArrow/>,
  };
export default function Card({list, name}) {
  return (
    <div>
      <h3 className='heading'>{name}</h3>
       <Slider {...settings}>
       {list.map((item)=>(
         <div className='card-box'>
         <img
          src={item.cover}
          alt={item.title}
         className="card-box-img"
            />
            <div className="card-gradient-bg"></div>
            <div className='card-content'>
               <h3>{item.title}</h3>
               <p>{item.plot}</p>
               <a href='#' className='card-btn'>Download</a>
               </div>
            </div>
           
        ))}
        </Slider> 
    </div>
  )
}
