import React, { Component } from 'react'
import Rail from "./rail"
import Nav from "./nav"
import { Link } from "react-router-dom"
import html5 from "./../images/html/html5.png"
import patatas from "./../images/html/patatas.png"
import patInit from "./../images/html/patInit.png"
import You from "./../images/html/youT.png"
import Face from "./../images/html/face.png"
import finalW from "./../images/html/final.png"

export default function CompoHTML () {
        return (
            <>
            <Nav/>
            <Rail/>
            <div className="devCourse">
            <h1 id="htmlHead">Composición de HTML</h1>
                <h4>¿Cómo empiezo a escribir en HTML?, apréndelo en este artículo.</h4>
                <img src={html5} className="devImageC" alt="Estructura del código HTML"/>
                <p>La composición de HTML es bastante ordenada. Al principio tendrás que memorizar los códigos y esto puede ser un poco difícil, pero con la práctica y la perseverancia se te hará mucho más fácil.</p>
                <p>Tras escribir html:5 y presionar "enter" en el editor de código este fue nuestro resultado, un documento HTML estándar sin ningún contenido. En este artículo vamos a analizar de qué se trata la composición de HTML 5</p>
                <p>Cabe recalcar, que todas las etiquetas de HTML tienen un inicio y un fin (por ejemplo, en la imagen de arriba, la etiqueta "body", que empieza en la línea 8 y termina en la línea 10). El inicio tiene al nombre de la etiqueta entre un signo de menor y un signo de mayor, mientras que el final de la etiqueta vemos lo mismo, sólo que con un <span className="htmlNewLink">/</span> antes del nombre de la etiqueta. Visual Studio Code ha desarrollado una función que consiste en que cuando colocas simplemente el nombre de la etiqueta puedas presionar <span className="htmlNewLink">enter</span> y autocompletar la etiqueta.</p>
                <h5>La etiqueta html</h5>
                <p>En las líneas 2 y 11 de la imágen de arriba podemos ver que dice "html". Todo código que escribas debe de estar dentro de estas dos componentes. Sabiendo esto, nos vamos a concentrar en las dos partes principales de un documento HTML, el <span className="htmlNewLink">head</span> y el <span className="htmlNewLink">body</span>.</p>
                <h5>La etiqueta head</h5>
                <p>Esta sección de nuestro documento HTML está incluidos todos los meta-tags, el título del documento y opcionalmente, algunos links para añadir estilos de css o elementos importados (esto lo veremos más adelante, por ahora concentremonos en los meta-tags y el título). La etiqueta <span className="htmlNewLink">title</span> es la que define el título de nuestro documento HTML. Por ejemplo, si esta es <span className="htmlNewLink">Patatas fritas</span>, entonces nuestro documento se va a llamar Patatas fritas.</p>
                <img src={patatas} className="devImageC" alt="Cambiar el titulo de un documento HTML"/>
                <p>Cambiamos el <span className="htmlNewLink">title</span> de nuestro documento, este sería nuestro resultado:</p>
                <img src={patInit} className="devImageC" alt="Cambiar el titulo de un documento HTML"/>
                <p>Como podemos ver en la última imagen, el título de nuestro documento cambió. En una página web de verdad, puedes cambiar el título estratégicamente para que las personas puedan encontrar tu página en Google. Este es el ejemplo de la etiqueta <span className="htmlNewLink">title</span> que usa YouTube que se encuentra de color morado:</p>
                <img src={You} className="devImageC" alt="Etiqueta title en HTML"/>
                <h5>La etiqueta body</h5>
                <p>Dentro de la etiqueta body irá todo el contenido visible de la página web, ya sean estos textos, imagenes, hipervínculos, etc.</p>
                <p>Por ejemplo, dentro de la etiqueta <span className="htmlNewLink">body</span> de la página de registro de Facebook está escrito todo el contenido visual que vemos en la página.</p>
                <img src={Face} className="devImageC" alt="Etiqueta body en HTML"/>
                <p>Todo éste contenido que podemos visualizar, está dentro de la etiqueta <span className="htmlNewLink">body</span>.</p>
                <h5>Comenzemos a crear tu primera página web</h5>
                <p>Sabiendo todo esto, ya podemos comenzar a codificar tu primera página web en HTML. Este tutorial te enseñará todas las bases de HTML para que junto con CSS, puedas crear páginas web a con tu propio estilo. Este tutorial comenzará enseñandote los principales meta-tags de HTML.</p>
                <img src={finalW} className="devImageC" alt="Crear una página web en HTML"/>
                <p>Así quedará la página que vamos a construir en éste tutorial.</p>
                <div id="twoButtonDev">
                <Link to="/programacion/desarrollo-web/cursos/html/instalacion" className="theDevLink devBTN">&lArr; Instalación</Link>
                <div className="flexing"/>
                <Link to="/programacion/desarrollo-web/cursos/html/meta-tags" className="theDevLink devBTN">Meta Tags &rArr;</Link>
                </div>
            </div>
            </>
        )
}