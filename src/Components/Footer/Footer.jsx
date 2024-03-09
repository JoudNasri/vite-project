import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='all-footer'>
                <div className='foot'>
                    <div className='logo2'>
                        <img src="src/assets/Travel.png" alt="" />
                        <p className='travel'>Travel helps companies manage payments easily.</p>
                        <div className='social'>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-facebook-messenger"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <div className='all-p'>
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                    </div>
                    <div className='all-p'>
                        <h3>Destinations</h3>
                        <p>Maldives</p>
                        <p>Los Angelas</p>
                        <p>Las Vegas</p>
                        <p>Torronto</p>
                    </div>
                </div>
                <div className='copy'>
                    <p>Copyright @ Xpro 2023 All Rights Reserved.</p>
                </div>
            </div>
        </footer >
    )
}

export default Footer