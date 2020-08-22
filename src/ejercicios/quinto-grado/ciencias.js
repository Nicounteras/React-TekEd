import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function cienciasQuintoIndexEjercicios() {
  return (
    <>
   <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Inglés 5to grado</h2>
    <h4>¡Elige algún tema y resuelve los ejercicios!</h4>
    <div className="temas">
      <div className="losVTemas">
      <Link className="g backF" to="/ejercicios/quinto-grado/ciencias/adaptaciones"><button>Adaptaciones</button></Link>
      <Link className="d backC" to="/ejercicios/quinto-grado/ciencias/cadena-alimenticia"><button>Cadena alimenticia</button></Link>
      <Link className="a backA" to="/ejercicios/quinto-grado/ciencias/ecosistemas"><button>Ecosistemas</button></Link>
      <Link className="f backE" to="/ejercicios/quinto-grado/ciencias/animales-invertebrados"><button>Invertebrados</button></Link>
      <Link className="e backD" to="/ejercicios/quinto-grado/ciencias/animales-vertebrados"><button>Vertebrados</button></Link>
      </div>
      <div className="losI">
        <div className="fraseBuenarda">
         <div className="vamosAaprender"> <h3>¡Vamos a <span>aprender</span>!</h3><i className="fas fa-child"></i></div>
        </div>
      </div>
      </div>
  </div>
  <Foot/>
  </>
  )
} 

export default cienciasQuintoIndexEjercicios

