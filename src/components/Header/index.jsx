import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
export const Header = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <button onClick={() => navigate('/sign-up')}>Cadastre-se</button>
            <button onClick={() => navigate('/login')}>Entrar</button>
        </Container>
    );
};

export default Header;
