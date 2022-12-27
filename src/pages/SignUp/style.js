import styled from 'styled-components';

export const Linkto = styled.div`
    margin-top: 38px;
    color: #000000;
    font-size: 14px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-decoration: none !important;
    :hover {
        cursor: pointer;
        text-decoration: none !important;
        box-shadow: 0px 0px 10px rgba(000, 000, 999, 0.1);
    }
`;

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledCadastro = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ebf5fe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        max-width: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }
    input {
        height: 52px;
        width: 100%;
        border: none;
        border-radius: 8px;
    }
    input::placeholder {
        font-size: 14px;
        color: #7e7e7e;
    }
    button {
        margin-top: 8px;
        height: 52px;
        width: 100%;
        border: none;
        border-radius: 8px;
        background-color: #0a47e0;
        font-size: 14px;
        font-weight: 700;
        color: #ffffff;
        :hover {
            cursor: pointer;
            text-decoration: none !important;
            box-shadow: 0px 0px 10px rgba(000, 000, 999, 0.1);
        }
    }
`;
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    img {
        width: 100%;
    }
    :hover {
        cursor: pointer;
        text-decoration: none !important;
        box-shadow: 0px 0px 10px rgba(000, 000, 999, 0.1);
    }
`;
