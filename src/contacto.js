import React from 'react'
import "./App.css"

function Contacto() {
  return (
    <>
    <div className="contactMain">
        <h2>Contáctanos</h2>
        <h5>Entra en contacto con nosotros por cualquiera de éstos medios</h5>
        <div className="tresporuno">
            <article>
            <i class="fas fa-envelope"></i>
            <span>teked.fun@gmail.com</span>
            </article>
            <article>
            <i class="fab fa-facebook-square"></i>
            <a href="https://www.facebook.com/Teked-102714381488644" target="blank" className="cool-link facebook-link">Escríbenos por Facebook</a>
            </article>
            <article>
            <i class="fab fa-instagram-square"></i>
            <a href="https://www.instagram.com/_teked_/" target="blank" className="cool-link instagram-link">Escríbenos por Instagram</a>
            </article>
        </div>
    </div>
    </>
  )
} 

export default Contacto
