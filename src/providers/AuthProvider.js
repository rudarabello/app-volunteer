import { createContext, useContext, useEffect, useState } from 'react';

import { alert } from '../helpers/alert';
import { api } from '../services/api';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('VolunteerAuthUser');
        const storagedToken = localStorage.getItem('VolunteerAuthToken');

        if (storagedUser && storagedToken) {
            api.defaults.headers['Authorization'] = storagedToken;
            setUserData(JSON.parse(storagedUser));
        }
    }, []);

    const logout = (sessionExpired = true) => {
        if (sessionExpired) {
            alert('error', 'Your session expired', 'Log in again!');
        }
        setUserData(null);
        localStorage.removeItem('VolunteerAuthUser');
        localStorage.removeItem('VolunteerAuthToken');
    };

    return (
        <AuthContext.Provider
            value={{
                signed: !!userData,
                userData,
                setUserData,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};
