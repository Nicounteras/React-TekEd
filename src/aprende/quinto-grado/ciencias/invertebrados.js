import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../mate/nav"
import Rail from "./rail"

function invertebradosQuinto() {
  return (
    <>
    <Nav/>
    <Rail/>
    <div className="theScience">
             <h2>Animales Invertebrados</h2>
             <span class="subScience">¿Qué son los animales invertebrados? aprende acerca de ellos en éste artículo</span>
             <div class="blogText">
             <div class="puntosClave">
                <h5 class="blogH">Puntos clave:</h5>
                <li>Los invertebrados son todos aquellos animales que no poseen una columna vertebral.</li>
                <li>Su cuerpo no posee huesos, por lo que poseen exoesqueletos (un tejido protector), cáscaras o caparazones.</li>
                <li>El 95% de las especies registradas pertenecen a los invertebrados.</li>
                <li>Existen múltiples tipos de grupos.</li>
              </div>
              <h5 class="blogH">Definición general</h5>
             Los animales invertebrados son todos aquellos animales que no poseen una columna vertebral. Estos animales a diferencia de los vertebrados, experimentan la metamorfosis, proceso por el cual cambian de forma o/y color durante su desarrollo. Los invertebrados por lo general son de tamaños pequeños (a excepción de los pulpos o calamares gigantes).
             <h5 class="blogS">Artrópododos</h5>
             Son los únicos invertebrados que poseen patas. Entre ésta diversa lista encontramos cuatro principales grupos: los que tienen un caparazón duro (llamados crustáceos), los de 6 patas (insectos), los de 8 patas (arácnidos) y los de múltiples patas (miriápodos).
             <p class="ejemplosDe">Ejemplos de artrópodos:</p>
             <div class="liEjemplos">
                 <li>Los mosquitos</li>
                 <li>Los cangrejos</li>
                 <li>Los cienpíes</li>
                 <li>Los langostinos</li>
                 <li>Las hormigas</li>
             </div>
              <div class="image5Div">
             <div className="image mosquito"></div>
             <div className="image cangrejo"></div>
             <div className="image cienpies"></div>
             <div className="image langostino"></div>
             <div className="image hormiga"></div>
           </div>
           <h5 class="blogS">Equinodermos</h5>
             Estos se destacan por su dureza corporal. Además viven en el agua (principalmente en los oceanos). Su dureza corporal se debe a su esqueleto interno formado por osículos calcáreos (pequeños huesos con bastante calcio).
             <p class="ejemplosDe">Ejemplos de equinodermos:</p>
             <div class="liEjemplos">
                 <li>Las estrellas de mar</li>
                 <li>Los erizos de mar</li>
                 <li>El lirio de mar</li>
                 <li>La lengua de flamengo</li>
                 <li>La ofiura</li>
             </div> 
              <div class="image2Div">
              <div className="image estrella"></div>
              <div className="image erizo"></div>
             </div>
             <h5 class="blogS">Moluscos</h5>
             Tienen un cuerpo blando y un manto muy delgado que protege su piel. Algunos tienen un caparazón (gasterópodos) como los caracoles, otros dos (bivalvos) como las conchas de mar y otros no tienen caparazón (cefalópodos) como los pulpos.
             <p class="ejemplosDe">Ejemplos de moluscos:</p>
             <div class="liEjemplos">
                 <li>Los caracoles</li>
                 <li>Los calamares</li>
                 <li>Las almejas</li>
                 <li>Los mejillones</li>
                 <li>Los choros</li>
             </div>
              <div class="image5Div">
             <div className="image caracol"></div>
             <div className="image calamar"></div>
             <div className="image almeja"></div>
             <div className="image molleja"></div>
             <div className="image choro"></div>
           </div>
           <h5 class="blogS">Portíferos</h5>
             Disponen de un esqueleto interior compuesto por estículas. También son conocidos como esponjas debido a que su cuerpo está lleno de poros por los que circula agua. Estos no tienen tejidos ni órganos diferenciados.
             <p class="ejemplosDe">Ejemplos de portíferos:</p>
             <div class="liEjemplos">
               <li>Esponjas calcáreas</li>
               <li>Esponjas corneas</li>
               <li>Esponjas silicias</li>
             </div>
           <div class="image3Div">
             <div className="image esponja"></div>
             <div className="image esponja1"></div>
             <div className="image esponja2"></div>
           </div>
           <h5 class="blogS">Cnidarios</h5>
             Estos se caracterizan principalmente por tener células urticantes (similares a las de la planta "ortiga"). Viven exclusivamente en el agua (mayormente en territorio marino). Su composición es muy simple, ya que solo tienen órganos en los sentidos y celúlas nerviosas.
             <p class="ejemplosDe">Ejemplos de cnidarios:</p>
             <div class="liEjemplos">
               <li>Las Medusas</li>
               <li>Las Anémonas</li>
               <li>Las Malaguas</li>
               <li>Laa Anthozoas</li>
               <li>Los corales</li>
             </div> 
        <div class="image5Div">
             <div className="image medusa"></div>
             <div className="image anemona"></div>
             <div className="image malagua"></div>
             <div className="image coral2"></div>
             <div className="image coral"></div>
           </div>
        <hr/>
        <div class="autor">
          <span class="by">Escrito por:</span> <span class="nameOf">Nicolás Contreras</span> <span class="dateOf">(29/05/2020)</span>
        </div>
        </div>
        </div>
    </>
  )
} 

export default invertebradosQuinto
