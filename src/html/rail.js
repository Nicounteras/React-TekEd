import React from "react"
import { Link } from "react-router-dom" 
import { NavLink } from "react-router-dom" 


function Rail(){
        return(
            <>
        <div class="barraDemenú dev">
            <h2 className="cursoHTML">HTML 5</h2>
            <NavLink to="/desarrollo-web/curso-html/introduccion" className="htmlNav" activeClassName="acHTMLNav"><button>Introducción</button></NavLink>
            <NavLink to="/desarrollo-web/curso-html/instalacion" className="htmlNav" activeClassName="acHTMLNav"><button>Instalación</button></NavLink>
            <NavLink to="/desarrollo-web/curso-html/composicion" className="htmlNav" activeClassName="acHTMLNav"><button>Composición</button></NavLink>
            <NavLink to="/desarrollo-web/curso-html/meta-tags" className="htmlNav" activeClassName="acHTMLNav"><button>Meta Tags</button></NavLink>
            <NavLink to="/desarrollo-web/curso-html/textos" className="htmlNav" activeClassName="acHTMLNav"><button>Textos</button></NavLink>
            <NavLink to="/desarrollo-web/curso-html/divs" className="htmlNav" activeClassName="acHTMLNav"><button>Divs</button></NavLink>
            <NavLink to="/desarrollo-web/curso-html/listas" className="htmlNav" activeClassName="acHTMLNav"><button>Listas</button></NavLink>
            <NavLink to="/desarrollo-web/curso-html/hipervinculos" className="htmlNav" activeClassName="acHTMLNav"><button>Hipervínculos</button></NavLink>
            </div>
        </>
        )
}
export default Rail