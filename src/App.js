import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fav from "./components/Favicon";
import Hel from "./components/Helmet";
import Context from "./contexts/Context";
import InitialScreen from "./routes/InitialScreen";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp.js";


export default function App() {
    const [data, setData] = useState([{}]);
    return (
        <Context.Provider value={{ data, setData }}>
            <Fav />
            <Hel />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitialScreen />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />                    
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}