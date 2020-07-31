import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function restasQuintoGrado() {
  return (
   <>
    <a href="https://www.youtube.com/watch?v=S8ACLQs-Bz4" target="blank" class="verEx">Ver explicación</a>
   <Nav/>
   <Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Restas de números grandes</h4>
           <p className="pOfQuizzes"></p>
        </div>
        </div>
   </>
  )
} 

export default restasQuintoGrado
