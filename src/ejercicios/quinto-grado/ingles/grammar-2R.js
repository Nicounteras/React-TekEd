import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../mate/nav"
import Rail from "./rail"

function G1QuintoGradoRespuestas() {
  return (
   <>
  <div className="showingTheAnswer0">
    <div className="whiteSec">
    <h3 class="bajaEsaVainaI">Answers</h3>      
    <div class="ingles8">
            <h5>1) Do</h5>
            <h5>2) Very</h5>
            <h5>3) Tiring</h5>
            <h5>4) Want</h5>
            <h5>5) Is</h5>
            <h5>6) Will</h5>
            <h5>7) Likes</h5>
            <h5>8) Will make</h5>
          </div>
      <Link to="/ejercicios/quinto-grado/ingles/grammar-2"><button id="cierreCool1" className="entendidoCapitán">Go back</button></Link>
    </div>
    <div className="toggleClose enWhiteSecBig" id="cierre"> 
      <Link to="/ejercicios/quinto-grado/ingles/grammar-2">
        <div className="izquierda"></div>
        <div className="derecha"></div>
   </Link>
 </div>

</div>

   </>
  )
} 

export default G1QuintoGradoRespuestas

