import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const Auth = ({ children }) => {
    const user = { displayName: 'Uhai' }
    
    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;