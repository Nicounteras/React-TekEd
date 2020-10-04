import React from 'react'
import {useState} from "react"
import Nav from "./shopNav"
import Foot from "./foot"
import { Link } from "react-router-dom"


function HowStore() {
    const [laptop4, setLaptop4] = useState(false)
 return(
    <>
    <Nav/>
   <div className="doodles">
   <h2 className="store-title fredoka">Cómo funciona la tienda en <span className="teked">Tek<span>Ed</span></span></h2>
   <p className="how-store-works-p lato">Con el propósito de brindar apoyo a la educación de los estudiantes en TekEd, hemos creado una tienda en línea donde recomendamos diferentes libros y equipos electrónicos con los que puedan mejorar su aprendizaje. Los productos que recomendamos de la tienda provienen de <a href="https://www.amazon.com/" target="blank" className="fredoka">Amazon.com</a> y de <a href="https://www.linio.com" target="blank" className="fredoka">Linio.com</a></p>
   <div className="how-to-buy">
       <h4 className="fredoka">Cómo comprar por<span className="teked">Tek<span>Ed</span></span></h4>
       <div className="grid-3-buy">
           <article>
               <span className="padding5-12">1</span>  <br/>
               <i class="fas fa-chalkboard-teacher"></i>
               <h6>Piensa en el producto que necesites para mejorar tu aprendizaje</h6>
           </article>
           <article>
               <span>2</span> <br/>
               <i class="fas fa-mouse-pointer"></i>
               <h6>Elige el producto dandole a la opción "comprar"</h6>
           </article>
           <article>
               <span>3</span> <br/>
               <i class="fas fa-shopping-cart"></i>
               <h6>Paga por el producto, ya sea en <a href="https://www.amazon.com/" target="blank" className="fredoka">Amazon.com</a> o <a href="https://www.linio.com" target="blank" className="fredoka">Linio.com</a></h6>
           </article>
       </div>
          <div className="twoButtonForStore">
              <Link to="/tienda/libros" className="look-for-12">Quiero un libro</Link>
              <Link to="/tienda/laptops" className="look-for-13">Busco una laptop</Link>
          </div>
   </div>
   <div className="questionStore">
           <p className="fredoka question-store">¿Qué pasa si el producto no viene como se espera?</p>
           <p className="lato font17">Tanto <a href="https://www.amazon.com/" target="blank" className="fredoka">Amazon.com</a> como <a href="https://www.linio.com" target="blank" className="fredoka">Linio.com</a> cuentan con sistemas de rembolso. En caso el producto no haya llegado como lo esperabas, puedes contactarlos y te reembolsarán el dinero.</p>
       </div>
   </div>
  <Foot/>
   </>
 )
}
export default HowStore