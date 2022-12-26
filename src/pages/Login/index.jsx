import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as style from './style';
import { alert } from '../../helpers/alert';
import { signInRequest } from '../../services/apiRequests';
import { isEmpty } from '../../utils/isEmpty';
import Context from '../../contexts/Context';
import  LogoV from '../../assets/LogoV.png';
import groupOfVolunteers from'../../assets/groupOfVolunteers.jpg';
import Loading from '../../components/Loading';
import { localhost } from '../../services/api';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const localUser = localStorage.getItem('user');
    const navigate = useNavigate();
    const { setData } = useContext(Context);
    const tempAxiosFunction = useRef();
    const axiosFunction = () => {
        if (localUser) {
            const localUserParse = JSON.parse(localUser);
            setEmail(localUserParse.email);
            setPassword(localUserParse.password);
        }
    };
    tempAxiosFunction.current = axiosFunction;
    useEffect(() => {
        tempAxiosFunction.current();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
        };
        if (isEmpty(user)) {
            alert('info', 'All fields must be filled!');
            return;
        }
        setLoading(true);
        try {
            console.log('aqui');
            const {data} = await signInRequest(user);
            console.log(data);
            setData(data);
            localStorage.removeItem('user');
            localhost.defaults.headers['Authorization'] = data.token;
            const userStrigify = JSON.stringify(user);
            localStorage.setItem('user', userStrigify);
            navigate('/home');
        } catch (error) {
            console.log(error)
            alert('error', 'An error has occurred!', error.response.data);
        } finally {
            setLoading(false);
        }
    };
    return (
        <style.StyledLogin>
            {loading === false ? (
                <style.Container>
                <img src={groupOfVolunteers}></img>
                <style.MiniContainer>
                <style.Page>                    
                    <img onClick={() => navigate('/')} src={LogoV} alt="Logo Volunteer" />
                    <form onSubmit={(e) => handleLogin(e)}>
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
                </style.MiniContainer>
                </style.Container>
            ) : (
                <Loading />
            )}
        </style.StyledLogin>
    );
}
