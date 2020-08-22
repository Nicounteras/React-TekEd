import React, { Component } from 'react'
import Rail from "./rail"
import Nav from "./nav"
import { Link } from "react-router-dom"
import install from "./../images/html/instal.jpg"
import VS from "./../images/html/vs.png"
import New from "./../images/html/new.png"
import html5 from "./../images/html/html5.png"
import init from "./../images/html/init.png"

export default function InstaHTML () {
        return (
            <>
            <Nav/>
            <Rail/>
            <div className="devCourse">
                <h1 id="htmlHead">Instalación de HTML 5</h1>
                <h4>¿Cómo instalar HTML?, apréndelo en este artículo.</h4>
                <img src={install} className="devImageC" alt="Tutorial de html"/>
               <p>Para poder empezar a programar en HTML 5, necesitamos un editor de código. Este editor de código podrá servirte para programar en CSS y en un futuro en casi cualquier lenguaje que escojas. Dos editores de código que son muy recomendables y de uso gratuito son <a href="https://code.visualstudio.com/" target="blank" className="htmlNewLink">Visual Studio Code</a> y <a href="https://atom.io/" target="blank" className="htmlNewLink">Atom</a>. En este tutorial, usaremos Visual Studio Code.</p>
                <h5>Instalando Visual Studio Code</h5>
                <p>Para instalar Visual Studio Code, ve a <a href="https://code.visualstudio.com/" className="htmlNewLink" target="blank">www.code.visualstudio.com</a>.</p>
                <img src={VS} className="devImageC" alt="Instalar Visual Studio Code"/>
                <p>Una vez en la página, elige tu sistema operativo. Te darán a elegir entre Windows, Mac o Linux. Elige tu sistema operativo y dale click a "instalar". Luego, acepta todos los procedimientos que te pidan. En unos minutos, tendrás VS Code en tu laptop o PC.</p>
                <h5>Comenzando con el tutorial</h5>
                <p>Para empezar con tu primera página web en HTML, crea un nuevo folder. A éste folder puedes ponerle el nombre que gustes (este nombre debe ser de solamente una palabra). Entra a tu editor de código y selecciona la carpeta nueva que has creado. Una vez tengas el folder abierto, dale click al botón "New file" (el que está justo a la derecha de donde dice el título de tu folder). Llama a ese file "index.html".</p>
                <img src={New} className="devImageC" alt="Index.html"/>
                <p>La razón por la cual llamamos a este archivo <span className="htmlNewLink">index.html</span> es porque cuando subas una página de HTML a internet, lo primero que leerá el servidor será el archivo index.html, por ello tu página inicial o homepage, debe llamarse <span className="htmlNewLink">index.html</span>.</p>
                <p>Finalmente, en el editor de código escribe "html:5" y presiona enter. Este es el resultado que debe darte.</p>
                <img src={html5} className="devImageC" alt="Html 5"/>
                <p>Para abrir el documento HTML en tu navegador de internet, solo tienes que ir a la carpeta donde está el archivo y darle doble click al <span className="htmlNewLink">index.html</span>. El resultado sería una página web en blanco que tenga como título "Document".</p>
                <img src={init} className="devImageC" alt="Documento HTML en blanco"/>
                <p>Si llegaste hasta aquí sin tener ningún error, puedes continuar el tutorial con la  <Link to="/desarrollo-web/curso-html/composicion" className="htmlNewLink">Composición de HTML</Link>.</p>
                <p>Si tienes alguna duda o algo no te salió como esperabas, escríbenos un correo a <span className="htmlNewLink">teked.fun@gmail.com</span>. ¡Te responderemos con gusto!</p>
                <div id="twoButtonDev">
                <Link to="/desarrollo-web/cursos/html/introduccion" className="theDevLink devBTN">&lArr; Introducción</Link>
                <div className="flexing"/>
                <Link to="/desarrollo-web/cursos/html/composicion" className="theDevLink devBTN">Composición &rArr;</Link>
                </div>
            </div>
            </>
        )
}