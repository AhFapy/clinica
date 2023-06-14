import React, { useState } from "react"

export default function Navbar(props) {

const [state, setstate] = useState(false);

const showDropdown = () => {
  setstate(true)
}

const hideDropdown = () => {
  setstate(false)
}
  return (
    <nav>
      <div className="img-navbar">
         <a className="nav-logo nav-logo-link" href="/"><img className="nav-logo" src="https://www.zarla.com/images/zarla-rbita-med-1x1-2400x2400-20220202-jxw6xtrdhr6tmhkb8fpj.png?crop=1:1,smart&width=250&dpr=2"></img></a>
      </div>

      <div className="nav-links dropdown">
        <div className="dropdown-menu" onMouseOver={showDropdown} onMouseLeave={hideDropdown}>

          <a className="dropdown-btn" href="#">Información
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          </a>

          {state ? (
          <ul className="dropdown-list" onMouseEnter={showDropdown}>
            <a className="dd-element" href="./resenyas">Reseñas</a>
          </ul>
          ): null}
          
        </div>

        <div className="dropdown-menu">
        <a href="/servicios" className="dropdown-btn">Servicios</a>
        </div>

        <div className="dropdown-menu">
        <a className="dropdown-btn" href="/valores">Citas</a>
        </div>

        </div>
    </nav>
  )
}
