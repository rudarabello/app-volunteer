import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import VLogo from '../assets/VLogo.png';

const Home = () => {
    return (
        <Container>
            <Header />
            <TextA>
                <h1>Seja bem-vindo!</h1>
            </TextA>
            <TextB>
            <img src={VLogo} alt="VLogo" width={300}>
            </img>
                <p>
                    Volunteer te ajuda a organizar seu time de voluntários!
                </p>
                <p>
                    Faça sua conta clicando aqui e aproveite!
                </p>
            </TextB>
            <Footer />
        </Container>
    )
}
export default Home

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ebf5fe;
    flex-direction: column;
    gap: 40px;
`;

const TextA = styled.div`
    z-index: 1;
    max-width: 330px;
    margin-top: 25px;
    font-weight: 900;
    font-size: 25px;
    padding-left: 5px;
    color: #140014;
    font-family: 'Raleway';
    font-style: normal;
`;

const TextB = styled.div`
    margin-top: 10px;
    width: 100%;
    text-align: center;
    font-weight: 900;
    font-size: xx-large;
    text-align: center;
    margin-bottom: 40px;
    p{
    padding: 15px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 1.8em;
    color: #140014;
    
    }
`;