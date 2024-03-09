import React, { useState } from 'react'
import './State.css'

const State = () => {
    const [menu, setmenu] = useState(false)
    return (
        <div className='all'>
            <button onClick={() => { setmenu(!menu) }}><i class="fa-solid fa-bars"></i></button>
            <div className='hum'>
                <ul style={{ display: (menu) ? "block" : "none" }}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Packages</li>
                    <li>Services</li>
                    <button>Get in Touch</button>
                </ul>
            </div>
        </div>
    )
}

export default State