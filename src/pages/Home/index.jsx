import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect, useRef } from 'react';
import Context from '../../contexts/Context';
import * as style from './styles';
import Loading from '../../components/Loading';
import { TiDocumentText } from 'react-icons/ti';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { VscPieChart } from 'react-icons/vsc';
import { IoIosLogOut } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';

export default function Home() {
    const { data } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [operations, setOperations] = useState([]);
    const [total, setTotal] = useState();
    const navigate = useNavigate();
    const axiosFunction = () => {
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.get(ApiGet, config);
        promise.then((response) => setOperations(response.data));
        promise.catch(() => {
            alert('Por favor faça o login!');
            navigate('/');
        });
    };
    tempAxiosFunction.current = axiosFunction;

    useEffect(() => {
        tempAxiosFunction.current();
    }, []);

    useEffect(() => {
        if (operations) {
            const values = operations.map(({ value }) => {
                return value;
            });
            let balance = 0;
            for (let j = 0; j < values.length; j++) {
                balance += values[j];
            }
            balance = balance.toFixed(2);
            balance = balance.toString().replace('.', ',');
            setTotal(balance);
        }
    }, [operations]);
    function logoutButton() {
        const API = `https://back-project-mywallet-ruda.herokuapp.com/logout`;
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.delete(API, config);
        promise
            .then(() => {
                alert('Logout feito com Sucesso!');
                navigate('/');
            })
            .catch((err) => {
                alert(err);
            });
    }
    setTimeout(() => setLoading(true), 1000);

    return (
        <style.Page>
            {loading === true ? (
                <>
                    <style.Content>
                        <style.LogOut onClick={() => logoutButton()}>
                            <IoIosLogOut color={'#ffffff'} fontSize="2.5em" />
                        </style.LogOut>
                        <style.Header>
                            <h1>Olá, {data.name}</h1>
                        </style.Header>
                        <style.TransationArea>
                            <style.Description></style.Description>
                        </style.TransationArea>
                        <style.OverBalance>
                            {operations.length === 0 ? (
                                ''
                            ) : (
                                <>
                                    <h1>SALDO</h1>
                                    <span>R$ {total}</span>
                                </>
                            )}
                        </style.OverBalance>
                        <style.Buttons>
                            <button onClick={() => navigate('/input')}>
                                <span>Nova Entrada</span>
                                <style.Icon>
                                    <AiOutlinePlusCircle fontSize="1.5em" />
                                </style.Icon>
                            </button>
                            <button onClick={() => navigate('/output')}>
                                <span>Nova Saída</span>
                                <style.Icon>
                                    <AiOutlineMinusCircle fontSize="1.5em" />
                                </style.Icon>
                            </button>
                            <button onClick={() => navigate('/extract')}>
                                <span>Extratos</span>
                                <style.Icon>
                                    <TiDocumentText fontSize="1.5em" />
                                </style.Icon>
                            </button>
                            <button onClick={() => navigate('/chart')}>
                                <span>Gráficos</span>
                                <style.Icon>
                                    <VscPieChart fontSize="1.5em" />
                                </style.Icon>
                            </button>
                            <button onClick={() => navigate('/category')}>
                                <span>Categorias</span>
                                <style.Icon>
                                    <AiOutlineUnorderedList fontSize="1.5em" />
                                </style.Icon>
                            </button>
                        </style.Buttons>
                    </style.Content>
                </>
            ) : (
                <Loading />
            )}
        </style.Page>
    );
}
