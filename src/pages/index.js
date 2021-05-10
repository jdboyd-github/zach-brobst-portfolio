import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import HeroSection from '../components/home'
import InfoSection from '../components/about'
import Portfolio from '../components/portfolio'
import Services from '../components/services'
import Footer from '../components/footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection />
            <Portfolio />
            <Services />
            <Footer />
        </>
    )
}

export default Home
