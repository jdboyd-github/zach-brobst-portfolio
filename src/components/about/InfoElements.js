import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: black;
    background: black;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        padding: 100px;
    }
`;

export const InfoContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Heading = styled.h1`
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