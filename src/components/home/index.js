import React from 'react'
import { HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1 } from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer id='home'>
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Home Page</HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
