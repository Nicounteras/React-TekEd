import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import columna from "./../../../images/ciencias5to/columna.jpg"
import leon from "./../../../images/ciencias5to/leon.jpg"
import ballena from "./../../../images/ciencias5to/ballena.jpg"
import mono from "./../../../images/ciencias5to/mono.jpg"
import llama from "./../../../images/ciencias5to/llama.jpg"
import humano from "./../../../images/ciencias5to/humano.jpg"
import tiburon from "./../../../images/ciencias5to/tiburon.jpg"
import bacalao from "./../../../images/ciencias5to/bacalao.jpg"
import nemo from "./../../../images/ciencias5to/nemo.jpg"
import atun from "./../../../images/ciencias5to/atun.jpg"
import sardinas from "./../../../images/ciencias5to/sardinas.jpg"
import serpiente from "./../../../images/ciencias5to/serpiente.jpg"
import cocodrilo from "./../../../images/ciencias5to/cocodrilo.jpg"
import camaleon from "./../../../images/ciencias5to/camaleon.jpg"
import tortuga from "./../../../images/ciencias5to/tortuga.jpg"
import iguana from "./../../../images/ciencias5to/iguana.jpg"
import sapo from "./../../../images/ciencias5to/sapo.jpg"
import salamandra from "./../../../images/ciencias5to/salamandra.jpg"
import anfibio from "./../../../images/ciencias5to/anfibio.jpg"
import anfibio2 from "./../../../images/ciencias5to/anfibio2.jpg"
import anfibio3 from "./../../../images/ciencias5to/anfibio3.jpg"
import eagle from "./../../../images/ciencias5to/eagle.jpg"
import pato from "./../../../images/ciencias5to/pato.jpg"
import Ave from "./../../../images/ciencias5to/ave.jpg"
import Flamengo from "./../../../images/ciencias5to/flamengo.jpg"
import paloma from "./../../../images/ciencias5to/paloma.jpg"

