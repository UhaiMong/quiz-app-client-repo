import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google login
    const googleLoginProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    };
    // github login
    const gitHubLoginProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
        
    }
    // creating new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn existing account
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // profile update using fullname and email
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Logout from account
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // controlling outside event. 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user State",currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        updateUserProfile,
        googleLoginProvider,
        gitHubLoginProvider,
        logOut,
        createUser,
        signIn,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;