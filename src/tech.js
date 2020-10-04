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
  <div className="darkBluePadding60Layer">
<h1>Descubre todo lo que puedes hacer <br/> con una buena laptop</h1>
<i className="fas fa-laptop bigIcon"></i>
<h5>Encuentra una que se acomode a lo que te gusta y al precio que estás dispuesto a pagar.</h5>
<a href="#h">Desliza para ver más <i class="fas fa-arrow-down"></i></a>
  </div>
  <div className="goForBooks computerGo" id="h">
  <h3 className="center margin20-0">Selecciona el precio de la laptop que estás buscando</h3>
  <div className="flexChooseForPrice">
        <Link to="/tienda/laptops/precio-economico">
        <button className="price">Económico</button>
        </Link>
        <Link to="/tienda/laptops/precio-medio">
        <button className="price">Medio</button>
        </Link>
        <Link to="/tienda/laptops/precio-caro">
        <button className="price">Caro</button>
        </Link>
      </div>
      <h3 className="center margin20-0">O elige tu marca favorita</h3>
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
      </div>
    </div>
  <Foot/>
   </>
 )
}