import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import puntos from "./../../../images/personal-social5to/map1.jpg"
import puntos2 from "./../../../images/personal-social5to/map2.jpg"
import puntos3 from "./../../../images/personal-social5to/map3.jpg"

function puntosCardinalesQuinto() {
  return (
    <>
    <Nav/>
    <div className="buttonDivTo">
    <Link to="/ejercicios/quinto-grado/personal-social/puntos-cardinales" className="goToOtherArticle cool-link">
    Practicar
</Link>
</div>
    <Rail/>
    <div class="theScience">
    <h2>Puntos cardinales📍</h2>
            <span class="subScience">¿Qué son los puntos cardinales y para qué sirven?</span>
            <div class="blogText">
              <h5 class="blogS" >Definición de puntos cardinales</h5>
             <p>Los puntos cardinales son puntos de orientación o sentidos de un mapa que utilizamos para situarnos. Los puntos cardinales se relacionan con el movimiento del sol en el cielo. Los puntos cardinales son 4. El Este (E), donde el sol se esconde; El Oeste (O), donde el sol sale al amanecer, por ende es el lado opuesto del Este. Después están el Norte (N) y el Sur (S), que son dos puntos opuestos que reflejan el eje de rotación terrestres. </p>
             <img src={puntos} className="centralImage margin20-0" alt="Mapa del mundo"/>
             <h5 class="blogS margin20-0">Abscisas y ordenadas</h5>
                <p>A la línea Este-Oeste se le denomina la como el eje de las abscisas y a la línea Norte-Sur, el eje de las ordenadas.</p>
                <img src={puntos2} className="centralImage margin20-0" alt="Puntos cardinales"/>
                <h5 class="blogS margin20-0">Matemáticas en los puntos cardinales</h5>
                <p>La composición de estos 4 puntos generan ángulos de 90°. Las bisectrices (los puntos exactos en medio de punto A y punto B) de los puntos cardinales son: Noreste, NE; punto en medio del Norte y el Este, y así respectivamente con el Sudeste (SE), Noroeste (NO) y Sudoeste (SO).</p>
                <img src={puntos3} className="centralImage margin20-0" alt="Globo terráque"/>
             <div class="autor margin20-0">
              <span class="by">Escrito por:</span> <span class="nameOf">Rafael Alegre</span> <span class="dateOf">(20/06/2020)</span>
            </div>
            </div>
          </div>
      </>
  )
} 

export default puntosCardinalesQuinto
