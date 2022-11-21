import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as style from './style';
import axios from 'axios';
import Context from '../contexts/Context';
import logo from '../assets/LogoV.png';
import Loading from '../components/Loading';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const localUser = localStorage.getItem('user');
    const navigate = useNavigate();
    const { setData } = useContext(Context);
    const URL = 'https://back-project-mywallet-ruda.herokuapp.com/login';
    const tempAxiosFunction = useRef();
    const axiosFunction = () => {
        if (localUser !== null) {
            const localUserParse = JSON.parse(localUser);
            setEmail(localUserParse.email);
            setPassword(localUserParse.password);
        }
    };
    tempAxiosFunction.current = axiosFunction;
    useEffect(() => {
        tempAxiosFunction.current();
    }, []);
    function handleLogin(e) {
        e.preventDefault();
        const user = {
            email,
            password,
        };
        const promise = axios.post(URL, user);
        const wait = promise.then();
        if (!wait) {
            <Loading />;
        } else {
            promise.then((response) => GoTo(response.data));
            promise.catch((error) => alert(error.message));
        }
    }
    function GoTo(data) {
        setData(data);
        const user = { email, password };
        localStorage.removeItem('user');
        const userStrigify = JSON.stringify(user);
        localStorage.setItem('user', userStrigify);
        navigate('/wallet');
    }
    setTimeout(() => setLoading(true), 1000);
    return (
        <style.StyledLogin>
            {loading === true ? (
                <style.Page>
                    <img onClick={() => navigate('/')} src={logo} alt="Logo My Wallet" />
                    <form onSubmit={handleLogin}>
                        <style.Input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                            placeholder="E-mail"
                            type="email"
                            required
                            autoComplete="email"
                        />
                        <style.Input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            placeholder="Senha"
                            type="password"
                            required
                            autoComplete="password"
                        />
                        <style.FormButton type="submit">ENTRAR</style.FormButton>
                    </form>
                    <Link to="/sign-up">
                        <style.Linkto>Primeira vez? Cadastre-se!</style.Linkto>
                    </Link>
                </style.Page>
            ) : (
                <Loading />
            )}
        </style.StyledLogin>
    );
}
