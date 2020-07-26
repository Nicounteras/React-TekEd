import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function algebraQuintoGradoRespuestas() {
  return (
   <>
  <div className="showingTheAnswer0">
    <div className="whiteSec big">
      <h2>Respuestas de los ejercicios</h2> 
      <div class="grid28">
          <article>
            <span>1) 32</span>
            <p>42+32=74</p>
            <p>106-74=32</p>
            <p>Respuesta: 32</p>  
          </article>
          <article>
            <span>2) 64</span>
            <p>32+4=36</p>
            <p>100-36=64</p>
            <p>Respuesta:64</p>
          </article>
          <article>
            <span>3) 147</span>
            <p>320+1+32=353</p>
            <p>500-353=147</p>
            <p>Respuesta:147</p>
          </article>
          <article>
            <span>4) -64</span>
            <p>42+32=74</p>
            <p>74-64=10</p>
            <p>Respuesta:-64</p>
          </article>
          <article>
            <span>5) 166</span>
            <p>42+32=74</p>
            <p>240-74=166</p>
            <p>Respuesta:166</p>
          </article>
          <article>
            <span>6) 44</span>
            <p>41+35=76</p>
            <p>120-76=44</p>
          </article>
          <article>
            <span>7) 41</span>
            <p>42+20=62</p>
            <p>62-21=41</p>
            <p>Respuesta:41</p>
          </article>
          <article>
            <span>8) -387</span>
            <p>415+2=417</p>
            <p>30-417=-387</p>
            <p>Respuesta:-387</p>
          </article>
          <article>
            <span>9) 2</span>
            <p>110-1=109</p>
            <p>109+2=111</p>
            <p>Respuesta:2</p>
          </article>
          <article>
            <span>10) -54</span>
            <p>42+10=52</p>
            <p>52-54=-2</p>
            <p>Respuesta:-54</p>
          </article>
          <article>
            <span>11) 2</span>
            <p>53x2=106</p>
            <p>Respuesta:2</p>
          </article>
          <article>
            <span>12) 4</span>
            <p>26.5x4=106</p>
            <p>Respuesta:4</p>
          </article>
          <article>
            <span>13) 8</span>
            <p>13.25x8</p>
            <p>Respuesta:8</p>
          </article>
          <article>
            <span>14) -12</span>
            <p>80+32=112</p>
            <p>100-112=-12</p>
            <p>Respuesta:-12</p>
          </article>
          <article>
            <span>15) 19</span>
            <p>19x0=0</p>
            <p>0+19=19</p>
            <p>Respuesta:19</p>
          </article>
          
      </div>
      <Link to="/ejercicios/quinto-grado/matematica/algebra"><button id="cierreCool1" className="entendidoCapitán">Volver a los ejercicios</button></Link>
    </div>
    <div className="toggleClose enWhiteSecBig" id="cierre"> 
      <Link to="/ejercicios/quinto-grado/matematica/algebra">
        <div className="izquierda grande"></div>
        <div className="derecha grande"></div>
   </Link>
 </div>

</div>

   </>
  )
} 

export default algebraQuintoGradoRespuestas

