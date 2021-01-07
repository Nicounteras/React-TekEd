import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function MateSextoEj() {
  return (
    <>
   <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Matemáticas 6to grado</h2>
    <h4>¡Elige algún tema y resuelve los ejercicios!</h4>
    <div className="temas">
      <div className="losVTemas">
        <Link className="a backA" to="/ejercicios/sexto-grado-grado/matematica/divisiones"><button>Divisiones</button></Link>
        <Link className="f backE" to="/ejercicios/sexto-grado/matematica/exponenciales"><button>Exponenciales</button></Link>
        <Link className="e backD" to="/ejercicios/sexto-grado/matematica/fracciones"><button>Fracciones</button></Link>
        <Link className="g backF" to="/ejercicios/sexto-grado/matematica/multipliciones"><button>Multiplicaciones</button></Link>
        <Link className="b backB" to="/ejercicios/sexto-grado/matematica/restas"><button>Restas</button></Link>
        <Link className="d backC" to="/ejercicios/sexto-grado/matematica/sumas"><button>Sumas</button></Link>
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

export default  MateSextoEj

