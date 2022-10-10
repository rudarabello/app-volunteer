import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
            <Container>
                <button onClick={() => navigate('/sign-up')}>Cadastre-se</button>
                <button onClick={() => navigate('/login')}>Entrar</button>
            </Container>
    )
}

export default Header

const Container = styled.div`
    z-index: 2;
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    display: flex;
    background-color: #0a47e0;
    top: 0;
    button{
    min-width: 110px;
    height: 45px;
    border: none;
    background: #00aeef;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-right: 10px;
    margin-left: 10px;
    }
`;