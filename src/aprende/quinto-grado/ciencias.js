import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function cienciasQuintoIndex() {
  return (
    <>
  <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Ciencias 5to grado</h2>
    <h4>¡Elige algún artículo y empieza!</h4>
    <div className="temas">
      <div className="losVTemas">
      <Link className="a backA" to="/aprende/quinto-grado/ciencias/ecosistemas"><button>Ecosistemas</button></Link>
      <Link className="b backB" to="/aprende/quinto-grado/ciencias/cadena-alimenticia"><button>Cadena alimenticia</button></Link>
      <Link className="d backC" to="/aprende/quinto-grado/ciencias/animales-vertebrados"><button>Animales vertebrados</button></Link>
      <Link className="e backD" to="/aprende/quinto-grado/ciencias/animales-invertebrados"><button>Animales invertebrados</button></Link>
      <Link className="f backE" to="/aprende/quinto-grado/ciencias/adaptaciones"><button>Adaptaciones</button></Link>
      </div>
      <div className="losI">
        <div className="fraseBuenarda">
         <div className="vamosAaprender"> <h3>Científicamente <span>increíble</span>!</h3><i class="fas fa-child"></i></div>
        </div>
      </div>
      </div>
  </div>
  <Foot/>
  </>
  )
} 

export default cienciasQuintoIndex

