'use client'
import style from "./styles.css";

export default function Navbar(){ //navbar component
   return(
        <div className="navbar">
         <img src="./music-app-logo.png" alt='logo' className='nav-logo'/>
         <h1 className="nav-title">Music App</h1>
         <a onClick={()=>{
               window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth'
               })
            }} className="nav-title">Music Info</a>
        </div> 
        
   )
}