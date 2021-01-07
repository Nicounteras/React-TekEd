import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function HumanidadesSextoEj() {
  return (
    <>
   <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Humanidades 6to grado</h2>
    <h4>¡Elige algún tema y resuelve los ejercicios!</h4>
    <div className="temas">
      <div className="losVTemas">
      <Link className="a backA" to="/ejercicios/sexto-grado/personal-social/contexto-peruano"><button>Cont. Peruano</button></Link>
      <Link className="d backC" to="/ejercicios/sexto-grado/personal-social/egipto"><button>Egipto</button></Link>
      <Link className="f backE" to="/ejercicios/sexto-grado/personal-social/geografia-peruana"><button>Geo. Peruana</button></Link>
      <Link className="e backD" to="/ejercicios/sexto-grado/personal-social/puntos-cardinales"><button>Puntos cardinales</button></Link>
      </div>
      <div className="losI">
        <div className="fraseBuenarda">
         <div className="vamosAaprender"><h3>¡Socialmente <span>cool</span>!</h3><i className="fas fa-child"></i></div>
        </div>
      </div>
      </div>
  </div>
  <Foot/>
  </>
  )
} 

export default HumanidadesSextoEj

