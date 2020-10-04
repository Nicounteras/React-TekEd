import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

function Nav() {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <>
    <nav id="inicio" className="initialNav fixed">
    <a href="/" className="Tekito"><h1>Tek<span>Ed</span></h1></a>
    <article id="menu" className="theMenuLinks">
      {/* <Link to="/aprende/quinto-grado/matematica">
        <li className="cool-link">Aprende del tema</li>
      </Link> */}
       {/* <Link to="/store">
       <li className="cool-link">Tienda</li>
       </Link> */}
    </article>
    <i className="fas fa-bars toggleMenuButton" onClick={() => setToggleNav(!toggleNav)}></i>
    <div className={`toggleNav ${toggleNav ? 'navOn' : 'navOff'}`}>
      <h3 className="toggleDevTitle">Curso de HTML 5</h3>
      <article className="togLinks">
      <NavLink to="/programacion/desarrollo-web/curso-html/introduccion" className="htmlNav" activeClassName="acHTMLNav"><button>Introducción</button></NavLink>
            <NavLink to="/programacion/desarrollo-web/cursos/html/instalacion" className="htmlNav" activeClassName="acHTMLNav"><button>Instalación</button></NavLink>
            <NavLink to="/programacion/desarrollo-web/cursos/html/composicion" className="htmlNav" activeClassName="acHTMLNav"><button>Composición</button></NavLink>
            <NavLink to="/programacion/desarrollo-web/cursos/html/meta-tags" className="htmlNav" activeClassName="acHTMLNav"><button>Meta Tags</button></NavLink>
            <NavLink to="/programacion/desarrollo-web/cursos/html/textos" className="htmlNav" activeClassName="acHTMLNav"><button>Textos</button></NavLink>
            <NavLink to="/programacion/desarrollo-web/cursos/html/divs" className="htmlNav" activeClassName="acHTMLNav"><button>Divs</button></NavLink>
            <NavLink to="/programacion/desarrollo-web/cursos/html/listas" className="htmlNav" activeClassName="acHTMLNav"><button>Listas</button></NavLink>
            <NavLink to="/programacion/desarrollo-web/cursos/html/hipervinculos" className="htmlNav" activeClassName="acHTMLNav"><button>Hipervínculos</button></NavLink>
      </article>
    </div>
</nav>
    </>
  )
} 

export default Nav