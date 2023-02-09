import React from 'react'
import Slider from 'react-slick';
import Action from '../Action section/Action';
import "./Home.css"
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const homeList=[
    {
        id: 1,
        title: "Kakegurui",
        cover:
          "https://c4.wallpaperflare.com/wallpaper/359/158/446/anime-kakegurui-yumeko-jabami-wallpaper-preview.jpg",
        plot:
           "A gambling prodigy comes to an elite school run by games and turns the order upside down. Hyakkaou Private Academy. An institution for the privileged with a very peculiar curriculum.",
    },
    {
        id: 2,
        title: "Demon Slayer",
        cover:
          "https://fr.web.img6.acsta.net/pictures/21/03/29/19/31/2074552.jpg",
        plot:
           "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    },
    {
        id: 3,
        title: "Another",
        cover:
          "https://images6.alphacoders.com/639/thumb-1920-639813.jpg",
        plot:
           "Twenty-six years ago, in a third-year classroom of a middle school, there was a student named Misaki. As an honors student who was also good at sports, the charming boy was popular with his classmates. When he suddenly died, his classmates decided to carry on as if he was still alive until graduation.",
    },
    {
        id: 4,
        title: "Chainsaw Man",
        cover:
          "https://wallpapercave.com/wp/wp10889463.jpg",
        plot:
           "Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws.",
    },
    {
        id: 5,
        title: "Spy X Family",
        cover:
          "https://staticg.sportskeeda.com/editor/2022/05/88351-16516116660503-1920.jpg",
        plot:
           "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    },
    {
        id: 6,
        title: "Your Name",
        cover:
          "https://cdn.vox-cdn.com/thumbor/ab7GeC585ehvC-Y4zEkqUcwOa9c=/0x0:2067x1377/1200x800/filters:focal(869x524:1199x854)/cdn.vox-cdn.com/uploads/chorus_image/image/54120135/your_name_oped.0.jpg",
        plot:
           "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
    },
]
const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
     prevArrow:  <PrevArrow/>,
  };
export default function Home() {
  return (
    <section className='home' id='home'>
      <div className='home-slider'>
      <div className='wrapper'>
      <Slider {...settings}>
        {homeList.map((item)=>(
         <div className='box'>
         <img
          src={item.cover}
          alt={item.title}
         className="box-img"
            />
            <div className="gradient-bg"></div>
            <div className='content'>
               <h3>{item.title}</h3>
               <p>{item.plot}</p>
              
               <a href={<Action/>} className='btn'>Download</a>
               </div>
            </div>
           
        ))}
        
      </Slider>
      </div>
      </div>
    </section>
  )
}
