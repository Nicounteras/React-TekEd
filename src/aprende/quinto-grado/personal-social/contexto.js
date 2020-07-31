import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../mate/nav"
import Rail from "./rail"

function contextoPeruanoQuinto() {
  return (
    <>
    <Nav/>
    <Rail/>
    <div class="theScience">
            <h2>Contexto peruano 🇵🇪</h2>
            <span class="subScience">¡Aprende acerca del contexto actual del Perú en éste artículo!</span>
            <div class="blogText">
              <div class="puntosClave">
                <h5 class="blogS">Puntos clave:</h5>
                <li>La democracia es un tipo de gobierno en el cual se le da mayor importancia a la opinión conjunta de la sociedad, es decir al pueblo. Perú es un país democrático. </li>
                <li>El Perú es parte de diferentes tratados los cuales promueven una economía responsable y otras cosas.</li>
                <li>El Perú está dividido en 3 regiones (costa, sierra y selva) y cuenta con 24 departamentos. </li>
              </div>
             
              <h5 class="blogS">Perú, país democrático🗳</h5>
             <div class="liPuntos">
              <li>La democracia es un tipo de ordenamiento social y político en el cual las decisiones son tomadas de manera conjunta por la sociedad. </li>
              <li>Los ciudadanos del país participan de la elección de los gobernantes del mismo. ¡Esto se hace a través del derecho a votar! </li>
              <li>
                Los ciudadanos eligen como gobernador al que mejor represente los intereses del pueblo. 
              </li>
              <li>
                En un país democrático todos tienen derechos y obligaciones que cumplir. Los ciudadanos deben respetar las normas y leyes escritas en la constitución del país.
              </li>
              <li>
                Un país democrático cree en el respeto y la igualdad.
              </li>
             </div>
             <div className="centralImage margin20-0 voto"></div>
             <h5 class="blogS pad6015">¿Qué significa que seamos democráticos?</h5>
             <div class="liPuntos">
               <li>
                En nuestro país todos los ciudadanos mayores de 18 años tienen el derecho a votar y ser partícipes de las decisiones importantes del país. Por lo tanto, es un país democrático.
                </li>
               <li>
                El Perú tiene una sola constitución la cual aplica para todos los ciudadanos del país, todos debemos seguir las mismas leyes y tenemos los mismos derechos sin importar las diferencias.
               </li>
               <li>
                 Dato curioso: Sabías que las mujeres recién obtuvieron el derecho a votar en 1955. Además, Perú fue el penúltimo país en darle éste derecho a las mujeres.
               </li>
             </div>
             <h5 class="blogS pad6015">Perú en el contexto sudamericano🌎</h5>
             <div class="liPuntos">
               <li>Perú limita con Brasil, Ecuador, Colombia, Bolivia y Chile. Además, está al costado del océano pacífico. ¡Por eso tenemos una costa tan amplia! 🏖 
              </li>
               <li>
                Perú es parte del tratado de cooperación amazónica junto con países como: Brasil, Ecuador, Bolivia, Venezuela, Colombia, Guyana y Surinam. 
               </li>
               <div class="liDelLi">
                 <li>Se busca proteger y promover el desarrollo de los territorios amazónicos.</li>
                 <li>Proteger el medioambiente.</li>
                 <li>Conservar y utilizar de forma razonable los recursos naturales.</li>
                 <li>Promover el desarrollo económico responsable de la amazonía. </li>
               </div>
               <div class="liPuntos">
                 <li>El Perú es parte de “Comunidad Andina” el cual es un grupo de diferentes países de sudamérica los cuales se han unido para poder alcanzar un desarrollo integral y equilibrado. </li>
               </div>
               <div class="liDelLi">
                 <li>Los países partícipes son Ecuador, Bolivia, Colombia y Perú.</li>
               </div>
               <div className="centralImage margin20-0 globoMundo"></div>
               <h5 class="blogS pad6015">División política del Perú🖋</h5>
               <div class="liPuntos">
                 <li>El Perú está dividido en 24 departamentos.</li>
                 <li>Perú tiene 3 regiones: costa, sierra y selva.</li>
                 <li>La capital de Perú es Lima.</li>
                 <li>La provincia constitucional es el Callao.</li>
               </div>
               <div className="centralImage margin20-0 machuPicchu"></div>
               <h5 class="blogS pad6015">Los departamentos del Perú 🇵🇪</h5>
               <div class="liPuntos">
                 <li>Cada departamento tiene diferentes tradiciones y costumbres. </li>
                 <li>Los departamentos están separados en 3 regiones: costa, sierra y selva.</li>
               </div>
               <div class="liDelLi">
                 <li>La costa🌊: Este territorio está ubicado junto al mar por un costado y por el otro a la sierra. Como tienen acceso directo a las aguas del océano pacífico decimos que son parte de la costa. Los departamentos que conforman esta región son: Tumbes, Piura, Lambayeque, La libertad, Ancash, Lima, Ica, Arequipa, Moquegua y Tacna. 
                </li>
                 <li>La sierra🏔: Este territorio está ubicado entre la costa y la selva. Es la región con mayores altitudes por ende tiene temperaturas mucho más frías. En este territorio podemos encontrar la mayor concentración de hablantes de la lengua “Quechua”. Los departamentos que conforman esta región son: Cajamarca, Huánuco, Pasco, Junín, Huancavelica, Ayacucho, Apurímac, Cusco y Puno.</li>
                 <li>La selva🍃: Este territorio es en el cual se puede encontrar la mayor biodiversidad del país. Además, podemos encontrar la Amazonía la cual es la selva más grande del mundo. ¡Conocida como los pulmones del planeta! Los departamentos que conforman esta región son: Amazonas, San Martín, Loreto, Ucayali y Madre de Dios. 
                </li>
               </div>
               <div class="image3Div">
               <div className="image costa"></div>
               <div className="image sierra"></div>
               <div className="image selva"></div>
               </div>
             </div>
             <div class="autor">
              <span class="by">Escrito por:</span> <span class="nameOf">Fernanda Rosales</span> <span class="dateOf">(20/06/2020)</span>
            </div>
            </div>
          </div>
      </>
  )
} 

export default contextoPeruanoQuinto
