import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to='about'>Biography</FooterLink>
                            <FooterLink to='about'>Testimonials</FooterLink>
                            <FooterLink to='about'>Contact Information</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to='about'>Biography</FooterLink>
                            <FooterLink to='about'>Testimonials</FooterLink>
                            <FooterLink to='about'>Contact Information</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to='about'>Biography</FooterLink>
                            <FooterLink to='about'>Testimonials</FooterLink>
                            <FooterLink to='about'>Contact Information</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to='about'>Biography</FooterLink>
                            <FooterLink to='about'>Testimonials</FooterLink>
                            <FooterLink to='about'>Contact Information</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
