import styled from 'styled-components'

export const PortfolioContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768) {
        height 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const PortfolioH1 = styled.h1`
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