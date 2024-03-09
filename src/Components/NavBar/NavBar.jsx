import React, { useState } from 'react'
import './NavBar.css'
import State from '../State/State'
import { Link } from 'react-router-dom'



const NavBar = ({ image, menu, logo, btn, subtitle }) => {
    return (
        <header style={{ backgroundImage: `url(${image})` }}>
            <nav>
                <div>
                    <img className='logo' src={logo} alt="" />
                </div>
                <ul className='all-ul'>
                    {menu.map((element, index) => {
                        return (
                            <li key={index}><Link className='link' to={element.path}>{element.title}</Link></li>
                        )
                    })}
                </ul>
                <button className='btn'>{btn}</button>
            </nav>
            {/* <State/> */}
        </header>
    )
}

export default NavBar