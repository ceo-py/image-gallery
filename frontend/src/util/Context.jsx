import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};