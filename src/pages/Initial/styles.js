import styled from 'styled-components';

export const Linkto = styled.div`
    margin-top: 8px;
    color: #000000;
    font-size: 14px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    :hover {
        cursor: pointer;
        text-decoration: none !important;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ebf5fe;
    flex-direction: column;
    gap: 40px;
`;

export const TextA = styled.div`
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

export const TextB = styled.div`
    margin-top: 10px;
    width: 100%;
    text-align: center;
    font-weight: 900;
    font-size: xx-large;
    text-align: center;
    margin-bottom: 40px;
    p {
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
    p :last-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;
