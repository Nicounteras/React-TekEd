import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function multiplicacionesQuintoGradoRespuestas() {
  return (
   <>
<div className="showingTheAnswer1">
<div class="whiteSec big">
    <h2>Respuestas de los ejercicios</h2>
<div class="grid28">
        <article>
          <span>1) </span>6.3
        </article>
        <article>
          <span>2) </span>8.1
        </article>
        <article>
          <span>3) </span>47.31
        </article>
        <article>
          <span>4) </span>72.68
        </article>
        <article>
          <span>5) </span>108.16
        </article>
        <article>
          <span>6) </span>35.011
        </article>
        <article>
          <span>7) </span>1640.1
        </article>
        <article>
          <span>8) </span>1710.38
        </article>
        <article>
          <span>9) </span>857.2895
        </article>
        <article>
          <span>10) </span>783.9733
        </article>
        <article>
          <span>11) </span>2 401.4724
        </article>
        <article>
          <span>12) </span>1 270.221
        </article>
        <article>
          <span>13) </span>48 264.286
        </article>
        <article>
          <span>14) </span>42 858.4772
        </article>
        <article>
          <span>15) </span>974 080.186
        </article>
      </div>
    <Link to="/ejercicios/quinto-grado/matematica/multiplicaciones">
    <button id="cierreCool1" class="entendidoCapitán">Volver a los ejercicios</button>
    </Link>
    <div className="toggleClose enWhiteSecBig" id="cierre2">
    <Link to="/ejercicios/quinto-grado/matematica/multiplicaciones">
      <div className="izquierda black"></div>
      <div className="derecha black"></div>
 </Link>
</div>
  </div>

  </div>
   </>
  )
} 

export default multiplicacionesQuintoGradoRespuestas

