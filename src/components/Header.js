import React from 'react'
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header>
        <span className='logo'>
            <img src={logo} alt='log'/>
            <span>Task mate</span>
        </span>
        <span className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark"></span>
            <span className="gOne"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>
        </span>
            
    </header>
  )
}
