import React from 'react'
import siteLogo from '../assets/images/site-logo.png'
import logo from '../assets/images/logo.png'

export default function Header() {
    return (
        <header className='header'>
            <div className='site'>
                <img src={siteLogo} alt="Proyect logo." className="site-logo"/>
                <h1 className='title'>Quote-Image</h1>
            </div>
            <div className='brand'>
                <h4 className='brannd'>Mau's <br />Proyects</h4>
                <img src={logo} alt="Mauricio G. Olagary logo." className="brand-logo"/>
            </div>
        </header>
    )
}