import React from 'react'
import './HeroAbout.css'

const HeroAbout = ({title}) => {
    return (
        <div className="hero">
            <h1 className='matter'>
                {title}
            </h1>
        </div>
    )
}

export default HeroAbout