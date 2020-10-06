import React, { useState } from 'react'
import Nav from "./../shopNav"
import Foot from "./../foot"
import { Link } from "react-router-dom"
import mac from "./../images/laptops/mac.png"
import macbookpro13 from "./../images/laptops/macbookpro13.png"
import macbookpro16 from "./../images/laptops/macpro16.png"

export default function Apple (){
    const [laptop1, setLaptop1] = useState(false)
    const [laptop2, setLaptop2] = useState(false)
    const [laptop3, setLaptop3] = useState(false)
 return(
    <>
     <div className={`theLaptopLinks ${laptop1 ? 'showIndex' : 'hideIndex'}`}>
                   <article>
                       <a target="blank" className="amazonF link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon</a>
                       <a target="blank" className="linioF link-btn fredoka"><i class="fas fa-shopping-cart"></i>Comprar por Linio</a>
                       <div target="blank" className="amazonB link-btn fredoka" href="https://www.amazon.com/gp/product/B07NPTCNSG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07NPTCNSG&linkCode=as2&tag=nicontreras8-20&linkId=caf62817e7aef98e415d88c42273b51f"><i class="fab fa-amazon"></i>Comprar Amazon Renewed</div>
                   </article>
                   <button onClick={() => setLaptop1(!laptop1)} className="close-btn lato">Volver</button>
               </div>
               <div className={`theLaptopLinks ${laptop2 ? 'showIndex' : 'hideIndex'}`}>
                   <article>
                   <a className="amazonF link-btn fredoka" ><i class="fab fa-amazon"></i>Comprar por Amazon</a>
                       <a className="linioF link-btn fredoka"><i class="fas fa-shopping-cart"></i>Comprar por Linio</a>
                       <a className="amazonB link-btn fredoka" href="https://www.amazon.com/gp/product/B0849TCJ64/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0849TCJ64&linkCode=as2&tag=nicontreras8-20&linkId=526db1bceb2be12e9d382d01c90f8053"><i class="fab fa-amazon"></i>Comprar Amazon Renewed</a>
                   </article>
                   <button onClick={() => setLaptop2(!laptop2)} className="close-btn lato">Volver</button>
               </div>
               <div className={`theLaptopLinks ${laptop3 ? 'showIndex' : 'hideIndex'}`}>
                   <article>
                   <a className="amazonF link-btn fredoka"><i class="fab fa-amazon"></i>Comprar por Amazon</a>
                       <a className="linioF link-btn fredoka"><i class="fas fa-shopping-cart"></i>Comprar por Linio</a>
                       <a className="amazonB link-btn fredoka"><i class="fab fa-amazon"></i>Comprar Amazon Renewed</a>
                   </article>
                   <button onClick={() => setLaptop3(!laptop3)} className="close-btn lato">Volver</button>
               </div>
    <Nav/>
    <div className="doodles">
        <div className="computers padding40-0">
            <h2 className="laptopTitle">Laptops <span>Apple <i class="fab fa-apple"></i></span></h2>
            <h5 className="fredoka computersSubHeader">Encuentra la MacBook indicada para tí</h5>
           <div className="backgroundGreyTransparent80">
           <div className="oneLaptop">
<article>
    <img src={mac} className="divLaptopImage"/>
    <h2 className="fredoka">MacBook Air</h2>
    <div className="wrap padding20 centering">
    <button onClick={() => setLaptop1(!laptop1)} className="cool-link lookTheReview fredoka">Comprar en línea</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    </div>
</article>
<article>
    <h1 className="fredoka">
        MacBook Air
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
    <img src={macbookpro13} className="divLaptopImage"/>
    <h2 className="fredoka">MacBook Pro 13"</h2>
    <div className="wrap padding20 centering">
    <button onClick={() => setLaptop2(!laptop2)} className="cool-link lookTheReview fredoka">Comprar en línea</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    </div>
</article>
<article>
    <h1 className="fredoka">
        MacBook Pro 13"
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
    <img src={macbookpro16} className="divLaptopImage"/>
    <h2 className="fredoka">MacBook Pro 16"</h2>
    <div className="wrap padding20 centering">
    <button onClick={() => setLaptop3(!laptop3)} className="cool-link lookTheReview fredoka">Comprar en línea</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    </div>
</article>
<article>
    <h1 className="fredoka">
        MacBook Pro 16"
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
           </div>
        </div>
    </div>
  <Foot/>
   </>
 )
}