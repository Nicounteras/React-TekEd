import React, { useState } from 'react'
import Nav from "./../../devNav"
import Foot from "./../../foot"
import { Link } from "react-router-dom"
import dev from "./../../images/deving.jpg"
import devLap from "./../../images/devLaptop.jpg"
import salary from "./../../images/salary.png"
import entre from "./../../images/entrepreneur.jpg"

export default function whyCode (){
 return(
    <>
    <Nav/>
    <div className="doodle">
      <div className="blogLayout">
        <h1>¿Cuáles son los beneficios de aprender a programar?</h1>
        <h5>Escrito por un desarrollador web</h5>
        <img alt="Aprender a programar" className="devImageC" src={dev}/>
        <p>La programación actualmente está teniendo un impacto muy fuerte en nuestras vidas. Nuestras laptops, celulares y aplicaciones existen gracias a los programadores. Esto de verdad puede inspirarte a empezar a programar. Pero... ¿cuáles son los beneficios de aprender a programar? En este artículo vamos a recalcar 5 aspectos positivos de aprender a programar.</p>
        <h4>1. Puedes crear</h4>
        <p>Así como lo leíste. Puedes crear una App, un blog para escribir acerca de tus comidas favoritas, una red social, crear un hardware para tu computadora, un nuevo videojuego o hasta un emprendimiento a base de la tecnología. La programación se basa en darle ordenes a un sistema computacional y explicarle lo que quieres que haga por tí para que te el resultado que esperas. A base de tu imaginación y creatividad, crear algo que te apasione y te guste.</p>
        <img alt="Aprender a programar" className="devImageC" src={devLap}/>
        <h4>2. Te enseña a resolver problemas de forma práctica</h4>
        <p>Cuando empiezas a programar, ya sea en el lenguaje que escogas, tienes que aprender a solucionar problemas de lógica (los problemas se te presentarán según lo que estés programando, puede ser desde una estrucutura de código hasta un algoritmo complejo). La resolución de estos problemas de lógica te ayudan muchísimo a mejorar tu pensamiento crítico y creatividad.</p>
      <h4>3. Mejora tu memoria</h4>
      <p>De este tema no se habla mucho en los medios. Cuando aprendes un lenguaje de programación y lo practicas, te ves obligado a memorizar los comandos por los cuales quieres guiar a tu sistema computacional. En mi experiencia personal, programar me ayudo mucho a mejorar mi memoria y concentración. Este beneficio puede ayudarte para cualquier aspecto de la vida cotidiana.</p>
      <h4>4. Las oportunidades de empleo</h4>
      <p>Este es el promedio de los salarios anuales de desarrolladores de aplicaciones en Estados Unidos del año 2018.</p>
      <img alt="Aprender a programar" className="salaries" src={salary}/>
      <p>Los salarios de un programador en general son bastante altos. Además, los ambientes de trabajo en compañías de alto rendimiento son estupendos. Buscar trabajo como programador te puede llevar a crear proyectos de grandes o medianas empresas por un muy buen pago y un ambiente asombroso.</p>
      <h4>5. Puedes iniciar un emprendimiento</h4>
      <p>A base de propia tecnología puedes iniciar un emprendimiento. Ya sea una tienda online, venta de computadoras, una red social, un blog, una empresa de ciberserguridad y la lista sigue. No es necesario aprender a programar para que inicies uno de estos negocios, sin embargo, es recomendable que entiendas por lo menos algo de cómo funciona el desarrollo del producto o servicio que lanzarás al mercado.</p>
      <img alt="Aprender a programar" className="devImageC" src={entre}/>
     <h4>Conclusiones</h4>
     <p>Bueno, espero que te haya servido este artículo. Aprender a programar puede ser bastante difícil y puede que no sepas dónde empezar, no obstante, quizas te apasione y mediante ello puedas mejorar la vida de muchas personas con el código que escribas. Si quieres aprender a crear páginas web, un blog o una red social, una buena opción para empezar es HTML 5, ya que es el lenguaje que define la estructura de la web. No necesitas experiencia programando en lo absoluto para poder comenzar a aprender. Si estás interesado, puedes tomar nuestro curso gratuíto de HTML 5 <Link className="blueNewLink" to="/programacion/desarrollo-web/cursos/html/introduccion">dando click aquí</Link>.</p>
      </div>
    </div>
   
  <Foot/>
   </>
 )
}