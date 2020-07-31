import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../mate/nav"
import Rail from "./rail"

function vertebradosQuinto() {
  return (
   <>
   <Nav/>
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
                <div className="centralImage vertebra"/> 
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
            <div className="image leon"></div>
            <div className="image ballena"></div>
            <div className="image mono"></div>
            <div className="image llama"></div>
            <div className="image humano"></div>
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
            <div className="image tiburon"></div>
            <div className="image bacalao"></div>
            <div className="image payaso"></div>
            <div className="image atun"></div>
            <div className="image sardina"></div>
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
            <div className="image serpiente"></div>
            <div className="image cocodrilo"></div>
            <div className="image camaleon"></div>
            <div className="image tortuga"></div>
            <div className="image iguana"></div>
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
            <div className="image sapo"></div>
            <div className="image salamandra"></div>
            <div className="image anfibio1"></div>
            <div className="image anfibio2"></div>
            <div className="image anfibio3"></div>
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
            <div className="image aguila"></div>
            <div className="image pato"></div>
            <div className="image ave"></div>
            <div className="image flamengo"></div>
            <div className="image paloma"></div>
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
