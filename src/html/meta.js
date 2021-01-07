import React, { Component } from 'react'
import Rail from "./rail"
import Nav from "./nav"
import html5 from "./../images/html/html5.png"
import { Link } from "react-router-dom"
import seo from "./../images/html/seo.jpg"
import meta from "./../images/html/meta.png"
import title from "./../images/html/title.png"
import You from "./../images/html/You.png"
import Title from "./../images/html/youTitle.png"
import perro from "./../images/html/perro.png"
import desc from "./../images/html/desc.png"
import descr from "./../images/html/descr.png"
import descri from "./../images/html/descri.png"

export default function MetaHTML () {
        return (
            <>
            <Nav/>
            <Rail/>
            <div className="devCourse">
            <h1 id="htmlHead">Meta tags en HTML</h1>
                <h4>¿Qué son los meta-tags?, apréndelo en este artículo.</h4>
                <img src={seo} className="devImageC" alt="Cómo mejorar el SEO en una página web"/>
                <h5>Introducción a los meta-tags</h5>
               <p>Los meta-tags (o etiquetas meta en español), son enunciados que diferencian a tu sitio web del resto. En este capítulo, aprenderemos el cómo el correcto uso de los meta-tags pueden darle identidad a nuestro sitio web y llevarnos a un puesto alto de los buscadores de google.</p>
               <h5>¿Dónde se escriben los meta-tags?</h5>
               <p>Los meta-tags se escriben en la etiqueta <span className="htmlNewLink">head</span> de nuestro documento HTML</p>
               <img src={meta} className="devImageC"/>
               <h5>Los meta-tags <span className="htmlNewLink">Default</span></h5>
               <p>Cuando escribes html:5 y presionas enter, tendrás el siguiente resultado:</p>
               <img src={html5} className="devImageC" alt="La etiqueta Head en HTML"/>
               <p>Cómo verás, ya tenemos tres meta-tags en el documento. Explicaremos las funciones de estas.</p>
               <h5>Etiqueta <span className="htmlNewLink">UTF-8</span></h5>
               <p>La etiqueta UTF-8 sirve para que todo el contenido que esté dentro de la etiqueta body tenga el lenguaje base. Es una etiqueta necesaria, ya que sin ella, no tendrías control sobre el texto que escribes.</p>
               <h5>Etiqueta <span className="htmlNewLink">viewport</span></h5>
               <p>La etiqueta viewport sirve para medir el largo y el ancho de nuestra página web. Viene por predterminado en 1.0, que vendría a ser las medidas predeterminadas.</p>
               <h5>El meta-tag <span className="htmlNewLink">Title</span></h5>
               <p>Este meta-tag sirve para ponerle un título a nuestra página web. Puedes poner el nombre que creas conveniente. Si tu sitio web tiene varias páginas, es recomendable que le brindes un título a cada una de ellas.</p>
               <p>Por ejemplo, la etiqueta <span className="htmlNewLink">title</span> de YouTube, es la siguiente:</p>
               <img src={You} className="devImagC" alt="Etiqueta title en HTML"/>
               <p>Y la podemos escribir de la siguiente manera</p>
               <img src={title} className="devImageC" alt="Etiqueta title en HTML"/>
               <p>Para ver nuestro resultado, tenemos que abrir nuestro archivo HTML. Esto lo hacemos yendo a la carpeta donde está nuestro código y dándole doble click en donde dice <span className="htmlNewLink">index.html</span>. Al abrir la página, éste debería ser nuestro título:</p>
               <img src={Title} className="devImagC" alt="Etiqueta title en HTML"/>
               <p>¿Parece simple, no?</p>
               <p>Sin embargo, en blogs es recomendable que el título de cada página contenga el foco principal de lo que ofrece. Por ejemplo, si en una página específica de tu blog estás hablando de las razas de perros, podrías ponerle un título que se centre en ello.</p>
               <p>Nuestra etiqueta <span className="htmlNewLink">title</span> se encuentra en línea con las letras azules que nos encontramos en los buscadores de Google. Un buen ejemplo de un título de una sección de blog es este:</p>
               <img src={perro} className="devImagC" alt="Etiqueta title en HTML"/>
               <p>¿Porqué es un buen título?</p>
               <p>Porque es llamativo y muestra lo que la página ofrece de una forma bastante contundente. Centrando el título de la página a lo que esta en realidad ofrece, podrás captar la atención del público y así conseguir más visitas.</p>
               <h5>¿Qué contiene un buen título?</h5>
               <p>La respuesta es: Depende de lo que ofrezca esa sección del sitio web. Para la página inicial de tu sitio web probablemente tengas que usar la estrategia de YouTube (que es usar el nombre del sitio y listo) o quiza tengas que ser un poco más específico y proponer un título que llamativo (al igual que en la última imagen).</p>
               <p>Puedes buscar más ejemplos de buenas etiquetas <span className="htmlNewLink">title</span> googleando acerca de algún tema en específico, como aves exóticas o recetas de postres.</p>
               <h5><span className="htmlNewLink">Más etiquetas</span></h5>
               <p>Aprendamos más meta-tags que son importantes para las páginas web.</p>
               <h5>La etiqueta <span className="htmlNewLink">Description</span></h5>
               <p>La etiqueta <span className="htmlNewLink">description</span> es la que como su nombre dice en inglés, le da la descripción a nuestra página HTML. Cuando buscamos por un sitio web en google, el contenido de la etiqueta <span className="htmlNewLink">description</span> se ubica justo debajo del título.</p>
               <img src={desc} className="devImagC" alt="Etiqueta description en HTML"/>
               <p>Podemos colocar una descripción de nuestra página web de la siguiente manera:</p>
               <img src={descr} className="devImageC" alt="Etiqueta description en HTML"/>
               <h5>¿Para qué sirve una buena descripción?</h5>
               <p>Al igual que la etiqueta title, la etiqueta description sirve para mejorar nuestro posicionamiento en los buscadores de google y dar una mejor impresión a aquella persona que encuentra nuestra página web en Google.</p>
               <h5>¿Qué contiene una buena descripción?</h5>
               <p>Tiene que ser llamativa y honesta con lo que ofrece la página web. Algo que capte a los usuarios que estén navegando por Google. Analicemos este ejemplo:</p>
               <img src={descri} className="devImagC" alt="Etiqueta description en HTML"/>
                <p>Primero que nada, da una bienvenida a los usuarios de Google basándose en lo que </p>
                <div id="twoButtonDev">
                <Link to="/programacion/desarrollo-web/cursos/html/composicion" className="theDevLink devBTN">&lArr; Composición</Link>
                <div className="flexing"/>
                <Link to="/programacion/desarrollo-web/cursos/html/textos" className="theDevLink devBTN">Textos &rArr;</Link>
                </div>
            </div>
            </>
        )
}