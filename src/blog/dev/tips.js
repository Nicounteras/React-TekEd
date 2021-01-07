import React, { useState } from 'react'
import Nav from "./../../devNav"
import Foot from "./../../foot"
import { Link } from "react-router-dom"
import devLap from "./../../images/blog-programacion/laptop-code.jpg"

export default function Tips (){
 return(
    <>
    <Nav/>
    <div className="doodle">
      <div className="blogLayout">
       <h1>
           Tips para aprender a programar
       </h1>
       <h5>
           Ideas sencillas con las que puedes escribir un mejor código
       </h5>
       <img alt="Aprender a programar" className="devImageC" src={devLap}/>
       <p>Aprender en el ámbito de la programación puede ser bastante difícil, por eso en este artículo te daremos 5 tips que pueden servirte para mejorar tu rendimiento.</p>
       <h4>1. &nbsp;Aprende de la forma difícil</h4>
       <p>Un error muy común para un programador principiante es querer aprender algo por el camino fácil. Esto no siempre lleva al mejor resultado, ya que al ir por el camino fácil muchas veces no nos enfocamos en entender con claridad y profundidad un tema en específico. La forma difícil se basa en aprender profundamente acerca de un tema, por lo que requiere de más esfuerzo y trabajo (por ello lo llamamos "camino difícil"). Aquí unos ejemplos de la forma difícil: </p>
       <li className="list-style-disc">A la hora de terminar de escribir un código nuevo para tí, leelo de nuevo y asegúrate que lo hayas entendido.</li>
       <li className="list-style-disc">En un tutorial escribe el código por tu cuenta, mas no lo copies y pegues.</li>
       <li className="list-style-disc">Practica constantemente.</li>
       <h4>2. &nbsp;Enfócate en un área de aprendizaje a la vez</h4>
       <p>Es normal cuando empiezas a programar te llamen la atención muchos lenguajes y tecnologías al mismo tiempo, sin embargo no es muy recomendable aprender en varios ámbitos de estudio al mismo tiempo, ya que se te haría muy difícil estudiar a profundidad alguno de ellos. Podrás volverte más eficiente si te especializas en una sola área a la vez.</p>
       <h4>3. &nbsp;Cuando tengas un error, observa detenidamente la sintaxis</h4>
       <p>Equivocarse a la hora de escribir código es de lo más normal, sin embargo puede que tengas un error en la sintaxis del código son muy molestos y fáciles de pasar desapercibidos. Por lo que cada vez que tengas un error, lee de nuevo detenidamente tu código. Aquí te va un ejemplo en HTML:</p>
       <br/>
       <span className="coding-example lato">&lt;div&gt;&lt;div&gt;</span>
       <br/>
       <p className="margin20px-0-0-0">El código escrito arriba tiene una sintaxis errónea, por lo que no daría un error en el código final. Esto puede pasar de muchas otras maneras y en muchos otros lenguajes. Esta es la sintaxis correcta:</p>
       <br/>
       <span className="coding-example lato">&lt;div&gt;&lt;/div&gt;</span>
       <br/>
       <p className="margin20px-0-0-0">Por ese simple "/" tu computador puede malinterpretar lo que le estás queriendo decir y así no podrá darte el resultado que esperas. Por ello es muy importante observar la sintaxis cuando obtienes un error.</p>
       <h4>4. &nbsp;Sé paciente</h4>
       <p>Es bastante natural caer en la desesperación cuando estamos aprendiendo algo nuevo. Esta desesperación por aprender algo muy rápido puede hacernos perder la concentración y no darnos el tiempo que necesitamos para procesar la información que estamos adquiriendo, que es clave para aprender. Si eres paciente, podrás aprender a pasos pequeños pero sólidos, los que crearán una base de aprendizaje estable para tí.</p>
       <h4>5. &nbsp;Asegúrate de disfrutar el proceso</h4>
       <p>Es muy importante que disfrutes de aprender a programar, ya que además de hacerte sentir mejor, también mejorará tu rendimiento a la hora de aprender. Así que, ponte cómodo, escucha buena música, toma tu bebida favorita o haz cualquier cosa que te puede ayudar a disfrutar del proceso.</p>
       </div>
    </div>
  <Foot/>
   </>
 )
}