import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function personalQuintoIndex() {
  return (
    <>
  <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Personal social 5to grado</h2>
    <h4>¡Elige algún artículo y empieza!</h4>
    <div className="temas">
      <div className="losVTemas">
        <Link className="a backA" to="/aprende/quinto-grado/personal-social/contexto-peruano"><button>Cont. Peruano</button></Link>
      <Link className="b backB" to="/aprende/quinto-grado/personal-social/egipto"><button>Egipto</button></Link>
      <Link className="d backC" to="/aprende/quinto-grado/personal-social/puntos-cardinales"><button>Puntos cardinales</button></Link>
      <Link className="e backD" to="/aprende/quinto-grado/personal-social/geografia-peruana"><button>Geo. Peruana</button></Link>
      </div>
      <div className="losI">
        <div className="fraseBuenarda">
         <div className="vamosAaprender"> <h3>¡Socialmente <span>cool</span>!</h3><i className="fas fa-child"></i></div>
        </div>
      </div>
      </div>
  </div>
  <Foot/>
  </>
  )
} 

export default personalQuintoIndex

