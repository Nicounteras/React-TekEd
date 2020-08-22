import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import cactus from "./../../../images/ciencias5to/osoPolar.jpg"
import osoPolar from "./../../../images/ciencias5to/cactus.jpg"
import leoNieve from "./../../../images/ciencias5to/leopardoNieve.jpg"
import leones from "./../../../images/ciencias5to/leones.jpg"

function adaptacionesQuinto() {
  return (
    <>
    <Nav/>
    <div className="buttonDivTo">
    <Link to="/ejercicios/quinto-grado/ciencias/adaptaciones" className="goToOtherArticle cool-link">
  Practicar
</Link>
</div>
    <Rail/>
    <div class="theScience">
            <h2>Adaptaciones</h2>
            <span class="subScience">¿Qué son las adaptaciones?, te lo explicamos detalladamente</span>
            <div class="blogText">
            <div class="puntosClave">
                <h5 class="blogS">Puntos clave:</h5>
                <li>Las adaptaciones son todas aquellas características que le permiten a un ser vivo sobrevivir en su hábitat.</li>
                <li>Hay dos clases de adaptaciones:</li>
                <div class="liDelLi adapDiv">
                  <li><span className="boldSpan">Adaptaciones físicas:</span> Son aquellos cambios en las estructuras externas o internas de los organismos.</li>
                  <li><span className="boldSpan">Adaptaciones de comportamiento:</span> Son los cambios relacionados con el comportamiento de los organismos.</li>
                </div>
              </div>
              <h5 class="blogS">¿Qué son las adaptaciones?</h5>
             <p>Las adaptaciones son todas las características que le permiten a un organismo sobrevivir y aprovechar los recursos de su hábitat. </p>
             <p className="margin10">
                 Por ejemplo, los animales del polo norte tienen que desarrollar métodos para poder resistir al frío, mientras que las plantas del desierto tienen mecanismos para poder utilizar la menor cantidad de agua posible debido al clima seco. </p>
             <p>Es por esta razón que todos los organismos son diferentes; han evolucionado para desarrollar distintas características, adecuándose a las condiciones de sus hábitats. </p>
             <div class="image2Div">
             <img src={osoPolar} className="image" alt="Oso polar"/>
              <img src={cactus} className="image" alt="Cactus"/>
             </div>
             <h5 class="blogS adapTitle">Adaptaciones Físicas</h5>
             Las adaptaciones físicas son los cambios en la estructura externa e interna de los organismos. Por lo tanto, pueden ser las características del cuerpo, como orejas largas, o las habilidades, como la capacidad de hibernar. 
             <p class="adapP">Por ejemplo:</p>
             <div class="liDelLi">
            <li>🐾 Los leopardos de las nieves tienen patas grandes y una cola larga para mantener el balance y poder trepar en las montañas.</li>
           </div>
           <img src={leoNieve} className="centralImage margin20-0" alt="Adaptación física"/>
           <h5 class="blogS adapTitle">Adaptaciones Conductuales</h5>
           Las adaptaciones conductuales son los cambios relacionados con el comportamiento de los animales. Por lo tanto, se refiere a todas las distintas características de la conducta de los animales, como la manera en la que pueden huir o atacar al sentir peligro.
           <p className="adapP">Por ejemplo:</p>
         <div class="liDelLi">
         <li>🐾 Los leones se agrupan en manadas para cazar más efectivamente y protegerse entre ellos.</li>
         </div>
         <img src={leones} className="centralImage margin20-0" alt="Adaptación conductual"/>
       <div class="autor">
        <span class="by">Escrito por:</span> <span class="nameOf">Flavia Ballesteros</span> <span class="dateOf">(29/05/2020)</span>
      </div>
      </div>
      </div>
      </>
  )
} 

export default adaptacionesQuinto
