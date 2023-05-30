import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #c4c4c4;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
`;
export const Contact = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 32px;
    margin-top: 20px;
    text-decoration: none;
    color: #140014;
`;
export const CopyRights = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    color: #140014;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    font-size: 12px;
    span {
        font-size: 10px;
    }
`;
