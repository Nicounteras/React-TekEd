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
      <NavLink to="/desarrollo-web/cursos">
        <li className="linkinNav cool-link">Aprende a programar</li>
      </NavLink>
       <NavLink to="/desarrollo-web/equipo">
       <li className="linkinNav cool-link">Libros y laptops</li>
       </NavLink>
       <NavLink to="/desarrollo-web/blog">
       <li className="linkingNav cool-link">Blog</li>
       </NavLink>
    </article>
    <i className="fas fa-bars toggleMenuButton" onClick={() => setToggleNav(!toggleNav)}></i>
    <div className={`toggleNav ${toggleNav ? 'navOn' : 'navOff'}`}>
    <div className="threeButton initialNavi">
     <Link class="go-btn" to="/desarrollo-web/cursos">Aprende a programar</Link>
     <Link className="ex-btn" to="/desarrollo-web/equipo">Libros y laptops</Link>
     <Link className="start-btn" to="/desarrollo-web/blog">
       Blog
     </Link>
     {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSegwzDAMFV7s8iMbmxIhdG5-YSSpD63l9YxFL-xTLrdiakZug/viewform?vc=0&c=0&w=1" target="blank" className="feedback toggleFeedback">¡Danos tu feedback!</a> */}
     </div>
      </div>
  </nav>
    </>
  )
} 

export default Nav
