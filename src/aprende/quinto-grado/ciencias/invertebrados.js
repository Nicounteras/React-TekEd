import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import mosquito from "./../../../images/ciencias5to/mosquito.jpg"
import cangrejo from "./../../../images/ciencias5to/cangrejo.jpg"
import cienpies from "./../../../images/ciencias5to/cienpies.jpg"
import langostino from "./../../../images/ciencias5to/langostino.jpg"
import hormiga from "./../../../images/ciencias5to/hormiga.jpg"
import estrella from "./../../../images/ciencias5to/estrella.jpg"
import erizo from "./../../../images/ciencias5to/erizo.jpg"
import caracol from "./../../../images/ciencias5to/caracol.jpg"
import calamar from "./../../../images/ciencias5to/calamar.jpg"
import almeja from "./../../../images/ciencias5to/almeja.jpg"
import mejillones from "./../../../images/ciencias5to/mollejas.jpg"
import choro from "./../../../images/ciencias5to/choro.jpg"
import es1 from "./../../../images/ciencias5to/esponja.jpg"
import es2 from "./../../../images/ciencias5to/esponja2.jpg"
import es3 from "./../../../images/ciencias5to/esponja3.jpg"
import medusa from "./../../../images/ciencias5to/medusa.jpg"
import anemo from "./../../../images/ciencias5to/anemona.jpg"
import malagua from "./../../../images/ciencias5to/malagua.jpg"
import coral1 from "./../../../images/ciencias5to/coral2.jpg"
import coral2 from "./../../../images/ciencias5to/coral.jpg"

function invertebradosQuinto() {
  return (
    <>
    <Nav/>
    <div className="buttonDivTo">
    <Link to="/ejercicios/quinto-grado/ciencias/animales-invertebrados" className="goToOtherArticle cool-link">
    Practicar
</Link>
</div>
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
              <img src={mosquito} className="image" alt="Mosquito"/>
              <img src={cangrejo} className="image" alt="Cangrejo"/>
              <img src={cienpies} className="image" alt="Cienpies"/>
              <img src={langostino} className="image" alt="Langostino"/>
              <img src={hormiga} className="image" alt="Hormiga"/>
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
              <img src={erizo} className="image" alt="Erizo"/>
              <img src={estrella} className="image" alt="Estrella"/>
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
              <img src={caracol} className="image" alt="Caracol"/>
              <img src={calamar} className="image" alt="Calamar"/>
              <img src={almeja} className="image" alt="Almeja"/>
              <img src={mejillones} className="image" alt="Mejillones"/>
              <img src={choro} className="image" alt="Choro"/>
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
             <img src={es1} className="image" alt="Esponja"/>
              <img src={es2} className="image" alt="Cnidario"/>
              <img src={es3} className="image" alt="Portíferos"/>
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
             <img src={medusa} className="image" alt="Medusa"/>
              <img src={anemo} className="image" alt="Anemona"/>
              <img src={malagua} className="image" alt="Malagua"/>
              <img src={coral1} className="image" alt="Coral"/>
              <img src={coral2} className="image" alt="Cnidario"/>
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
