import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

function Nav() {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <>
    <nav id="inicio" className="initialNav fixed">
    <a href="/" className="Tekito"><h1>Tek<span>Ed</span></h1></a>
    <article id="menu" className="theMenuLinks">
      {/* <Link to="/ejercicios/quinto-grado/matematica">
        <li className="cool-link">Ejercicios</li>
      </Link> */}
       {/* <Link to="/store">
       <li className="cool-link">Tienda</li>
       </Link> */}
    </article>
    <i className="fas fa-bars toggleMenuButton" onClick={() => setToggleNav(!toggleNav)}></i>
    <div className={`toggleNav ${toggleNav ? 'navOn' : 'navOff'}`}>
      <h3>Aprende en línea</h3>
      <h5>Matemática</h5>
      <article className="togLinks">
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/aprende/quinto-grado/matematica/algebra">Álgebra</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/aprende/quinto-grado/matematica/divisiones">Divisiones</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/aprende/quinto-grado/matematica/multiplicaciones">Multiplicaciones</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/aprende/quinto-grado/matematica/numeros-romanos">Números romanos</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/aprende/quinto-grado/matematica/restas">Restas</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/aprende/quinto-grado/matematica/redondeo">Redondeo</NavLink></li>
      </article>
      <div className="other-courses">
        <h5 className="padding20-0">Más áreas</h5>
        <button className="nola"><Link className="theRealToggleLink">Español</Link></button>
        <button class="ingles"><Link to="/aprende/quinto-grado/ingles" className="theRealToggleLink">Inglés</Link></button>
               <button class="ciencias"><Link to="/aprende/quinto-grado/ciencias" className="theRealToggleLink">Ciencias</Link></button>
               <button class="humanidades"><Link to="/aprende/quinto-grado/personal-social" className="theRealToggleLink">Personal social</Link></button>
      </div>
    </div>
</nav>
    </>
  )
} 

export default Nav