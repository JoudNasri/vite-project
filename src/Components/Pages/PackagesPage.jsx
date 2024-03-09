import React from 'react'
import NavBar from '../NavBar/NavBar'
import bg from '../../assets/packages-bg.png'
import Many from '../Many/Many'
import Footer from '../Footer/Footer'
import HeroAbout from '../HeroAbout/HeroAbout'

const PackagesPage = () => {
    return (
        <>
            <NavBar image={bg} menu={[{ title: "Home", path: '/' }, { title: "About", path: '/about' }, { title: "Packages", path: '/packages' }, { title: "Services", path: '/services' },]} logo="../src/assets/logo.png" btn="Get in Touch"/>
            <HeroAbout title="Travel With Us"/>
            <div className='jj'>
                <div>
                    <Many photo="src/assets/city-1.png" p="27, September 2023" span="30+ People" h3="Maldives" titles="Qui tempore voluptate qui quia commodi rem praesentium alias et." subtitles="3000 $" paragraphs="5.0" />
                </div>
                <div>
                    <Many photo="src/assets/city-2.png" p="13, October 2023" span="120+ People" h3="Switzerland" titles="Qui tempore voluptate qui quia commodi rem praesentium alias et." subtitles="1290 $" paragraphs="4.9" />
                </div>
                <div>
                    <Many photo="src/assets/city-3.png" p="2, November 2022" span="139+ People" h3="Berlin" titles="Qui tempore voluptate qui quia commodi rem praesentium alias et." subtitles="2790 $" paragraphs="5.0" />
                </div>
                <div>
                    <Many photo="src/assets/city-4.png" p="14, December 2022" span="50+ People" h3="Torronto" titles="Qui tempore voluptate qui quia commodi rem praesentium alias et." subtitles="1110 $" paragraphs="4.0" />
                </div>
                <div>
                    <Many photo="src/assets/city-5.png" p="20, September 2022" span="80+ People" h3="Baku" titles="Qui tempore voluptate qui quia commodi rem praesentium alias et." subtitles="1220 $" paragraphs="4.5" />
                </div>
                <div>
                    <Many photo="src/assets/city-6.png" p="August" span="100+ People" h3="Chinese" titles="Qui tempore voluptate qui quia commodi rem praesentium alias et." subtitles="2500 $" paragraphs="5.0" />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default PackagesPage