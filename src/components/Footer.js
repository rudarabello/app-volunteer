import React from 'react';
import styled from 'styled-components';
import Github from '../assets/1.png';
import Linkedin from '../assets/2.png';
import Twitter from '../assets/3.png';


function Footer() {
  return (
    <Container>
      <Contact>
        <a aria-label="Github" href="https://github.com/rudarabello" rel="noopener noreferrer">
        <img alt="Github" src={Github} width ={50}/></a>
        <a aria-label="Linkedin" href="https://www.linkedin.com/in/ruda-rabello-da-silva/" rel="noopener noreferrer">
        <img alt="Linkedin" src={Linkedin} width ={42}/></a>
        <a aria-label="Twitter" href="https://twitter.com/rudarabello" rel="noopener noreferrer">
        <img alt="Twitter" src={Twitter} width ={42}/></a>
      </Contact>
      <CopyRights>
        <span>Develop by © Rudá Rabello. All Rights Reserved.</span>
      </CopyRights>
    </Container>
  )
}

export default Footer

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #c4c4c4;
position: absolute; 
left: 0 ; right: 0; bottom: 0;

`;
const Contact = styled.div`
width: 300px;
display: flex;
flex-direction: row;
justify-content: space-around;
font-size: 32px;
margin-top: 20px;
text-decoration: none;
color:#140014 ;
`;
const CopyRights = styled.div`
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
span{
  font-size: 10px;
}

`;