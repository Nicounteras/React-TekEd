import React, { useState } from 'react'
import Nav from "./../../devNav"
import Foot from "./../../foot"
import { Link } from "react-router-dom"
import dev from "./../../images/deving.jpg"
import devLap from "./../../images/john.jpg"
import salary from "./../../images/salary.png"
import entre from "./../../images/entrepreneur.jpg"

export default function cs (){
 return(
    <>
    <Nav/>
    <div className="doodle">
      <div className="blogLayout">
        <h1>¿Qué es la ciencia de la computación?</h1>
        <h5>Aprende de una de las carreras con más demanda en el mercado</h5>
        <img alt="Aprender a programar" className="devImageC" src={devLap}/>
        <p>Si bien es cierto, el mundo está cambiando cada vez más rápido y cada vez más impredeciblemente gracias al desarrollo de nuevas tecnologías. Muchas de estas tecnologías son creadas gracias a computadores. Los estudios de la ciencia de la computación nos ayudan a entender mejor cómo funcionan los sistemas computacionales que utilizamos día a día, factor por el cual desde hace muchos años, ciencias de la computación se ha convertido en un ámbito de estudio popular y una carrera universitaria.</p>
        <p className="padding20-0">En este artículo, ¡vamos a aprender acerca de las áreas de estudio de las ciencias de la computación!</p>
        <h4>1. Computación teórica</h4>
        <p className="marginB10">Los estudios teóricos de la computación nos ayudan a entender cómo funcionan los sistemas computacionales. A ésta área la podemos dividir en las siguientes categorías:</p>
        <li>Teoría de la computación &rArr; Se basa en la invención y el entendimiento de cómo los ordenadores simplifican nuestras vidas, resuelven problemas y pueden adaptarse a lo que el ser humano desea que haga.</li>
      <li>Algoritmos computacionales &rArr; Estos algoritmos nos permiten darle instrucciones específicas a los computadores acerca de qué es lo que queremos que haga por nosotros. Su estructura está muy vinculada con la matemática.</li>
      <li>Estructura de datos &rArr; La estructura de datos se basa en recopilar la información que nos da la computadora y ordenarla eficientemente para optimizar su uso.</li>
      <h4>¿Para qué sirve estudiar computación teórica?</h4>
      <p>Estudiar computación teórica te puede servirte de mucho si quieres aportar a la sociedad con la creación e innovación de los sistemas computacionales. Podrás entender cómo funciona este complejo sistema y además aplicarlo de forma práctica.</p>
      <h4>2. Ingeniería computacional</h4>
      <p>La ingeniería computacional se enfoca en crear de forma práctica cualquier sistema computacional. Es basicamente la teoría de la computación puesta en la propia práctica, tanto de hardware como de software. Las áres de estudio de la ingeniería computacional son los siguientes:</p>
      <li>Performance de las computadoras &rArr; Se basa en la optimización del funcionamiento de las computadoras, ya sea velocidad, estructura o almacenamiento.</li>
      <li>Redes comuputacionales &rArr; El área de ciencias de computación que se centra en entrelazar todos los sistemas de un ordenador para que funcionen en conjunto.</li>
      <li>Seguridad computacional &rArr; Se centra en la protección de los sistemas computacionales, incluyendo la seguridad de los softwares.</li>
      <li>Bases de datos &rArr; La alamacenación de datos que los ordenadores utilizan, tanto para hardware como para software.</li>
      <li>Interacción humano-computador &rArr; Se profundiza en la mejora del rendimiento de los computadores para facilitar las tareas humanas.</li>
      <li>Inteligencia artificial &rArr; Es la rama de ciencias de la computación que se basa en la creación de artefactos que resuelvan problemas que generalmente requieren inteligencia humana.</li>
      <h4>¿Para qué sirve la ingeniería computacional?</h4>
      <p>Los computadores de hoy en día se renuevan y optimizan constantemente. Si te apasaionan los computadores, aprender el cómo funcionan sus complejos sistemas y el cómo mejorarlos puede llevarte a reparar tu laptop, conseguir un buen trabajo en una compañía o hasta crear tu propio emprendimiento.</p>
      <h4>3. Ingeniería de software</h4>
      <p>La ingeniería de software se basa en la creación, diseño e implementación de softwares. Los tipos de software son muchos y abarcan distintas áreas, los podemos categorizar de la siguiente manera:</p>
      <li>Sistemas operativos &rArr; Windows, Mac, Linux, iOS, Android, etc.</li>
      <li>Drivers &rArr; Sirven para entrelazar el hardware con el software eficientemente.</li>
      <li>Aplicaciones &rArr; Estas aplicaciones de software están diseñadas para interactuar o crear algo en específico. Ejemplos de esto son los navegadores (Chrome, Firefox, Safari) o aplicaciones que puedes descargar en el App Store o Play Store.</li>
      <li>Plataformas web &rArr; Son los sitios web con los que interactuamos todos los días. Ejemplos de estos son YouTube y Facebook. En este mismo momento, estás en una plataforma web.</li>
      <h4>¿Porqué aprender a crear softwares?</h4>
      <p>Podrías trabajar en el desarrollo de cualquiera de las cuatro ramas que te dimos arriba. La respuesta completa la puedes ver <Link to="/desarrollo-web/blog/porque-programar">dando click aquí.</Link></p>
       </div>
    </div>
   
  <Foot/>
   </>
 )
}