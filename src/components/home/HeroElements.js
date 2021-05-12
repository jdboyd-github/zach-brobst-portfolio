import styled from 'styled-components'
import Waves from '../../images/waves.png'
import Background from '../../images/background.png'

export const HeroContainer = styled.div`
    background: url('${ Background }');
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    background-position: center;
    z-index: 1;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-wdith: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroBg = styled.div`
    background: url(${ Waves });
    position: relative;
    width: 100vw;
    height: 100vh;
    background-size: cover;
`;