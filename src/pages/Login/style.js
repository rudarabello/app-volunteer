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
        box-shadow: 0px 0px 10px rgba(000, 000, 999, 0.1);
    }
`;

export const StyledLogin = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ebf5fe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    img {
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
    }
`;
export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 240px;
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 25px;
    }
    img {
        :hover {
            cursor: pointer;
            text-decoration: none !important;
            box-shadow: 0px 0px 10px rgba(000, 000, 999, 0.1);
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 45px;
    background: white;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 11px;
    margin-top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7e7e7e;
`;

export const FormButton = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    background: #0a47e0;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-top: 20px;
    :hover {
        cursor: pointer;
        text-decoration: none !important;
        box-shadow: 0px 0px 10px rgba(000, 000, 999, 0.1);
    }
`;
