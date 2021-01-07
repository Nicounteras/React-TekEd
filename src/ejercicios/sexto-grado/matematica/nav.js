import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

function Nav() {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <>
    <nav id="inicio" className="initialNav fixed">
    <a href="/" className="Tekito"><h1>Tek<span>Ed</span></h1></a>
    <article id="menu" className="theMenuLinks">
      {/* <Link to="/aprende/sexto-grado/matematica">
        <li className="cool-link">Aprende del tema</li>
      </Link> */}
       {/* <Link to="/store">
       <li className="cool-link">Tienda</li>
       </Link> */}
    </article>
    <i className="fas fa-bars toggleMenuButton" onClick={() => setToggleNav(!toggleNav)}></i>
    <div className={`toggleNav ${toggleNav ? 'navOn' : 'navOff'}`}>
      <h3>Ejercicios de práctica</h3>
      <h5>Matemática</h5>
      <article className="togLinks">
            <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/sexto-grado/matematica/divisiones">Divisiones</NavLink></li>
            <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/sexto-grado/matematica/exponenciales">Exponenciales</NavLink></li>
            <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/sexto-grado/matematica/fracciones">Fracciones</NavLink></li>
            <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/sexto-grado/matematica/multipliciones">Multiplicaciones</NavLink></li>
            <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/sexto-grado/matematica/restas">Restas</NavLink></li>
            <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/sexto-grado/matematica/sumas">Sumas</NavLink></li>
      </article>
      <div className="other-courses">
        <h5 className="padding20-0">Más ejercicios</h5>
        <button className="nola"><Link className="theRealToggleLink">Español</Link></button>
              <button class="ingles"><Link to="/ejercicios/sexto-grado/ingles" className="theRealToggleLink">Inglés</Link></button>
               <button class="ciencias"><Link to="/ejercicios/sexto-grado/ciencias" className="theRealToggleLink">Ciencias</Link></button>
               <button class="humanidades"><Link to="/ejercicios/sexto-grado/personal-social" className="theRealToggleLink">Humanidades</Link></button>
      </div>
    </div>
</nav>
    </>
  )
} 

export default Nav