import React from 'react'
import './Trendy.css'

const Trendy = ({subtitle,title}) => {
    return (
        <div className='trendy'>
            <p>{subtitle}</p>
            <h1>{title}</h1>
        </div>
    )
}

export default Trendy