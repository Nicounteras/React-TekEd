import React from 'react'
import {useState} from "react"
import Nav from "./../shopNav"
import Foot from "./../foot"
import { Link } from "react-router-dom"
import chuwi14 from "./../images/laptops/chuwipro14.png"
import asusChromeBook from "./../images/laptops/asusChrome.png"
import acerChromeBook from "./../images/laptops/acerChrome.png"

function EconomicLaptops() {
    const [laptop1, setLaptop1] = useState(false)
    const [laptop2, setLaptop2] = useState(false)
    const [laptop3, setLaptop3] = useState(false)
    const [laptop4, setLaptop4] = useState(false)
    const [laptop5, setLaptop5] = useState(false)
 return(
    <>
     <div className={`theLaptopLinks ${laptop1 ? 'showIndex' : 'hideIndex'}`}>
                   <article>
                       <a className="amazonF link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon</a>
                       <a className="linioF link-btn fredoka"><i class="fas fa-shopping-cart"></i>Comprar por Linio</a>
                       <a className="amazonB link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon de 2da</a>
                   </article>
                   <button onClick={() => setLaptop1(!laptop1)} className="close-btn lato">Volver</button>
               </div>
               <div className={`theLaptopLinks ${laptop2 ? 'showIndex' : 'hideIndex'}`}>
                   <article>
                   <a className="amazonF link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon</a>
                       <a className="linioF link-btn fredoka"><i class="fas fa-shopping-cart"></i>Comprar por Linio</a>
                       <a className="amazonB link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon de 2da</a>
                   </article>
                   <button onClick={() => setLaptop2(!laptop2)} className="close-btn lato">Volver</button>
               </div>
               <div className={`theLaptopLinks ${laptop3 ? 'showIndex' : 'hideIndex'}`}>
                   <article>
                   <a className="amazonF link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon</a>
                       <a className="linioF link-btn fredoka"><i class="fas fa-shopping-cart"></i>Comprar por Linio</a>
                       <a className="amazonB link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon de 2da</a>
                   </article>
                   <button onClick={() => setLaptop3(!laptop3)} className="close-btn lato">Volver</button>
               </div>
               <div className={`theLaptopLinks ${laptop4 ? 'showIndex' : 'hideIndex'}`}>
                   <article>
                   <a className="amazonF link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon</a>
                       <a className="linioF link-btn fredoka"><i class="fas fa-shopping-cart"></i>Comprar por Linio</a>
                       <a className="amazonB link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon de 2da</a>
                   </article>
                   <button onClick={() => setLaptop4(!laptop4)} className="close-btn lato">Volver</button>
               </div>
               <div className={`theLaptopLinks ${laptop5 ? 'showIndex' : 'hideIndex'}`}>
                   <article>
                   <a className="amazonF link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon</a>
                       <a className="linioF link-btn fredoka"><i class="fas fa-shopping-cart"></i>Comprar por Linio</a>
                       <a className="amazonB link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon de 2da</a>
                   </article>
                   <button onClick={() => setLaptop5(!laptop5)} className="close-btn lato">Volver</button>
               </div>
    <Nav/>
    <div className="doodles">
        <div className="computers padding40-0">
            <h2 className="laptopTitle">Laptops <span>económicas</span> <i class="fas fa-laptop"></i></h2>
            <h5 className="fredoka computersSubHeader">Al precio más accesible, para todo uso</h5>
           <div className="backgroundGreyTransparent80">
           <div className="oneLaptop">
              
<article>
    <img src={chuwi14} className="divLaptopImage"/>
    <h2 className="fredoka">Chuwi HeroBook Pro</h2>
    <div className="wrap padding20 centering">
    <button onClick={() => setLaptop1(!laptop1)} className="cool-link lookTheReview fredoka">Comprar en línea</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    </div>
</article>
<article>
    <h1 className="fredoka">
    Chuwi HeroBook Pro
    </h1>
    <p className="lato">
        “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:  
    </p>
    <div className="adjectives row">
         <button><i class="fas fa-child"></i> Cómoda</button>
         <button><i class="fas fa-shipping-fast"></i> Ligera</button>
         <button><i class="fas fa-bullseye"></i> Sofisticada</button>
    </div>
</article>
            </div>
            <div className="oneLaptop">
<article>
    <img src={asusChromeBook} className="divLaptopImage"/>
    <h2 className="fredoka">Asus Chromebook</h2>
    <div className="wrap padding20 centering">
    <button onClick={() => setLaptop2(!laptop2)} className="cool-link lookTheReview fredoka">Comprar en línea</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    </div>
</article>
<article>
    <h1 className="fredoka">
    Asus Chromebook
    </h1>
    <p className="lato">
        “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:  
    </p>
    <div className="adjectives row">
         <button><i class="fas fa-child"></i> Cómoda</button>
         <button><i class="fas fa-shipping-fast"></i> Ligera</button>
         <button><i class="fas fa-bullseye"></i> Sofisticada</button>
    </div>
</article>
            </div>
            <div className="oneLaptop">
<article>
    <img src={acerChromeBook} className="divLaptopImage"/>
    <h2 className="fredoka">Acer Chromebook</h2>
    <div className="wrap padding20 centering">
    <button onClick={() => setLaptop3(!laptop3)} className="cool-link lookTheReview fredoka">Comprar en línea</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    </div>
</article>
<article>
    <h1 className="fredoka">
    Acer Chromebook
    </h1>
    <p className="lato">
        “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:  
    </p>
    <div className="adjectives row">
         <button><i class="fas fa-child"></i> Cómoda</button>
         <button><i class="fas fa-shipping-fast"></i> Ligera</button>
         <button><i class="fas fa-bullseye"></i> Sofisticada</button>
    </div>
</article>
            </div>
            <div className="oneLaptop">
<div>

   <div className="oneLaptopArticle">
   <img src={acerChromeBook} className="divLaptopImage"/>
    <h2 className="fredoka">Acer Chromebook</h2>
    <div className="wrap padding20 centering">
    <button onClick={() => setLaptop4(!laptop4)} className="cool-link lookTheReview fredoka">Comprar en línea</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    </div>
    </div>
</div>
<article>
    <h1 className="fredoka">
    Acer Chromebook
    </h1>
    <p className="lato">
        “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:  
    </p>
    <div className="adjectives row">
         <button><i class="fas fa-child"></i> Cómoda</button>
         <button><i class="fas fa-shipping-fast"></i> Ligera</button>
         <button><i class="fas fa-bullseye"></i> Sofisticada</button>
    </div>
</article>
            </div>
            <div className="oneLaptop">
<article>
    <img src={acerChromeBook} className="divLaptopImage"/>
    <h2 className="fredoka">Acer Chromebook</h2>
    <div className="wrap padding20 centering">
    <button onClick={() => setLaptop5(!laptop5)} className="cool-link lookTheReview fredoka">Comprar en línea</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    </div>
</article>
<article>
    <h1 className="fredoka">
    Acer Chromebook
    </h1>
    <p className="lato">
        “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:  
    </p>
    <div className="adjectives row">
         <button><i class="fas fa-child"></i> 16Gb de RAM</button>
         <button><i class="fas fa-shipping-fast"></i> Ligera</button>
         <button><i class="fas fa-bullseye"></i> Sofisticada</button>
    </div>
</article>
            </div>
           </div>
        </div>
    </div>
  <Foot/>
   </>
 )
}
export default EconomicLaptops