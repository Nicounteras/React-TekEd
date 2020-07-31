import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../mate/nav"
import Rail from "./rail"

function egiptoQuinto() {
  return (
    <>
    <Nav/>
    <Rail/>
    <div class="theScience">
    <h2>Egipto 🇪🇬</h2>
                <span class="subScience">¡Aprende datos generales e importantes acerca de Egipto en éste artículo!</span>
                <div class="blogText">
                  <div class="puntosClave">
                    <h5 class="blogS">Puntos clave:</h5>
                    <li>Egipto es un país africano que actúa como una conexión entre África y Oriente Medio.</li>
                    <li>Es un país con un clima principalmente seco y desértico.</li>
                    <li>El río Nilo es de gran importancia para Egipto, ya que actúa como fuente de riego, energía y transporte.</li>
                    <li>Egipto está gobernado por un gobierno republicano</li>
                  </div>
                  <div className="centralImage margin20-0 pyra"></div>
                  <h5 class="blogS">Ubicación</h5>
                 <div class="liPuntos">
                  <p>Egipto se encuentra en la esquina noreste del continente africano, y es la conexión entre el norte de África y el Medio Oriente. Limita con el mar Mediterráneo, con Palestina e Israel al noreste, el Golfo de Aqaba y el Mar Rojo al este, Sudán al sur y Libia al oeste.</p>
                 </div>
                 <h5 class="blogS" >Clima</h5>
                 <div class="liPuntos">
                  <p>Egipto tiene un clima cálido y seco, y la mayor parte de su tierra consiste en tierras desérticas. Los desiertos del país pueden pasar de temperaturas extremadamente altas a bajas en el transcurso de un día. El verano en Egipto es generalmente extremadamente caluroso y seco, alcanzando hasta 49 ° C. A lo largo de la costa norte del país, sin embargo, el clima es fresco, ventoso y húmedo con lluvias ocasionales durante el invierno.</p>
                 </div>
                 <div className="centralImage margin20-0 piramide"></div>
                 <h5 class="blogS">Importancia del río Nilo</h5>
        <p>El río Nilo fluye más de 6600 kilómetros y es el segundo río más largo del mundo. Durante miles de años, ha proporcionado a los egipcios una fuente de tierras fértiles y riego, en contraste con el territorio seco del país. Hasta ahora, el Nilo es una importante fuente de riego, energía y transporte.

            El río Nilo era de vital importancia para el desarrollo del antiguo Egipto. Su agua es rica en nutrientes al igual que su ribera debido a sus grandes depósitos de limo. Debido a esto, la mayoría de los alimentos de Egipto se cultivan en la región del delta del Nilo. Los antiguos egipcios desarrollaron métodos de riego para aprovechar las ventajas que ofrecía el río, cultivando recursos como trigo, algodón y frijoles para mantener a su población.</p>
            <div className="centralImage margin20-0 rio"></div>
            <h5 class="blogS">Sistema social y político</h5>
                   <p>El idioma oficial de Egipto es el árabe, y tiene el Islam y el cristianismo como sus principales religiones.</p>
                   <p>
                    Está gobernado por un gobierno republicano, lo que significa que su autoridad política proviene de su pueblo, que elige a un presidente como su representante. Su actual presidente es el jefe del ejército Abdel Fattah al-Sisi, quien fue nombrado en mayo de 2014 después del golpe de estado para abolir al ex presidente Mohamed Morsi.</p>
                    <div class="autor margin20-0">
                        <span class="by">Escrito por:</span> <span class="nameOf">Flavia Ballesteros</span> <span class="dateOf">(21/06/2020)</span>
                      </div>   
            </div>
          </div>
      </>
  )
} 

export default egiptoQuinto
