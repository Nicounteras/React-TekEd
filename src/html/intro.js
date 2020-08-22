import React, { Component } from 'react'
import Rail from "./rail"
import Nav from "./nav"
import { Link } from "react-router-dom"
import htmlC from "./../images/html/htmlC.jpg"
import VS from "./../images/html/vs.png"

export default function IntroHTML () {
        return (
            <>
            <Nav/>
            <Rail/>
            <div className="devCourse">
                <h1 id="htmlHead">Introducción a HTML 5</h1>
                <h4>¿Qué es HTML y cómo aprenderlo?, nuestra respuesta en este artículo.</h4>
                <img src={htmlC} className="devImageC" alt="Beneficios de html"/>
                <p>HTML es el lenguaje de hipermarcado de texto en el cual se basa toda página web. La función de HTML es definir la estructura de un sitio web. Si estás interesado en crear una página web, un blog o en empezar a programar en tecnologías más complejas, entonces HTML es para tí. </p>
                <h5>¿Qué requisitos necesitas para aprender HTML?</h5>
                <p>Para comenzar a programar en HTML no necesitas tener experiencia alguna en programación. Puedes aprenderlo sin importar tu edad, por lo que sólo necesitarás una laptop o PC. Es recomendable que mientras que estés aprendiendo estés en un lugar cómodo, en lo posible sin distracciones para que puedas concentrarte lo más que puedas y así retener eficientemente la información, debido a que si nunca has programado antes, HTML probablemente sea un mundo completamente nuevo para tí.</p>
                <h5>¿Cómo aprender HTML?</h5>
                <p>Esta pregunta tiene muchas respuestas, debido a cada persona aprende a su manera y a su ritmo. La recomendación que podemos darte es que te centres mucho en el conocimiento práctico y que inviertas tiempo en experimentar cosas que no sabes cómo funcionan o que no sabes cómo funcionarían. Al mismo tiempo, tener mucha paciencia e investigar más de lo que no conoces.</p>
                <h5>¿HTML es difícil?</h5>
                <p>Al principio podrá parecerte un poco complicado, debido a que es algo bastante nuevo para tí, no estarás familiarizado con los comandos ni con la estructura de un documento HTML. Sin embargo, con la práctica memorizarás los comandos y podrás escribir código de HTML de forma intuitiva.</p>
                <h5>¿Puedo ser un desarrollador web si sólo conozco HTML?</h5>
                <p>Sí, pero no. HTML es la estructura de toda página web. Es su esqueleto. CSS te servirá para modificar los tamaños de fuente, colores y muchas más propiedades de diseño que tienen los sitios web de hoy en día. Lenguajes de programación como JavaScript, Python, PHP o MySQL sirven para que los sitios web realizen distintas funcionalidades. Sin embargo, comenzar con HTML te puede llevar solidamente a CSS y luego a el lenguaje de programación que escojas. Pero no hay que preocuparnos por eso ahora, debido a que ahora nuestro enfoque es HTML.</p>
                <h5>¿De qué tratará éste tutorial?</h5>
                <p>Este tutorial cubrirá todos los conceptos básicos de HTML. Te recomendamos copiar lo que dice el tutorial en tu editor de código para que así adquieras conocimiento práctico. Sin más que decir, ¡vamos a instalar HTML!.</p>
                <Link to="/desarrollo-web/cursos/html/instalacion" className="theDevLink linkHTML goLINK">Instalación de HTML 5</Link>
            </div>
            </>
        )
}
