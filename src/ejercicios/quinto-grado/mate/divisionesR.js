import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function divisionesQuintoGradoRespuestas() {
  return (
   <>
<div className="showingTheAnswer1">
<div class="whiteSec big">
    <h3 class="bajaEsaVaina">Respuestas de los ejercicios</h3> 
    <div class="grid28">
          <article>
            <span>1) 7.5</span>
          </article>
          <article>
            <span>2) 12.5</span>
          </article>
          <article>
            <span>3) 17.5</span>
          </article>
          <article>
            <span>4) 32.5</span>
          </article>
          <article>
            <span>5) 37.5</span>
          </article>
          <article>
            <span>6) 20</span>
          </article>
          <article>
            <span>7) 4</span>
          </article>
          <article>
            <span>8) 1.25</span>
          </article>
          <article>
            <span>9) 0.8</span>
          </article>
          <article>
            <span>10) 0.25</span>
          </article>
          <article>
            <span>11) 4</span>
          </article>
          <article>
            <span>12) 3.75</span>
          </article>
          <article>
            <span>13) 0.25</span>
          </article>
          <article>
            <span>14) 2</span>
          </article>
          <article>
            <span>15) 21</span>
          </article>

      </div>
    <Link to="/ejercicios/quinto-grado/matematica/divisiones">
    <button id="cierreCool1" class="entendidoCapitán">Volver a los ejercicios</button>
    </Link>
  </div>
  <div className="toggleClose" id="cierre2">
    <Link to="/ejercicios/quinto-grado/matematica/divisiones">
      <div className="izquierda black"></div>
      <div className="derecha black"></div>
 </Link>
</div>
  </div>
   </>
  )
} 

export default divisionesQuintoGradoRespuestas

