import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

export const PrivateRoutes = () => (
    <Routes>
        <Route path="/home" element={<Home />} />
    </Routes>
);
