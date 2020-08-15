import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

function Nav() {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <>
    <nav id="inicio" className="initialNav fixed">
    <a href="/" className="Tekito"><h1>Tek<span>Ed</span></h1></a>
    <article id="menu" className="theMenuLinks">
      {/* <Link to="/aprende/quinto-grado/ciencias">
        <li className="cool-link">Aprende del tema</li>
      </Link> */}
       {/* <Link to="/store">
       <li className="cool-link">Tienda</li>
       </Link> */}
    </article>
    <i className="fas fa-bars toggleMenuButton" onClick={() => setToggleNav(!toggleNav)}></i>
    <div className={`toggleNav ${toggleNav ? 'navOn' : 'navOff'}`}>
      <h3>Aprende en línea</h3>
      <h5>Ciencias</h5>
      <article className="togLinks">
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/quinto-grado/personal-social/contexto-peruano">Contexto peruano</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/quinto-grado/personal-social/egipto">Egipto</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/quinto-grado/personal-social/puntos-cardinales">Puntos cardinales</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/quinto-grado/personal-social/geografia-peruana">Geo. Peruana</NavLink></li>
      </article>
      <div className="other-courses">
        <h5 className="padding20-0">Más áreas</h5>
        <button class="m"><Link to="/ejercicios/quinto-grado/matematica" className="theRealToggleLink">Matemática</Link></button>
        <button className="nola"><Link className="theRealToggleLink">Español</Link></button>
               <button class="ingles"><Link to="/ejercicios/quinto-grado/ingles" className="theRealToggleLink">Ingles</Link></button>
               <button class="ciencias"><Link to="/ejercicios/quinto-grado/ciencias" className="theRealToggleLink">Ciencias</Link></button>
      </div>
    </div>
</nav>
    </>
  )
} 

export default Nav