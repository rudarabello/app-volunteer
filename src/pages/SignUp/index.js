import logo from '../assets/LogoV.png';
import { Link, useNavigate } from 'react-router-dom';
import * as style from './style';
import { useState } from 'react';
import { signUpRequest } from '../services/apiRequests';
import { isEmpty } from '../utils/isEmpty';
import { alert } from '../helpers/alert';
import Loading from '../components/Loading';

export default function SignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        e_mail: '',
        phone: '',
        token: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = async (e) => {
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
    };
    const handleChange = (e) => {
        setUserInfo((info) => {
            return {
                ...info,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <style.StyledCadastro>
            {loading === false ? (
                <style.Page>
                    <form onSubmit={handleSubmit}>
                        <style.Logo onClick={() => navigate('/')}>
                            <img src={logo} alt="logo" />
                        </style.Logo>
                        <input placeholder="Nome" name="name" onChange={(e) => handleChange(e)} />
                        <input placeholder="E-mail" name="e_mail" onChange={(e) => handleChange(e)} />
                        <input placeholder="Telefone" name="phone" onChange={(e) => handleChange(e)} />
                        <input placeholder="Token" name="token" onChange={(e) => handleChange(e)} />
                        <input type="password" placeholder="Senha" name="password" onChange={(e) => handleChange(e)} />
                        <input type="password" placeholder="Confirme sua senha" name="confirmPassword" onChange={(e) => handleChange(e)} />
                        <button type="submit">CADASTRAR</button>
                    </form>
                    <Link to="/login">
                        <style.Linkto> Já tem uma conta? Faça login!</style.Linkto>
                    </Link>
                </style.Page>
            ) : (
                <Loading />
            )}
        </style.StyledCadastro>
    );
}
