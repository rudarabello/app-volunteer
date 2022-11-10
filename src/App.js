import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Fav from './components/Favicon';
import Hel from './components/Helmet';
import Context from './contexts/Context';

export default function App() {
    const [data, setData] = useState([{}]);
    return (
        <Context.Provider value={{ data, setData }}>
            <Fav />
            <Hel />
            <BrowserRouter></BrowserRouter>
        </Context.Provider>
    );
}
