import React, { useState } from 'react'
import Nav from "./shopNav"
import Foot from "./foot"
import { Link } from "react-router-dom"
import lit from "./images/storeLanding/literature.jpg"
import math from "./images/storeLanding/math.jpg"
import science from "./images/storeLanding/science.jpg"
import history from "./images/storeLanding/history.jpg"
import geo from "./images/storeLanding/geo.jpg"
import music from "./images/storeLanding/music.jpg"
import apple from "./images/storeLanding/laptops/apple.jpg"
import dell from "./images/storeLanding/laptops/dell.jpg"
import lenovo from "./images/storeLanding/laptops/lenovo.jpg"
import asus from "./images/storeLanding/laptops/asus.jpg"
import hp from "./images/storeLanding/laptops/hp.jpg"
import acer from "./images/storeLanding/laptops/acer.jpg"

export default function TechStore (){

 return(
    <>
    <Nav/>
    <div className="CatchMarket">
    <div className="storeCatch">
    <article className="backgroundRGBALightBlue">
      <h2>Refuerza tu aprendizaje con los <br/> mejores libros.</h2>
      <h5>Te recomendamos libros de todo tipo, para todo propósito y para leer en todo momento. Además, te dirigimos a la página de orígen para que puedas comprarlo de forma electrónica.</h5>
     <div className="row">
     {/* <Link to="/tienda/libros" className="cool-link readMore readMoreLightBlue">Leer más</Link> */}
      <Link to="/tienda/libros" className="searchFor lightBlue">Busco un libro</Link>
     </div>
    </article>
    <article className="backgroundRGBADarkBlue">
      <h2>Equípate con la mejor <br/> tecnología.</h2>
      <h5>Te recomendamos óptimas laptops y PC de todo tipo y precio. Además, te dirigimos a la página de orígen para que puedas comprarlo de forma electrónica.</h5>
     <div className="row">
     {/* <Link to="/tienda/libros" className="cool-link readMore readMoreLightBlue">Leer más</Link> */}
      <Link to="/tienda/tecnologia" className="searchFor darkBlue">Busco un computador</Link>
     </div>
    </article>
    </div>
    <div className="learnHowStore">
      <h3>¿Te interesa saber cómo funciona nuestra tienda? <Link to="/tienda/como-funciona" className="cool-link readMore readMoreLightBlue">Haz click aquí</Link></h3>
    </div>
   
    <div className="goForBooks">
      <h3>Encuentra el libro indicado</h3>
      <h5>Escoge aquel que se adapte a lo que te apasiona, tenemos una diversidad bastante amplia</h5>
      <div className="flexingBooks">
      <Link to="/tienda/libros/literatura">
      <article>
        <img src={lit} className="imageBooks"/>
        <h6>Literatura</h6>
      </article>
      </Link>
      <Link to="/tienda/libros/matematicas">
      <article>
        <img src={math} className="imageBooks" />
        <h6>Matemáticas</h6>
      </article>
      </Link>
      <Link to="/tienda/libros/ciencias">
      <article>
        <img src={science} className="imageBooks"/>
        <h6>Ciencias</h6>
      </article>
      </Link>
      <Link to="/tienda/libros/historia">
      <article>
        <img src={history} className="imageBooks"/>
        <h6>Historia</h6>
      </article>
      </Link>
      <Link to="/tienda/libros/goegrafia">
      <article>
        <img src={geo} className="imageBooks"/>
        <h6>Geografía</h6>
      </article>
      </Link>
      <Link to="/tienda/libros/musica">
      <article>
        <img src={music} className="imageBooks"/>
        <h6>Música</h6>
      </article>
      </Link>
      </div>
    </div>
    <div className="goForBooks computerGo">
      <h3>Un ordenador para tí</h3>
      <h5>De todos los precios y calidades, para despertar tu pasión</h5>
      <div className="flexingBooks">
      <Link to="/tienda/laptops/apple">
      <article>
        <img src={apple} className="imageBooks"/>
        <h6>Apple</h6>
      </article>
      </Link>
      <Link to="/tienda/laptops/dell">
      <article>
        <img src={dell} className="imageBooks" />
        <h6>Dell</h6>
      </article>
      </Link>
      <Link to="/tienda/laptops/lenovo">
      <article>
        <img src={lenovo} className="imageBooks"/>
        <h6>Lenovo</h6>
      </article>
      </Link>
      <Link to="/tienda/laptops/asus">
      <article>
        <img src={asus} className="imageBooks"/>
        <h6>Asus</h6>
      </article>
      </Link>
      <Link to="/tienda/laptops/hp">
      <article>
        <img src={hp} className="imageBooks"/>
        <h6>HP</h6>
      </article>
      </Link>
      <Link to="/tienda/laptops/acer">
      <article>
        <img src={acer} className="imageBooks"/>
        <h6>Acer</h6>
      </article>
      </Link>
      </div>
      <h4>Encuentra la que se acomode a tu bolsillo</h4>
      <div className="flexChooseForPrice">
        <Link to="/tienda/tecnologia/precio-economico">
        <button className="price">Económica</button>
        </Link>
        <Link to="/tienda/tecnologia/precio-medio">
        <button className="price">Medio</button>
        </Link>
        <Link to="/tienda/tecnologia/precio-caro">
        <button className="price">Caro</button>
        </Link>
      </div>
    </div>
    <div className="devStoreGo">
      <h2><i class="fas fa-code"></i> ¡Tenemos una sección especial para programadores! <i class="fas fa-code"></i></h2>
      <h6>Encuentra lo mejor para potenciar tus habilidades como programador, libros y laptops de toda orientación, calidad y precio.</h6>
      <Link to="/tienda/programacion" className="goToDevInit cool-link">¡Vamos allá!</Link>
    </div>
    </div>
  <Foot/>
   </>
 )
}