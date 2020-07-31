import React, { useState } from 'react'
import "./App.css"
import { Link, NavLink } from "react-router-dom"

function Nav() {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <>
    <nav id="inicio" className="initialNav">
    <a href="/" className="Tekito"><h1>Tek<span>Ed</span></h1></a>
    <article id="menu" className="theMenuLinks">
      <NavLink to="/aprende" className="navLink" activeClassName="activeNavLink">
        <li className="cool-link">Aprende en TekEd</li>
      </NavLink>
       <NavLink to="/ejercicios" className="navLink" activeClassName="activeNavLink">
       <li className="cool-link">Ejercicios</li>
       </NavLink>
       <NavLink to="/quizzes" className="navLink" activeClassName="activeNavLink">
         <li className="cool-link">Quizzes</li>
       </NavLink>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSegwzDAMFV7s8iMbmxIhdG5-YSSpD63l9YxFL-xTLrdiakZug/viewform?vc=0&c=0&w=1" target="blank" className="feedback">¡Danos tu feedback!</a>
       {/* <Link to="/store">
       <li className="cool-link">Tienda</li>
       </Link> */}
    </article>
    <i className="fas fa-bars toggleMenuButton" onClick={() => setToggleNav(!toggleNav)}></i>
    <div className={`toggleNav ${toggleNav ? 'navOn' : 'navOff'}`}>
    <div className="threeButton initialNavi">
     <Link class="cool-link go-btn" to="/aprende">¡Empecemos!</Link>
     <Link className="cool-link ex-btn" to="/ejercicios">Resuelve ejercicios</Link>
     <Link className="cool-link start-btn" to="/quizzes">
       Toma un quiz
     </Link>
     </div>
      </div>
  </nav>
    </>
  )
} 

export default Nav
