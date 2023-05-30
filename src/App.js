import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Fav } from './components/Favicon';
import { Hel } from './components/Helmet';
import Context from './contexts/Context';
import { HandleRoute } from './routes/HandleRoutes';

export function App() {
    const [data, setData] = useState([{}]);
    return (
        <Context.Provider value={{ data, setData }}>
            <Fav />
            <Hel />
            <BrowserRouter>
                <HandleRoute />
            </BrowserRouter>
        </Context.Provider>
    );
}
