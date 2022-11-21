import styled from 'styled-components';

export const Page = styled.div`
    background: #8c11be;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const LogOut = styled.div`
    text-align: end;
    width: 100%;
    top: 20px;
    font-size: 15px;
`;
export const Content = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const OverBalance = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    width: 100%;
    min-width: 260px;
    max-width: 326px;

    h1 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
        padding-left: 3px;
    }
    span {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        text-align: right;
        color: #000000;
        padding-right: 3px;
    }
`;

export const TransationArea = styled.div`
    background-color: #ffffff;
    width: 100%;
    min-width: 260px;
    max-width: 326px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    min-height: 446px;
`;
export const Description = styled.div`
    background: #ffffff;
    width: 100%;
    padding-top: 10px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    h1 {
        text-align: start;
        margin-left: 0;
        color: white;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    margin-top: 30px;
    width: 100%;
    flex-direction: column;
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 30px;
        padding-right: 15px;
        width: 100%;
        margin-bottom: 10px;
        border-radius: 5px;
        background-color: #a328d6;
        border: thin solid #a328d6;
        color: #ffffff;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        :hover {
            cursor: pointer;
            box-shadow: 0px 0px 10px rgba(999, 999, 999, 0.9);
        }
    }
`;
export const Icon = styled.div`
    padding-top: 3px;
    position: relative;
    color: #ffffff;
`;
