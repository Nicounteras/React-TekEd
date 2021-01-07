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
                <p>Tras escribir html:5 y presionar "enter" en el editor de código este fue nuestro resultado, un documento HTML estándar sin ningún contenido. En este artículo vamos a analizar de qué se trata la composición de HTML 5.</p>
                <h5>Primero que nada, ¿cómo está escrito el lenguaje HTML?</h5>
                <p className="padding0-0-20px-0">La composición del lenguaje HTML 5 está basado en <span className="htmlNewLink">etiquetas</span>. Cada una de estas etiquetas tiene un funcionamiento y propósito diferente, sin embargo no es necesario memorizar todas, solo las más importantes. Estos son ejemplos de etiquetas HTML:</p>
                <span className="coding-example lato margin0-0-30px-0">
                &lt;html&gt;&lt;/html&gt;
                </span>
                <p className="padding10px-0-20px-0"> Dentro de la etiqueta <span className="htmlNewLink">html</span> es donde debe estar escrito todo tu código.</p>
                <span className="coding-example lato margin0-0-30px-0">
                &lt;head&gt;&lt;/head&gt;
                </span>
                <p className="padding10px-0-20px-0">Dentro de la etiqueta <span className="htmlNewLink">head</span> es donde están escritos todos los meta-tags.</p>
                <span className="coding-example lato margin0-0-30px-0">
                &lt;body&gt;&lt;/body&gt;
                </span>
                <p className="padding10px-0-0-0">Dentro de la etiqueta body es donde se encuentra todo el contenido visual de la página.</p>
                <p className="padding20px-0-0-0">Cabe recalcar, que todas las etiquetas de HTML tienen un inicio y un fin (por ejemplo, en la imagen de arriba, la etiqueta "body", que empieza en la línea 8 y termina en la línea 10). El inicio tiene al nombre de la etiqueta entre un signo de menor y un signo de mayor, mientras que el final de la etiqueta vemos lo mismo, sólo que con un <span className="htmlNewLink">/</span> antes del nombre de la etiqueta. Visual Studio Code ha desarrollado una función que consiste en que cuando colocas simplemente el nombre de la etiqueta puedas presionar <span className="htmlNewLink">enter</span> y autocompletar la etiqueta.</p>
                <h5>La etiqueta html</h5>
                <p>En las líneas 2 y 11 de la imágen de arriba podemos ver que dice "html". Todo código que escribas debe de estar dentro de estas dos componentes. Sabiendo esto, nos vamos a concentrar en las dos partes principales de un documento HTML, el <span className="htmlNewLink">head</span> y el <span className="htmlNewLink">body</span>.</p>
                <h5>La etiqueta head</h5>
                <p className="margin0-0-30px-0">Esta sección de nuestro documento HTML está incluidos todos los meta-tags, el título del documento y opcionalmente, algunos links para añadir estilos de css o elementos importados (esto lo veremos más adelante, por ahora concentremonos en los meta-tags y el título). La etiqueta <span className="htmlNewLink">title</span> es la que define el título de nuestro documento HTML. Por ejemplo, si esta dice <span className="htmlNewLink">Patatas fritas</span>, entonces el título de la ventana tendrá de nombre patatas fritas.</p>
                <div className="coding-example lato">
                &lt;DOCTYPE html&gt;
                <br/>
                &nbsp; &lt;html lang="en"&gt;
                    <br/>
                    &nbsp;&nbsp;&nbsp; &lt;head&gt;
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;meta charset="UTF-8"&gt;
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    <br/>
                   <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;title&gt;Patatas fritas&lt;/title&gt;</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;link rel="stylesheet" href="index.css"&gt;
                    <br/>
                    &nbsp;&nbsp;&nbsp;   &lt;head/&gt;
                <br/>
                &nbsp;&nbsp;&nbsp;  &lt;body&gt;
                <br/>
                <br/>
                &nbsp;&nbsp;&nbsp; &lt;/body&gt;
                <br/>
                <br/>
                &nbsp;&lt;/html&gt;
                <br/>
                </div>
                <p className="padding20px-0-0-0">Cambiamos el <span className="htmlNewLink">title</span> de nuestro documento y como resultado en la parte superior de la ventana de google donde está tu proyecto, debe decir <span className="htmlNewLink">"Patatas fritas"</span>.</p>
                <p></p>
                <p></p>
                <h5>La etiqueta body</h5>
                <p>Dentro de la etiqueta body irá todo el contenido visible de la página web, ya sean estos textos, imagenes, hipervínculos, etc.</p>
                <p>Por ejemplo, dentro de la etiqueta <span className="htmlNewLink">body</span> de la página de registro de Facebook está escrito todo el contenido visual que vemos en la página.</p>
                <img src={Face} className="devImageC" alt="Etiqueta body en HTML"/>
                <p>Todo éste contenido que podemos visualizar, está dentro de la etiqueta <span className="htmlNewLink">body</span>.</p>
                <h5>Comenzemos a crear tu primera página web</h5>
                <p>Durante este tutorial combinado con el tutorial de CSS 3, además de aprender conceptos teóricos podrás aprender a hacer una página web como la que ves aquí:</p>
                <img className="devImageC" alt="Crear una página web en HTML"/>
                <div id="twoButtonDev">
                <Link to="/programacion/desarrollo-web/cursos/html/instalacion" className="theDevLink devBTN">&lArr; Instalación</Link>
                <div className="flexing"/>
                <Link to="/programacion/desarrollo-web/cursos/html/meta-tags" className="theDevLink devBTN">Meta Tags &rArr;</Link>
                </div>
            </div>
            </>
        )
}