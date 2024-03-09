import React from 'react'
import './Trend.css'

const Trend = ({ img, title, subtitle, paragraph, number, number2, h3, h4 }) => {
    return (
        <section>
            <div className='all-trend'>
                <div className='img-trend'>
                    <img src={img} alt="" />
                </div>
                <div className='the-title'>
                    <p className='son-title'>{title}</p>
                    <h2>{subtitle}</h2>
                    <p className='son-title2'>{paragraph}</p>
                    <div className='all-number'>
                        <div className='same'>
                            <p>{number}</p>
                            <h3>{h3}</h3>
                        </div>
                        <div className='same'>
                            <p>{number2}</p>
                            <h3>{h4}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trend