function vertebradosQuinto() {
  return (
   <>
   <Nav/>
   <div className="buttonDivTo">
   <Link to="/ejercicios/quinto-grado/ciencias/animales-vertebrados" className="goToOtherArticle cool-link">
   Practicar
</Link>
</div>
   <Rail/>
   <div className="theScience">
            <h2>Animales Vertebrados</h2>
            <span class="subScience">¿Qué son los animales vertebrados? aprende acerca de ellos</span>
            <div class="blogText">
              <div class="puntosClave">
                <h5 class="blogH">Puntos clave:</h5>
                <li>Los vertebrados son todos aquellos animales que poseen una columna vertebral.</li>
                <li>Nosotros los humanos, también somos vertebrados, ya que tenemos una columna vertebral en nuestra espalda.</li>
                <li>Están categorizados en 5 grupos: Mamíferos, peces, reptiles, anfíbios y aves.</li>
                <li>Cada grupo tiene características muy peculiares.</li>
                <img className="centralImage vertebra" src={columna}/> 
              </div>
              <h5 class="blogH">Definición general</h5>
             Los animales vertebrados son todos aquellos animales que son dotados de una columna vertebral o espinal dorsal. Esta columna les permite tener simetría bilateral (lo que significa que el lado izquierdo de su cuerpo es similar al derecho). Además, todos contienen un cráneo que protege su cerebro. Existen cinco tipos de animales vertebrados: Mamíferos, peces, reptiles, anfíbios y aves.
             <h5 class="blogS">Mamíferos</h5>
             Los mamíferos se pueden identificar con la siguiente característica: nacen gracias al vientre materno y los bebés se alimentan de las mamas de la madre. Además poseen pelaje en el cuerpo y son animales de sangre caliente (pueden regular la temperatura del cuerpo cuando sea necesario para que los órganos funcionen con normalidad). Además, son los únicos vertebrados que no ponen huevos.
             <p class="ejemplosDe">Ejemplos de mamíferos:</p>
             <div class="liEjemplos">
                <li>Los felinos (gatos, tigres, leones, panteras)</li>
                <li>Las ballenas</li>
                <li>Los monos</li>
                <li>Los camélidos (camellos, alpácas, llamas)</li>
                <li>Nosotrsos, los humanos</li>
             </div>
             <div class="image5Div">
            <img src={leon} className="image" alt="León"/>
              <img src={ballena} className="image" alt="Ballena"/>
              <img src={mono} className="image" alt="Mono"/>
              <img src={llama} className="image" alt="Llama"/>
              <img src={humano} className="image" alt="Humano"/>
          </div>
             <h5 class="blogS">Peces</h5>
             Por su nombre ya los debes conocer. Estos se caracterízan por tener escamas y branquias. Además los puedes encontrar en lagos, ríos, oceanos y demás ecosistemas acuaticos.
             <p class="ejemplosDe">Ejemplos de peces:</p>
             <div class="liEjemplos">
                <li>Los tiburones</li>
                <li>Los bacalaos</li>
                <li>El pez payaso</li>
                <li>El atún</li>
                <li>Las sardinas</li> 
             </div> 
             <div class="image5Div">
            <img src={tiburon} className="image" alt="Tiburón"/>
              <img src={bacalao} className="image" alt="Bacalao"/>
              <img src={nemo} className="image" alt="Nemo"/>
              <img src={atun} className="image" alt="Atún"/>
              <img src={sardinas} className="image" alt="Sardinas"/>
          </div>
             <h5 class="blogS">Reptiles</h5>
             Estos animales son de sangre fría. Tienen en común con los peces las escamas, sin embargo no poseen branquias. Estos se reproducen según la temperatura del ambiente (debido a su sangre fría, ya que no pueden adaptarse a temperaturas drásticas, de lo contrario las crías pueden morir).
             <p class="ejemplosDe">Ejemplos de reptiles:</p>
             <div class="liEjemplos">
                 <li>Las serpientes</li>
                 <li>Los cocodrilos</li>
                 <li>Los camaleones</li>
                 <li>Las tortugas</li>
                 <li>Las iguanas</li>
             </div>
             <div class="image5Div">
            <img src={serpiente} className="image" alt="Serpiente"/>
              <img src={cocodrilo} className="image" alt="Cocodrilo"/>
              <img src={camaleon} className="image" alt="Camaleon"/>
              <img src={tortuga} className="image" alt="Tortuga"/>
              <img src={iguana} className="image" alt="Iguana"/>
          </div>
             <h5 class="blogS">Anfibios</h5>
             Los anfibios se caracterizan por ser muy dúctiles a la adaptación física y a la adaptación de comportamiento. Tienen la piel húmeda y viven en lugares con agua y tierra (ejemplo: un lago).
             <p class="ejemplosDe">Ejemplos de anfibios:</p>
             <div class="liEjemplos">
              <li>Los sapos</li>
              <li>Las salamandras</li>
              <li>El tritón</li>
              <li>Las ranas</li>
              <li>El ajolote</li>
          </div>
          <div class="image5Div">
            <img src={sapo} className="image" alt="Sapo"/>
              <img src={salamandra} className="image" alt="Salamandra"/>
              <img src={anfibio} className="image" alt="Anfibio"/>
              <img src={anfibio2} className="image" alt="Salamander"/>
              <img src={anfibio3} className="image" alt="Animal venenoso"/>
          </div>
          <h5 class="blogS">Aves</h5>
          Tienen como caracterísitica principal tener plumas y alas en los costados, lo que a la mayoría les permite volar. Hay aves que no vuelan como las gallinas y las avestruces. Además, las aves poseen un pico.
          <p class="ejemplosDe">Ejemplos de aves:</p>
          <div class="liEjemplos">
           <li>Las aguilas</li>
           <li>Los patos</li>
           <li>El gallito de las rocas</li>
           <li>Los cóndores</li>
           <li>Las palomas</li>
       </div>
       <div class="image5Div">
            <img src={eagle} className="image" alt="Aguila"/>
              <img src={pato} className="image" alt="Pato"/>
              <img src={Ave} className="image" alt="Ave"/>
              <img src={Flamengo} className="image" alt="Flamengo"/>
              <img src={paloma} className="image" alt="Paloma"/>
          </div>
       <hr/>
       <div class="autor">
         <span class="by">Escrito por:</span> <span class="nameOf">Nicolás Contreras</span> <span class="dateOf">(28/05/2020)</span>
       </div>
       </div>
       </div>
   </>
  )
} 

export default vertebradosQuinto
