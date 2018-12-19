import React from 'react'
import logo  from '../logo.svg'

export const Header = (props) => {

    return (
        <header className="header">
            <h1 className="header__title">{props.title}</h1>
            <img src={logo} alt='NBA man'/>
      </header>
    )  
}
