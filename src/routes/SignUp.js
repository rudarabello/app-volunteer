import logo from '../assets/LogoV.png';
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";
import { useState } from "react";
import { signUpRequest } from '../services/apiRequests';
import { isEmpty } from '../utils/isEmpty';
import { alert } from '../helpers/alert';
import Loading from "../components/Loading";

export default function SignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        e_mail: '',
        phone: '',
        token: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (isEmpty(userInfo)) {
            alert('info', 'Todos os campos devem ser preenchidos');
            return;
          }
          setLoading(true);
          try {
            await signUpRequest(userInfo);
            navigate('../');
            alert('success', 'You are registered on Volunteer!');
          } catch (err) {
            console.log(err);
            const { status } = err.response;
            if (status === 409) {
              return alert('error', 'The user is already registered!');
            }
            alert('error', 'An error has occurred!', err.response.data);
          } finally {
            setLoading(false);
          }
    }
    const handleChange = (e) => {
        setUserInfo((info) => {
          return {
            ...info,
            [e.target.name]: e.target.value,
          };
        });
      };
    
    return (
        <StyledCadastro>
             {loading === false ?
             <Page>
            <form onSubmit={handleSubmit}>
                <Logo onClick={() => navigate('/')} ><img src={logo} alt="logo" /></Logo>
                <input  placeholder="Nome" name="name" onChange={(e) => handleChange(e)} />
                <input  placeholder="E-mail" name="e_mail" onChange={(e) => handleChange(e)} />
                <input  placeholder="Telefone" name="phone" onChange={(e) => handleChange(e)} />
                <input  placeholder="Token" name="token" onChange={(e) => handleChange(e)} />
                <input  type="password" placeholder="Senha" name="password" onChange={(e) => handleChange(e)} />
                <input  type="password" placeholder="Confirme sua senha" name="confirmPassword" onChange={(e) => handleChange(e)} />
                <button type="submit">CADASTRAR</button>
            </form>
            <Link to="/login">
                <Linkto> Já tem uma conta? Faça login!</Linkto>
            </Link>
            </Page>:
            <Loading />} 
        </StyledCadastro>
    )
};


const Linkto = styled.div`
margin-top: 38px;
color: #000000;
font-size: 14px;
font-family: "Roboto";
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

const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;



const StyledCadastro = styled.div`
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
        color: #7E7E7E;
    }
    button{
        margin-top: 8px;
        height: 52px;
        width: 100%;
        border: none;
        border-radius: 8px;
        background-color: #0a47e0;
        font-size: 14px;
        font-weight: 700;
        color: #FFFFFF;
        :hover {
            cursor: pointer;
            text-decoration: none !important;
            box-shadow: 0px 0px 10px rgba(000, 000, 999, 0.1);
            }
    }
`;
const Logo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-bottom: 20px;
img{
    width: 100%;
}
:hover {
    cursor: pointer;
    text-decoration: none !important;
    box-shadow: 0px 0px 10px rgba(000, 000, 999, 0.1);
    }
`;