import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav,
    NavbarContainer,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks } from './NavBarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='home'
                                smooth={true} duration={1000} spy={true} exact='true'
                                >HOME</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='about'
                                smooth={true} duration={1000} spy={true} exact='true'
                                >ABOUT ME</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='portfolio'
                                smooth={true} duration={1000} spy={true} exact='true'
                                >PORTFOLIO</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services'
                                smooth={true} duration={1000} spy={true} exact='true'
                                >SERVICES</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
