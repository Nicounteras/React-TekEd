import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import prod from "./../../../images/ciencias5to/productores.jpg"
import giraffe from "./../../../images/ciencias5to/giraffe.jpg"
import lion from "./../../../images/ciencias5to/leon.jpg"
import hongo from "./../../../images/ciencias5to/decomposers.jpg"

function cadenaAlimenticiaQuinto() {
  return (
    <>
    <Nav/>
    <div className="buttonDivTo">
    <Link to="/ejercicios/quinto-grado/ciencias/cadena-alimenticia" className="goToOtherArticle cool-link">
  Practicar 
</Link>
</div>
    <Rail/>
    <div class="theScience">
    <h2>Cadena alimenticia</h2>
            <span class="subScience">¿Qué es la cadena alimenticia? conoce sus principios en éste blog</span>
            <div class="blogText">
                <div class="puntosClave">
                    <h5 class="blogH">Definición:</h5>
                    <p className="unP">
                        La cadena alimenticia o cadena trófica son una expresión gráfica acerca del paso de energía entre productores, consumidores y descomponedores. En esta se ve como se pasa de productor, consumidores y por último su descomposición.
                    </p>
                </div>
             <h5 class="blogS">Nivel trófico</h5>
             Son los niveles que se pueden ver en una cadena alimenticia. Esto se ubican en una pirámide, mientras más cerca están a la punta, menos energía obtienen. Además que en la base se encuentran los productores, mientras que cuanto mas se suben viene los consumidores en orden ascendente; empezando con los consumidores primarios .
             <h5 class="blogV">Productores</h5>
             Los productores son aquellos seres vivos que pueden crear su propia comida. En otras palabras, son aquellas que no consumen nada vivo para sobrevivir. En este grupo se encuentran mayormente plantas, aunque hay también algas y bacterias bastante específicas. Estos crean su comida a partir de agua, luz solar y otros componentes como pueden ser el hierro, fósforo y nitrógeno. Estos tienen todo el porcentaje de energía debido a que ellos la producen.
             <img src={prod} className="centralImage margin20-0" alt="Los productores de la cadena alimenticia"/>
             <h5 class="blogV">Consumidores</h5>
             Los consumidores son aquellos que, como su nombre lo dice, consumen otro ser vivo. Ellos pueden consumir tanto  productores como consumidores. La mayoría de estos consumidores son animales, pero también pueden ser bacterias o algunos tipos de plantas. Ellos solo obtienen un porcentaje del 10% a menos. Esto debido a que parte de la energía se queda en el productor ya muerto.
Se pueden dividir entre
Consumidor primario: Este es el que consume el productor. Obtiene aproximadamente 10% de la energía del productor
Consumidor secundario, terciario, etc: Este consume a otros consumidores de menor nivel. Mientras más alto sea el número del consumidor, más cantidad de organismo tendrá que consumir. Esto debido a que obtiene como máximo el 1% de la energía total creada por el productor.  
<div class="image2Div">
    <img src={giraffe} className="image" alt="Jirafa"/>
           <img src={lion} className="image" alt="León comiendo"/>
</div>
<h5 class="blogV">Descomponedores</h5>
Los descomponedores descomponen cualquier ser vivo dentro de la cadena alimenticia. Ellos absorben las últimas cantidades de energía que se quedaron en ellos. Además de acelerar el proceso natural de la descomposición. Esto son únicamente hongos. A diferencia de los detritívoros, ellos absorben directamente por reacciones químicas. Estos no pertenecen a un nivel necesario. Se encuentran en todos los niveles debido a que descomponen cualquier ser vivo.
<img src={hongo} className="centralImage margin20-0" alt="Descomponedor cadena alimenticia"/>
       <hr/>
       <div class="autor margin20">
         <span class="by">Escrito por:</span> <span class="nameOf">Vincenzo Ybazeta</span> <span class="dateOf">(29/05/2020)</span>
       </div>
      </div>
      </div>
      </>
  )
} 

export default cadenaAlimenticiaQuinto
