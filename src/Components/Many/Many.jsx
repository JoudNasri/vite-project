import React from 'react'
import './Many.css'

const Many = ({ photo, p, h3, titles, subtitles, paragraphs, span, }) => {
    return (
        <main>
            <div className='many'>
                <div className='child-many'>
                    <img src={photo} alt="" />
                    <div className='all-span'>
                        <span>{p}</span>
                        <span>{span}</span>
                    </div>
                    <h3>{h3}</h3>
                    <p>{titles}</p>
                    <div className='all-subtitles'>
                        <span>{subtitles}</span>
                        <div className='star'>
                            <i class="fa-solid fa-star"></i>
                            <span>{paragraphs}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Many