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
      <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/quinto-grado/ciencias/adaptaciones">Adaptaciones</NavLink></li>
      <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/quinto-grado/ciencias/cadena-alimenticia">Cadena alimenticia</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/quinto-grado/ciencias/ecosistemas">Ecosistemas</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/quinto-grado/ciencias/animales-invertebrados">Invertebrados</NavLink></li>
                <li><NavLink activeClassName="active" className="toggleLink" exact to="/ejercicios/quinto-grado/ciencias/animales-vertebrados">Vertebrados</NavLink></li>
      </article>
      <div className="other-courses">
        <h5 className="padding20-0">Más áreas</h5>
        <button class="m"><Link to="/ejercicios/quinto-grado/matematica" className="theRealToggleLink">Matemática</Link></button>
        <button className="nola"><Link className="theRealToggleLink">Español</Link></button>
               <button class="ingles"><Link to="/ejercicios/quinto-grado/ingles" className="theRealToggleLink">Ingles</Link></button>
               <button class="humanidades"><Link to="/ejercicios/quinto-grado/personal-social" className="theRealToggleLink">Personal social</Link></button>
      </div>
    </div>
</nav>
    </>
  )
} 

export default Nav