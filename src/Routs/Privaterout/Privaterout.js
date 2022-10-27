import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/Auth';

const Privaterout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Privaterout;