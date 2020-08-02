import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function mateQuintoIndexEjercicios() {
  return (
    <>
   <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Inglés 5to grado</h2>
    <h4>¡Elige algún tema y resuelve los ejercicios!</h4>
    <div className="temas">
      <div className="losVTemas">
      <Link className="a backA" to="/ejercicios/quinto-grado/ingles/grammar"><button>Grammar</button></Link>
      <Link className="d backC" to="/ejercicios/quinto-grado/ingles/present-simple"><button>Present simple</button></Link>
      <Link className="e backD" to="/ejercicios/quinto-grado/ingles/vocabulary"><button>Vocabulary</button></Link>
      <Link className="f backE" to="/ejercicios/quinto-grado/ingles/past-simple"><button>Past simple</button></Link>
      <Link className="g backF" to="/ejercicios/quinto-grado/ingles/time"><button>Time</button></Link>
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

export default mateQuintoIndexEjercicios

