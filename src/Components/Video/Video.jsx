import React from 'react'
import './Video.css'

const Video = ({ img, img2, subtitle }) => {
    return (
        <div>
            <div className='video'>
                <img className='girl' src={img} alt="" />
                <div className='play'>
                    <img className='play2' src={img2} alt="" />
                </div>
                <div className='Wanderlust'>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Video