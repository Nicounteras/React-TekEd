import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function geoPeruanaQuinto() {
  return (
    <>
    <Nav/>
    <div className="buttonDivTo">
    <Link to="/ejercicios/quinto-grado/personal-social/geografia-peruana" className="goToOtherArticle cool-link">
    Practicar
</Link>
</div>
    <Rail/>
    <div class="theScience">
    <h2>Geografía del Perú</h2>
            <span class="subScience">Información actualizada de la geografía del Perú</span>
           <div class="blogText">
            <div class="puntosClave">
                <h5 class="blogS">Puntos clave para guiarnos:</h5>
                <li>Regiones del Perú</li>
                <li>Extensión del Perú</li>
                <li>Fronteras del Perú</li>
              </div>
              <h5 class="blogS">Ubicación del Perú y la corriente de Humboldt</h5>
              <p>Perú se ubica en América del sur, entre la línea ecuatorial y el trópico de capricornio. Además de esta, posee la corriente de Humboldt, la cual produce que el agua de su mar sea fría. Perú posee una extensión de 1,285 millones km² y un mar de 200 millas marinas. Perú se divide principalmente en tres regiones:
            </p>
            <div className="centralImage margin20-0 costaverde"></div>
            <h5 class="blogS" >La costa peruana</h5>
            <p>La costa es la franja más cercana al mar. Esta suele tener un clima templado, con 2 estaciones muy marcadas Verano e Invierno. En la costa se pueden ver áreas desérticas tanto como valles fértiles por la desembocadura de los ríos al mar.</p>
            <h5 class="blogS" >La sierra peruana</h5>
            <p>Después de la costa llega la sierra, la cual es marcada por el comienzo de regiones montañosas. En esta se ubica el trozo de la Cordillera de los Andes en Perú. Esta zona montañosa es rica en metales. En la sierra se diferencia la temporada de Lluvias o Invierno del Verano o temporada seca.</p>    
            <h5 class="blogS" >La selva peruana</h5>
            <p>Por último se encuentra la selva. En esta se encuentra la parte del amazonas que esta en Peru. Esta es muy conocida por su cantidad de vegetación y fauna que posee. Además de esta, es muy conocida por su río principal, el “río Amazonas”. Esta tiene dos temporada muy marcadas, los meses de abundante lluvias (noviembre a marzo) y los meses de poca lluvia (abril a octubre).</p>
            <div class="image3Div">
            <div className="image costa"></div>
               <div className="image sierra"></div>
               <div className="image selva"></div>
             </div>
            <h5 class="blogS">Fronteras del Perú</h5>
            <p>Perú posee frontera con 5 países. Todas estas fronteras están establecidas mediante tratados y poseen aproximadamente 10 153 kilómetros de perímetro.</p>
            <h5 class="blogS">Frontera con Ecuador</h5>
            <p>Esta frontera abarca las tres regiones peruanas. Esta se ubica desde río Capones hasta el río Güepí. Esta posee una extensión de 1 528,54 Km.</p>
            <div className="centralImage margin20-0 ecuador"></div>
            <h5 class="blogS">Frontera con Colombia</h5>
            <p>La frontera se ubica entre río Güepí hasta la confluencia del río Yavarí con el río Amazonas. Esta posee una extensión de 1 506,06 Km. Su creación se remonta al "Tratado Salomón-Lozano" firmado en 1922.</p>
            <div className="centralImage margin20-0 colombia"></div>
            <h5 class="blogS">Frontera con Brasil</h5>
            <p>La frontera se ubica entre el río Yavarí hasta la boca del río Yaverija. Este se extiende 2,822.49 Kms aproximadamente.</p>
            <div className="centralImage margin20-0 brasil"></div>
            <h5 class="blogS">Frontera con Chile</h5>
            <p>Esta se ubica entre la meseta de Ancomarca hasta el punto denominado Concordia en la orilla de playa  en el Océano Pacífico. Esta tiene una extensión de 169 Km.</p>
            <div className="centralImage margin20-0 chile"></div>
            <h5 class="blogS">Frontera con Bolivia</h5>
            <p>La frontera se ubica entre el río Yaravija hasta la meseta de Ancomarca. Esta posee una extensión de 1 047,16 Km.</p>
            <div className="centralImage margin20-0 bolivia"></div>
             <div class="autor">
              <span class="by">Escrito por:</span> <span class="nameOf">Vincenzo Ybazeta</span> <span class="dateOf">(20/06/2020)</span>
            </div>
            </div>
          </div>
      </>
  )
} 

export default geoPeruanaQuinto
