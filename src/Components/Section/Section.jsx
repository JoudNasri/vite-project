import React from 'react'
import './Section.css'

const Section = ({img,subtitle,title,btn,img2,subtitle2,title2,btn2}) => {
    return (
        <div className='section'>
            <div className='child-section'>
                <img src={img} alt="" />
                <div className='of'>
                    <p>{subtitle}</p>
                    <h2>{title}</h2>
                    <button>{btn}</button>
                </div>
            </div>
            <div className='child-section'>
                <img src={img2} alt="" />
                <div className='of'>
                    <p>{subtitle2}</p>
                    <h2>{title2}</h2>
                    <button>{btn2}</button>
                </div>
            </div>
        </div>
    )
}

export default Section