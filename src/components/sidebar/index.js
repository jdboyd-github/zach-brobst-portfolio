import React from 'react'
import { SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>HOME</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>ABOUT ME</SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle}>PORTFOLIO</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>SERVICES</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
