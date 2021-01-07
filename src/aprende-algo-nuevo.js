import React, {useState} from "react"
import Nav from "./acadeNav"
import Foot from "./foot"
import { Link, NavLink } from "react-router-dom"

function AprendeAlgoNuevo(){
    const [toggleNav, setToggleNav] = useState(false)
    return(
        <>
        {/* navigation bar */}
       <nav id="inicio" className="initialNav black-blue-theme border-bottom-grey">
    <a href="/" className="Tekito"><h1>Tek<span>Ed</span></h1></a>
    <article id="menu" className="theMenuLinks">
      <NavLink to="/tienda">
        <li className="linkinNav cool-link">Tienda</li>
      </NavLink>
       <NavLink to="/blog">
       <li className="linkingNav cool-link">Blog</li>
       </NavLink>
       {/* <NavLink to="/quizzes" className="navLink" activeClassName="activeNavLink">
         <li className="cool-link">Quizzes</li>
       </NavLink> */}
      {/*  <a href="https://docs.google.com/forms/d/e/1FAIpQLSegwzDAMFV7s8iMbmxIhdG5-YSSpD63l9YxFL-xTLrdiakZug/viewform?vc=0&c=0&w=1" target="blank" className="feedback cool-link">¡Danos tu feedback!</a> */}
       {/* <Link to="/store">
       <li className="cool-link">Tienda</li>
       </Link> */}
    </article>
    <i className="fas fa-bars toggleMenuButton" onClick={() => setToggleNav(!toggleNav)}></i>
    <div className={`toggleNav ${toggleNav ? 'navOn' : 'navOff'} black-blue-theme`}>
    <div className="threeButton initialNavi">
     <Link class="go-btn" to="/tienda">Tienda</Link>
     <Link className="ex-btn" to="/blog">Blog</Link>
    {/*  <Link className="start-btn" to="/quizzes">
       Toma un quiz
     </Link>
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSegwzDAMFV7s8iMbmxIhdG5-YSSpD63l9YxFL-xTLrdiakZug/viewform?vc=0&c=0&w=1" target="blank" className="feedback toggleFeedback">¡Danos tu feedback!</a> */}
     </div>
      </div>
  </nav>


     <div className="doodles">
         <ul className="padding40px-10vw-div flex-column black-theme-opacity9">
             <li>
                 <h1 className="big-title text-center white lato">
                 Aprende algo <span className="spanDiferent">diferente</span>
                 </h1>
             </li>
             <li>
                 <h5 className="text-center lato margin10-0-0-0 font-18 font-500">
                 Encuentra un curso de tu interés
                 </h5>
             </li>
             <li className="margin40-0-0-0">
                 <div className="grid-3-columns grid-gap-15px">
                     <article className="flex-column align-items-center padding20px background-grey radius-10 text-center border-dashed-blue">
                         <li>
                             <i className="fas fa-laptop-code font-50 color-blue margin0-0-20px-0"></i>
                         </li>
                         <li>
                             <h4 className="sub-title lato margin0-0-30px-0">Desarrollo web</h4>
                         </li>
                         <li>
                             <a href="#desarrollo-web" className="button blue-button lato transition1s">
                                 Ver más
                             </a>
                         </li>
                     </article>
                     <article className="flex-column align-items-center padding20px background-grey radius-10 text-center border-dashed-purple">
                         <li>
                             <i className="fas fa-brain font-50 color-purple margin0-0-20px-0"></i>
                         </li>
                         <li>
                             <h4 className="sub-title lato margin0-0-30px-0">Marketing <br/> <span className="font-15">(próximamente)</span></h4>
                         </li>
                         <li>
                             <a href="#marketing" className="button purple-button lato transition1s">
                                 Ver más
                             </a>
                         </li>
                     </article>
                     <article className="flex-column align-items-center padding20px background-grey radius-10 text-center border-dashed-orange">
                        <li>
                            <i className="fas fa-money-bill-wave font-50 color-orange margin0-0-20px-0"></i>
                        </li>
                         <li>
                             <h4 className="sub-title lato margin0-0-30px-0">Economía <br/> <span className="font-15">(próximamente)</span></h4>
                         </li>
                         <li>
                         <a href="#economia" className="button orange-button lato transition1s">
                                 Ver más
                             </a>
                         </li>
                     </article>
                 </div>
             </li>
         </ul>
         <div className="padding60px-10vw-div background-black-blue align-items-center flex-1-1-row lato" id="desarrollo-web">
             <article className="align-items-center">
             <h2 className="font-33">Desarrollo web</h2>
             <p className="margin10px-0-0-0">Aprende a crear y diseñar páginas web por tu propia cuenta. </p>
             <button className="default-button">
             <Link to="/programacion/desarrollo-web/cursos/html/introduccion" className="theDevLink linkHTML margin0-0-0-0 top-10px">
             Curso de HTML 5
             </Link>
             </button>
             <button className="default-button margin-left-10px">
             <Link to="/programacion/desarrollo-web/cursos/css/introduccion" className="theDevLink linkCSS margin0-0-0-0 top-10px">
             Curso de CSS 3
             </Link>
             </button>
             <p className="margin10px-0-0-0">¿Por qué aprender a programar? <Link target="blank" to="/programacion/desarrollo-web/blog/por-que-programar" className="text-decoration-underline-blue color-white hover-grey-white transition1s">Haz click aquí</Link></p>
             </article>
             <i className="fas fa-laptop-code white font-100px text-decoration-underline-blue text-center"></i>
         </div>


         <div className="padding60px-10vw-div background-black-purple align-items-center flex-1-1-row lato" id="marketing">
             <article className="align-items-center">
             <h2 className="font-33">Marketing</h2>
             <p className="margin10px-0-0-0">Aprende acerca de técnicas de comercialización.</p>
             <button disabled={true} className="theDevLink purple-white-button lato margin20px-0-0-0">
                 Proximamente
             </button>
             </article>
             <i className="fas fa-brain white font-100px text-center"></i>
         </div>
         <div className="padding60px-10vw-div background-black-orange align-items-center flex-1-1-row lato" id="economia">
             <article className="align-items-center">
             <h2 className="font-33">Economía</h2>
             <p className="margin10px-0-0-0">Aprende el cómo se maneja el dinero en nuestra sociedad.</p>
             <button disabled={true} className="theDevLink orange-white-button lato margin20px-0-0-0">
                 Proximamente
             </button>
             </article>
             <i className="fas fa-money-bill-wave white font-100px text-center"></i>
         </div>
     </div>
        <Foot/>
      </> 
      )
}

export default AprendeAlgoNuevo