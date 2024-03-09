import React from 'react'
import './Category.css'

const Category = ({title , paragraph}) => {
    return (
        <div className='category'>
            <p className='paragraph'>{paragraph}</p>
            <h1 className='tit'>{title}</h1>
        </div>
    )
}

export default Category