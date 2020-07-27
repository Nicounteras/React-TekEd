import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function redondeoQuintoGradoDosRespuestas() {
  return (
   <>
   <div class="showingTheAnswer0">
    <div class="whiteSec">
      <h3 class="bajaEsaVaina">Respuestas de los ejercicios</h3> 
      <div class="respond11">
      <h5><span>1)</span> 1040</h5>
    <h5><span>2)</span> 1040</h5>
    <h5><span>3)</span> 1040</h5>
    <h5><span>4)</span> 1040</h5>
    <h5><span>5)</span> 1050</h5>
    <h5><span>6)</span> 1050</h5>
    <h5><span>7)</span> 1050</h5>
    <h5><span>8)</span> 1050</h5>
    <h5><span>9)</span> 1050</h5>
    <h5><span>10)</span> 2010</h5>
    <h5><span>11)</span> 1050</h5>
    </div>
    <Link to="/ejercicios/quinto-grado/matematica/redondeo-2"><button id="cierreCool1"class="entendidoCapitán">Volver a los ejercicios</button></Link>
    </div>
    
    <div class="toggleClose" id="cierre">
      <Link to="/ejercicios/quinto-grado/matematica/redondeo-2">
        <div class="izquierda"></div>
        <div class="derecha"></div>
   </Link>
   </div>
 </div>
   </>
  )
} 

export default redondeoQuintoGradoDosRespuestas

