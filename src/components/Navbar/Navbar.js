import React, { useState } from 'react'
import "./Navbar.css"


export default function Navbar() {

 const[bar, setBar] = useState(false);

  return (
    <header>
      <div className='logo'>
        <h2>Animixplay</h2>
      </div>
      <nav className= {bar ? "menu active" : "menu" }>
                <a href='#home'>Home</a>
          
                <a href='#anime'>Anime</a>

                <a href='#family'>Family</a>
               
                <a href='#action'>Action</a>
               
                <a href='#romance'>Romance</a>
               
                
      </nav>
      <div className='nav-icons'>
       <i class="fa-solid fa-bars bars-icon"  onClick={() => setBar(!bar)}></i>
       <i class="fa-solid fa-magnifying-glass search-icon"></i>
       <i class="fa-solid fa-heart heart-icon"></i> 
      </div>
</header>
  )
}
