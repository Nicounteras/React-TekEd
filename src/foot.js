import React from 'react'
import "./App.css"
import { Link } from "react-router-dom"

function Foot() {
  return (
    <>
    <div className="doodles">
    <footer>
        <div className="foot1">
            <span className="teked">Tek<span>Ed</span></span>
            <div className="Flexing"></div>
            <a href="https://www.instagram.com/_teked_/" target="blank" className="cool-link footerSocial"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/Teked-102714381488644" target="blank" className="cool-link footerSocial"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/channel/UCgMVPZ6vS5sse8x5nLhIkXg" target="blank" className="cool-link footerSocial"><i class="fab fa-youtube"></i></a>
        </div>
        <div className="foot2">
            {/* <Link to="/como-funciona" className="cool-link footerSocial right">
                Cómo funciona
            </Link>
            <Link to="/nosotros" className="cool-link footerSocial right">
                Nosotros
            </Link> */}
            <Link to="/blog" className="cool-link footerSocial right goUp">
                Blog
            </Link>
            <Link to="/contacto" className="cool-link footerSocial right goUp">
                Contáctanos
            </Link>
            <Link to="/tienda" className="cool-link footerSocial right goUp">
                Tienda
            </Link>
        </div>
    </footer>
    </div>
    </>
  )
} 

export default Foot
