import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
    <nav id="inicio" className="initialNav fixed">
    <a href="/" className="Tekito"><h1>Tek<span>Ed</span></h1></a>
    <i className="fas fa-bars" id="theNewResp"></i>
</nav>
    </>
  )
} 

export default Nav