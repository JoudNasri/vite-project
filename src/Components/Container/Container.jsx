import React from 'react'
import './Container.css'

const Container = ({img,title,subtitle,img2,title2,subtitle2,img3,title3,subtitle3,img4,title4,subtitle4}) => {
    return (
        <div className='container'>
            <div className='child-container'>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className='child-container'>
                <img src={img2} alt="" />
                <h3>{title2}</h3>
                <p>{subtitle2}</p>
            </div>
            <div className='child-container'>
                <img src={img3} alt="" />
                <h3>{title3}</h3>
                <p>{subtitle3}</p>
            </div>
            <div className='child-container'>
                <img src={img4} alt="" />
                <h3>{title4}</h3>
                <p>{subtitle4}</p>
            </div>
        </div>
    )
}

export default Container