import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import desert1 from "./../../../images/ciencias5to/desierto1.jpg"
import desert2 from "./../../../images/ciencias5to/desierto2.jpg"
import forrest1 from "./../../../images/ciencias5to/forrest1.jpg"
import forrest2 from "./../../../images/ciencias5to/forrest2.jpg"
import montaña1 from "./../../../images/ciencias5to/montaña1.jpg"
import montaña2 from "./../../../images/ciencias5to/montaña2.jpg"
import mar1 from "./../../../images/ciencias5to/mar1.jpg"
import mar2 from "./../../../images/ciencias5to/mar2.jpg"
import rio1 from "./../../../images/ciencias5to/rio1.jpg"
import rio2 from "./../../../images/ciencias5to/rio2.jpg"

function ecosistemasQuinto() {
  return (
    <>
    <Nav/>
    <div className="buttonDivTo">
    <Link to="/ejercicios/quinto-grado/ciencias/ecosistemas" className="goToOtherArticle cool-link">
    Practicar
</Link>
</div>
    <Rail/>
    <div class="theScience">
            <h2>Ecosistemas🌱</h2>
            <span class="subScience">¿Qué es un ecosistema?, te lo explicamos detalladamente</span>
            <div class="blogText">
              <div class="puntosClave">
                <h5 class="blogS">Puntos clave:</h5>
                <li>Un ecosistema es un territorio en el cual habitan y conviven diferentes seres vivos.</li>
                <li>Existen diferentes tipos de ecosistemas y están divididos en 2 categorías: ecosistemas terrestres y acuáticos. </li>
                <li>La flora y la fauna varía dependiendo al ecosistema.</li>
              </div>
              <h5 class="blogS">¿Qué es un ecosistema?</h5>
              <div class="liPuntos">
                <li>Es un conjunto de organismos vivos que conviven en el mismo hábitat.</li>
                <li>Dentro de un ecosistema se pueden encontrar los siguientes organismos:</li>
             </div>
             <div class="liDelLi">
               <li>Productores primarios 🌱 → Producen su propia comida</li>
               <li>Consumidores 🐰🐯 → Se alimentan de otros organismos vivos</li>
               <li>Descomponedores 🍄 → Se alimentan de materia orgánica muerta</li>
             </div>
             <h5 class="blogS underlined">Tipos de ecosistemas:</h5>
             <h5 class="blogS alH5d">Ecosistema terrestre ⛰ → Los seres vivos viven en el suelo, subsuelo o aire.</h5>
            <div class="liPuntos">
              <li><span class="moradoTitle">Ecosistema desértico</span>: Este territorio es árido y seco porque hay una escasez de lluvia (no llueve mucho). Por estas características este ecosistema es difícil de habitar tanto para plantas como animales.</li>
           </div>
           <div class="liDelLi">
             <li>Flora: Hierbas bajas, cactus, arbustos aislados, etc. </li>
             <li>Fauna: Lagartijas, camellos, alacranes, serpientes, coyotes, arañas, etc.</li>
             <li>Oasis: Son pequeños lugares con agua en donde crecen otras plantas como palmeras y arbustos. 
            </li>
           </div>
           <div class="image2Div">
           <img src={desert1} className="image" alt="El desierto es un ecosistema terrestre"/>
           <img src={desert2} className="image" alt="El desierto es un ecosistema terrestre"/>
           </div>
           <div class="liPuntos">
            <li><span class="moradoTitle">Ecosistema forestal</span>: Hay muchas plantas de diferentes tipos en este territorio. Son considerados los ecosistemas con mayor diversidad biológica. Existen 2 tipos de bosques:</li>
         </div>
         <div class="liDelLi">
           <li>Bosques tropicales: Tienen mayor diversidad en flora y fauna. Sus plantas dan frutos. El clima es cálido.</li>
           <li>Bosques templados y fríos o de coníferas: En este territorio predominan las plantas que no dan frutos. El clima es frío. </li>
         </div>
         <div class="image2Div">
         <img src={forrest1} className="image" alt="El bosque es un ecosistema terrestre"/>
           <img src={forrest2} className="image" alt="El bosque es un ecosistema terrestre"/>
         </div>
         <div class="liPuntos">
          <li><span class="moradoTitle">Ecosistema montañoso</span>: En este territorio hay una gran variedad de montañas ya sean pequeñas o grandes. En este tipo de ecosistema se puede encontrar una mayor concentración de aguas dulces.</li>
       </div>
       <div class="liDelLi">
         <li>Flora: Se encuentra en la parte más baja del territorio. Podemos encontrar hierbas, arbustos, flores, musgos, etc.</li>
         <li>Fauna: Cabras, zorros, lobos, aves, etc.</li>
       </div>
       <div class="image2Div">
       <img src={montaña1} className="image" alt="Una montaña es un ecosistema terrestre"/>
           <img src={montaña2} className="image" alt="Una montaña es un ecosistema terrestre"/>
       </div>
       <h5 class="blogS alH5">Ecosistema acuático💧→ Los seres vivos viven y se desarrollan en el agua.</h5>
       <div class="liPuntos">
         <li><span class="moradoTitle">Ecosistema de agua salada</span>: Este territorio se caracteriza por lo saladas que son sus aguas. ¡El mar es salado! Es un ecosistema de agua salada.</li>
       </div>
       <div class="liDelLi">
         <li>Flora: Algas. Existen diversos tipos de algas que se pueden encontrar en este ecosistema.</li>
         <li>Fauna: Tiburones, pez globo, mantarrayas, ballenas, delfines, orcas, anguilas, cangrejos, tortugas, etc.</li>
       </div>
       <div class="image2Div">
       <img src={mar1} className="image" alt="Ecosistema acuático"/>
           <img src={mar2} className="image" alt="Ecosistema acuático"/>
       </div>
       <div class="liPuntos">
         <li><span class="moradoTitle">Ecosistema de agua dulce</span>: Sus aguas no son saladas. ¡De acá viene el agua que tomamos! Podemos encontrar diferentes tipos de rocas. Sus principales formas son ríos, lagos, lagunas, pantanos, estanques, arroyos, etc. </li>
       </div>
       <div class="liDelLi">
         <li>Flora: Flores, hojas planas, diferentes tipos de césped, etc.</li>
         <li>Fauna: Nutrias, cocodrilos, ranas, tortugas, pirañas, etc.</li>
       </div>
       <div class="image2Div">
       <img src={rio1} className="image" alt="El río es un ecosistema"/>
           <img src={rio2} className="image" alt="El río es un ecosistema"/>
       </div>
       <div class="autor">
        <span class="by">Escrito por:</span> <span class="nameOf">Fernanda Rosales</span><span class="dateOf">(29/05/2020)</span>
      </div>
      </div>
      </div>
      </>
  )
} 

export default ecosistemasQuinto
