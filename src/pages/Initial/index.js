import { Link } from 'react-router-dom';
import * as style from './styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import VLogoComplete from '../assets/VLogoComplete.png';

const Home = () => {
    return (
        <style.Container>
            <Header />
            <style.TextA>
                <h1>Seja bem-vindo!</h1>
            </style.TextA>
            <style.TextB>
                <img src={VLogoComplete} alt="VLogo" width={300}></img>
                <p>Volunteer te ajuda a organizar seu time de voluntários!</p>
                <p>
                    Faça sua conta clicando
                    <Link to="/sign-up">
                        <style.Linkto>AQUI</style.Linkto>
                    </Link>{' '}
                    e aproveite!
                </p>
            </style.TextB>
            <Footer />
        </style.Container>
    );
};
export default Home;
