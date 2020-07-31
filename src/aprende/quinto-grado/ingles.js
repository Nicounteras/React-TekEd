import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function inglesQuintoIndex() {
  return (
    <>
  <Nav/>
  <div className="ejerciciosAresolver">
    <h2>Inglés 5to grado</h2>
    <h4>¡Elige algún tema y empieza!</h4>
    <div className="temas">
      <div className="losVTemas">
        <Link className="a backA" to="/aprende/quinto-grado/ingles/grammar"><button>Grammar</button></Link>
      <Link className="d backC" to="/aprende/quinto-grado/ingles/present-simple"><button>Present simple</button></Link>
      <Link className="e backD" to="/aprende/quinto-grado/ingles/vocabulary"><button>Vocabulary</button></Link>
      <Link className="f backE" to="/aprende/quinto-grado/ingles/past-simple"><button>Past simple</button></Link>
      <Link className="g backF" to="/aprende/quinto-grado/ingles/time"><button>Time</button></Link>
      </div>
      <div className="losI">
        <div className="fraseBuenarda">
         <div className="vamosAaprender"> <h3>Learning is <span>fun</span>!</h3><i class="fas fa-child"></i></div>
        </div>
      </div>
      </div>
  </div>
  <Foot/>
  </>
  )
} 

export default inglesQuintoIndex

