import React from 'react'
import "./navbar.scss"
import { useState } from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function Navbar() {

  const [open, setOpen] = useState(false)

  const {currentUser} = useContext(AuthContext) 

  // const user = true

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

          {currentUser ? (
            <div className="user">
              <img
                src={currentUser.avatar || "/noavatar.jpg"}
                alt=""
              />
              <span>{currentUser.username}</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
           )
           :
           (
            <>
              <a href="/login">Sign In</a>
              <a href="/register" className='register'>Sign Up</a>
            </>
           )
          }


          <div className="menuIcon">
            <img src="/menu.png" alt="menu" onClick={() => setOpen((prevOpen) => !prevOpen)} />
          </div>

          <div className={open ? "menu active" : "menu"}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
            <a href="/login">Sign In</a>
            <a href="/register">Sign Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar