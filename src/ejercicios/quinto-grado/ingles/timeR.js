import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../mate/nav"
import Rail from "./rail"

function timeQuintoGradoRespuestas() {
  return (
   <>
  <div className="showingTheAnswer0">
    <div className="whiteSec">
    <h3 className="bajaEsaVainaI">Answers</h3>      
          <div className="ingles10">
            <h5>1) Quarter past eight</h5>
            <h5>2) Twelve forty-five</h5>
            <h5>3) One pm</h5>
            <h5>4) One thirty</h5>
            <h5>5) Four pm</h5>
            <h5>6) Ten fifty-nine</h5>
            <h5>7) Nine o' one</h5>
            <h5>8) Six twenty</h5>
            <h5>9) Seven pm</h5>
            <h5>10) Eight ten</h5>
          </div>
      <Link to="/ejercicios/quinto-grado/ingles/time"><button id="cierreCool1" className="entendidoCapitán">Go back</button></Link>
    </div>
    <div className="toggleClose enWhiteSecBig" id="cierre"> 
      <Link to="/ejercicios/quinto-grado/ingles/time">
        <div className="izquierda"></div>
        <div className="derecha"></div>
   </Link>
 </div>
</div>
   </>
  )
} 

export default timeQuintoGradoRespuestas

