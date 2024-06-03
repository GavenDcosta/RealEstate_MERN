import React from 'react'
import "./navbar.scss"
import { useState } from 'react'

function Navbar() {

  const [open, setOpen] = useState(false)


  return (
    <nav>
        <div className="left">
          <a href="/" className='logo'>
             <img src="/logo.png" alt="logo"/>
             <span>M&G-RealEstate</span>
          </a>     
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
        </div>

        <div className="right">
          <a href="">Sign In</a>
          <a href="" className='register'>Sign Up</a>
          <div className="menuIcon">
            <img src="/menu.png" alt="menu" onClick={() => setOpen((prevOpen) => !prevOpen)} />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
            <a href="">Sign In</a>
            <a href="">Sign Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar