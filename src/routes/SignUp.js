import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import logo from '../assets/LogoV.png';

export default function SignUp() {
    const navigate = useNavigate();
    const API = "https://back-project-mywallet-ruda.herokuapp.com/sign-up";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const register = {
            email,
            name,
            phone,
            token,
            password,
            Cpassword
        };
        const promise = axios.post(API, register);
        promise.then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        });
        promise.catch((err) => {
            alert(err);
        });
    }
    return (
        <StyledCadastro>
            <form onSubmit={handleSubmit}>
                <Logo onClick={() => navigate('/')} ><img src={logo} alt="logo" /></Logo>
                <input type="name" placeholder="Nome " onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                <input type="telefone" placeholder="Telefone" onChange={(e) => setPhone(e.target.value)} />
                <input type="token" placeholder="Token" onChange={(e) => setToken(e.target.value)} />
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirme a senha" onChange={(e) => setCPassword(e.target.value)} />
                <button type="submit">CADASTRAR</button>
            </form>
            <Link to="/login">
                <Linkto> Já tem uma conta? Faça login!</Linkto>
            </Link>
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