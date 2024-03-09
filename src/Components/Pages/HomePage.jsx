import React from 'react'
import NavBar from '../NavBar/NavBar'
import Category from '../Category/Category'
import Container from '../Container/Container'
import Section from '../Section/Section'
import Trendy from '../Trendy/Trendy'
import Footer from '../Footer/Footer'
import Cards from '../Cards/Cards'
import bg from '../../assets/header-bg.png'
import Hero from '../Hero/Hero'

const HomePage = () => {
    return (
        <div>
            <NavBar image={bg} menu={[{ title: "Home", path: '/' }, { title: "About", path: '/about' }, { title: "Packages", path: '/packages' }, { title: "Services", path: '/services' },]} logo="../src/assets/logo.png" btn="Get in Touch" subtitle="No matter where you’re going to, we’ll take you there"/>
            <Hero/>
            <Category paragraph="CATEGORY" title="We Offer Best Services" />
            <Container img="../src/assets/service-1.png" title="Guided Tours" subtitle="sunt qui repellat saepe quo velit aperiam id aliquam placeat." img2="../src/assets/service-2.png" title2="Best Flights Options" subtitle2="sunt qui repellat saepe quo velit aperiam id aliquam placeat." img3="../src/assets/service-3.png" title3="Religious Tours" subtitle3="sunt qui repellat saepe quo velit aperiam id aliquam placeat." img4="../src/assets/service-4.png" title4="Medical insurance" subtitle4="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
            <Section img="./src/assets/e1.png" subtitle="Promotion" title="Explore Nature" btn="View Packages" img2="./src/assets/e2.png" subtitle2="Promotion" title2="Explore Cities" btn2="View Packages" />
            <Trendy title="Our Trending Tour Packages" subtitle="Trendy" />
            <Cards />
            <Footer />
        </div>

    )
}

export default HomePage