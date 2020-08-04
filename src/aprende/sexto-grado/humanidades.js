import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function humanidadesSextoIndex() {
  return (
    <>
  <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Humanidades 6to grado</h2>
    <h4>¡Elige algún tema y empieza!</h4>
    <div className="temas">
      <div className="losVTemas">
      <Link className="a backA" to="/aprende/sexto-grado/matematica/algebra"><button>Álgebra</button></Link>
      <Link className="b backB" to="/aprende/sexto-grado/matematica/restas"><button>Restas</button></Link>
      <Link className="d backC" to="/aprende/sexto-grado/matematica/redondeo"><button>Redondeo</button></Link>
      <Link className="e backD" to="/aprende/sexto-grado/matematica/multiplicaciones"><button>Multiplicaciones</button></Link>
      <Link className="f backE" to="/aprende/sexto-grado/matematica/divisiones"><button>Divisiones</button></Link>
      <Link className="g backF" to="/aprende/sexto-grado/matematica/numeros-romanos"><button>N°Romanos</button></Link>
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

export default humanidadesSextoIndex

