import { Navigate, Route, Routes } from 'react-router-dom';

import InitialScreen from '../pages/Initial';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export const PublicRoutes = () => (
    <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
);
