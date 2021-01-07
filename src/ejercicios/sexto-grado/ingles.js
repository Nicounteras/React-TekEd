import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function InglesQuintoIndexEjercicios() {
  return (
    <>
   <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Inglés 6to grado</h2>
    <h4>¡Elige algún tema y resuelve los ejercicios!</h4>
    <div className="temas">
      <div className="losVTemas">
      <Link className="a backA" to="/ejercicios/sexto-grado/ingles/grammar"><button>Grammar</button></Link>
      <Link className="f backE" to="/ejercicios/sexto-grado/ingles/past-simple"><button>Present continious</button></Link>
      <Link className="d backC" to="/ejercicios/sexto-grado/ingles/present-simple"><button>Vocabulary</button></Link>
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

export default InglesQuintoIndexEjercicios

