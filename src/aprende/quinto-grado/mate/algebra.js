import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function algebraQuintoGrado() {
  return (
   <>
   <Nav/>
   <div className="buttonDivTo">
   <Link to="/ejercicios/quinto-grado/matematica/algebra" className="goToOtherArticle cool-link">
   Practicar
</Link>
</div>
   <Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Álgebra básica</h4>
            <p className="pOfQuizzes">¿Cómo se resuleven los ejercicios de álgebra? Descúbrelo en este artículo</p>
            <div className="mathText">
            <h5 className="fredoka">¿Qué es el álgebra?</h5>
            <p>El álgebra es el área de las matemáticas que se centra en las cantidades. En esta área veremos que es común usar tanto letras como signos para representar cantidades. Dentro de estos signos veremos que el más común de usar seria la “x”. A continuación un ejemplo de una operación algebraica:</p>
            <article>
              X + 4 = 7
            </article>
            <p>
            En este caso tenemos a la incógnita “x”, aunque tranquilamente podría ser representada por “b” o “s” y daría el mismo. De todas maneras, veamos cómo se resuelve esta pregunta.
            </p>
            <p className="margin10-0">
            Primero, tenemos que entender que lo que tenemos aquí es una <span className="bolderBlue">igualdad</span>. Esto quiere decir que las expresiones que se encuentran a ambos lados del signo “=” son equivalentes. 
            </p>
            <iframe className="iFrameVideo margin20-0" src="https://www.youtube.com/embed/SyCS1V-5Uc4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          </div>
   </>
  )
} 

export default algebraQuintoGrado
