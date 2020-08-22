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
      <NavLink to="/academico">
        <li className="linkinNav cool-link">Mejora en el cole</li>
      </NavLink>
       <NavLink to="/aprende-algo-nuevo">
       <li className="linkingNav cool-link">Aprende algo nuevo</li>
       </NavLink>
       {/* <NavLink to="/quizzes" className="navLink" activeClassName="activeNavLink">
         <li className="cool-link">Quizzes</li>
       </NavLink> */}
      {/*  <a href="https://docs.google.com/forms/d/e/1FAIpQLSegwzDAMFV7s8iMbmxIhdG5-YSSpD63l9YxFL-xTLrdiakZug/viewform?vc=0&c=0&w=1" target="blank" className="feedback cool-link">¡Danos tu feedback!</a> */}
       {/* <Link to="/store">
       <li className="cool-link">Tienda</li>
       </Link> */}
    </article>
    <i className="fas fa-bars toggleMenuButton" onClick={() => setToggleNav(!toggleNav)}></i>
    <div className={`toggleNav ${toggleNav ? 'navOn' : 'navOff'}`}>
    <div className="threeButton initialNavi">
     <Link class="go-btn" to="/academico">Mejora en el cole</Link>
     <Link className="ex-btn" to="/aprende-algo-nuevo">Aprende algo nuevo</Link>
    {/*  <Link className="start-btn" to="/quizzes">
       Toma un quiz
     </Link>
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSegwzDAMFV7s8iMbmxIhdG5-YSSpD63l9YxFL-xTLrdiakZug/viewform?vc=0&c=0&w=1" target="blank" className="feedback toggleFeedback">¡Danos tu feedback!</a> */}
     </div>
      </div>
  </nav>
    </>
  )
} 

export default Nav
