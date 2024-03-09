import React from 'react'
import NavBar from '../NavBar/NavBar'
import bg from '../../assets/about-bg.png'
import Promotion from '../Promotion/Promotion'
import Video from '../Video/Video'
import Trend from '../Trend/Trend'
import Footer from '../Footer/Footer'
import HeroAbout from '../HeroAbout/HeroAbout'

const AboutPage = () => {
    return (
        <div>
                <NavBar image={bg} menu={[{ title: "Home", path: '/' }, { title: "About", path: '/about' }, { title: "Packages", path: '/packages' }, { title: "Services", path: '/services' },]} logo="../src/assets/logo.png" btn="Get in Touch" subtitle="About us" />
                <HeroAbout title="About Us"/>
                <Promotion subtitle="Promotion" title="We Provide You Best Europe Sightseeing Tours" paragraph="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!" btn="View Packages" photo="src/assets/promotion_img.png" />
                <Video img="src/assets/video-banner.png" img2="src/assets/video-play.svg" subtitle="Wanderlust" />
                <Trend img="src/assets/TourPlans-img.png" title="Trend" subtitle="Our Popular Tour Plans" paragraph="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium." number="78%" number2="55%" h3="Vacations" h4="Honeymoon" />
                <Footer />
        </div>
    )
}

export default AboutPage