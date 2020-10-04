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
    <NavLink to="/tienda/libros" activeClassName="activeNavBar">
       <li className="linkinNav cool-link">Libros</li>
       </NavLink>
       <NavLink to="/tienda/laptops" activeClassName="activeNavBar">
       <li className="linkinNav cool-link">Laptops</li>
       </NavLink>
       {/* <NavLink to="/tienda/audifonos">
       <li className="linkingNav cool-link">Audífonos</li>
       </NavLink> */}
       <NavLink to="/tienda/como-funciona" activeClassName="activeNavBar">
       <li className="linkingNav cool-link">Cómo funciona</li>
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
    <Link class="ex-btn" to="/academico">Libros</Link>
     <Link class="go-btn margin10-0" to="/academico">Laptops</Link>
     {/* <Link className="ex-btn" to="/aprende-algo-nuevo">Audífonos</Link> */}
     <Link class="purple-btn" to="/tienda/como-funciona">Cómo funciona</Link>
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
