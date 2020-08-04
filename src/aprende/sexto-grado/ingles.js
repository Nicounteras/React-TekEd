import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function inglesSextoIndex() {
  return (
    <>
  <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Inglés 6to grado</h2>
    <h4>¡Elige algún tema y empieza!</h4>
    <div className="temas">
      <div className="losVTemas">
      <Link className="a backA" to="/aprende/sexto-grado/ingles/grammar"><button>Grammar</button></Link>
      <Link className="d backC" to="/aprende/sexto-grado/ingles/presnt-continuous"><button>Present continuous</button></Link>
      <Link className="e backD" to="/aprende/sexto-grado/ingles/vocabulary"><button>Vocabulary</button></Link>
      <Link className="f backE" to="/aprende/sexto-grado/ingles/creativity"><button>Creativity</button></Link>
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

export default inglesSextoIndex

