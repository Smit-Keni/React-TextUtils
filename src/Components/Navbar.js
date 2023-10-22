import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

  
  
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
      <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.item1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.item2}</a>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="mx-4">
        <button type="button" className="btn btn-primary mx-2" style={{borderRadius:15,height:30,width:30}} onClick={props.themeBlue}></button>
        <button type="button" className="btn btn-success mx-2" style={{borderRadius:15,height:30,width:30}} onClick={props.themeGreen}></button>
        <button type="button" className="btn btn-danger mx-2" style={{borderRadius:15,height:30,width:30}} onClick={props.themeRed}></button>
      </div>
      <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleTheme} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Enable {props.theme==='light'?'Darkmode':'Lightmode'}</label>
      </div>
    </div>
  </div>
</nav></div>
  )
}


//set datatype for props
Navbar.prototypes = {
    title : PropTypes.string.isRequired,
    item1 : PropTypes.string,
    item2 : PropTypes.string
} 


//dedaukt values if properties are not entered
Navbar.defaultProps = {
    title : "Enter Title",
    item1 : "First Item",
    item2 : "Second Item"
}