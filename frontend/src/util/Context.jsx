import {createContext, useContext, useState} from 'react';
import {AuthCheck} from "./AuthCheck.jsx";


const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(AuthCheck());
    const [user, setUser] = useState(null);


    console.log('auth from context', auth)

    return (
        <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};