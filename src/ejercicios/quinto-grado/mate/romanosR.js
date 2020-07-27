import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function romanosQuintoGradoRespuestas() {
  return (
   <>
<div className="showingTheAnswer1">
<div class="whiteSec big">
    <h3 class="bajaEsaVaina">Respuestas de los ejercicios</h3> 
    <div class="grid28">
          <article>
            <span>1) 55</span>          
          </article>
          <article>
            <span>2) 20</span>
          </article>
          <article>
            <span>3) 19</span>
          </article>
          <article>
            <span>4) 4</span>
          </article>
          <article>
            <span>5) 100</span>
          </article>
          <article>
            <span>6) 60</span>
          </article>
          <article>
            <span>7) 9</span>
          </article>
          <article>
            <span>8) 2</span>
          </article>
          <article>
            <span>9) 8</span>
          </article>
          <article>
            <span>10) 16</span>
          </article>
          <article>
            <span>11) 15</span>
          </article>
          <article>
            <span>12) 150</span>
          </article>
          <article>
            <span>13) 90</span>
          </article>
          <article>
            <span>14) 500</span>
          </article>
          <article>
            <span>15) 1000</span>
          </article>
      </div>
    <Link to="/ejercicios/quinto-grado/matematica/numeros-romanos">
    <button id="cierreCool1" class="entendidoCapitán">Volver a los ejercicios</button>
    </Link>
  </div>
  <div className="toggleClose" id="cierre2">
    <Link to="/ejercicios/quinto-grado/matematica/numeros-romanos">
      <div className="izquierda black"></div>
      <div className="derecha black"></div>
 </Link>
</div>
  </div>
   </>
  )
} 

export default romanosQuintoGradoRespuestas

