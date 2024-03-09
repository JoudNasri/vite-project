import React from 'react'
import './Promotion.css'

const Promotion = ({ subtitle, title, paragraph, btn, photo }) => {
    return (
        <section>
            <div className='all-dev'>
                <div className='child-dev'>
                    <p className='para'>{subtitle}</p>
                    <h2>{title}</h2>
                    <p className='pp'>{paragraph}</p>
                    <button className='btn'>{btn}</button>
                </div>
                <div className='phot'>
                    <img src={photo} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Promotion