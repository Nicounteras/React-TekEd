import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"

function restasQuintoGradoRespuestas() {
  return (
   <>
<div className="showingTheAnswer1">
  <div className="whiteSec">
    <h3 className="bajaEsaVaina">Respuestas de los ejercicios</h3> 
    <h5><span>1)</span> 1210295</h5>
    <h5><span>2)</span> 964311</h5>
    <h5><span>3)</span> 7961484</h5>
    <h5><span>4)</span> 286424</h5>
    <h5><span>5)</span> 186589</h5>
    <h5><span>6)</span> 789568</h5>
   <Link to="/ejercicios/quinto-grado/matematica/algebra-2"><button id="cierreCool2" className="entendidoCapitán">Entendido capitán</button></Link>
  </div>
  <div className="toggleClose" id="cierre2">
    <Link to="/ejercicios/quinto-grado/matematica/algebra-2">
      <div className="izquierda"></div>
      <div className="derecha"></div>
 </Link>
</div>
  </div>
   </>
  )
} 

export default restasQuintoGradoRespuestas