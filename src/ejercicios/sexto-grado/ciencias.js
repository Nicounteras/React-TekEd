import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function CienciasSextoEjercicios() {
  return (
    <>
   <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Ciencias 6to grado</h2>
    <h4>¡Elige algún tema y resuelve los ejercicios!</h4>
    <div className="temas">
      <div className="losVTemas">
      <Link className="g backF" to="/ejercicios/sexto-grado/ciencias/atomos"><button>Átomos</button></Link>
      <Link className="d backC" to="/ejercicios/sexto-grado/ciencias/distintos-materiales"><button>Distintos materiales</button></Link>
      <Link className="a backA" to="/ejercicios/sexto-grado/ciencias/materia"><button>Materia</button></Link>
      <Link className="f backE" to="/ejercicios/sexto-grado/ciencias/tabla-periodica"><button>Tabla periódica</button></Link>
      </div>
      <div className="losI">
        <div className="fraseBuenarda">
         <div className="vamosAaprender"><h3>¡Vamos a <span>aprender</span>!</h3><i className="fas fa-child"></i></div>
        </div>
      </div>
      </div>
  </div>
  <Foot/>
  </>
  )
} 

export default CienciasSextoEjercicios
