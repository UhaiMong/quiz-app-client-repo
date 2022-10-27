import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/Auth';

const Login = () => {
    const { googleLoginProvider, signIn, gitHubLoginProvider } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || '/';

    // login with email and password
    const handleToSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    };


    // google signIn method
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    };
    const gitHubProvider = new GithubAuthProvider();
    const handleToGithubLogin = () => {
        gitHubLoginProvider(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded mt-4 w-100 m-auto'>
            <form onSubmit={handleToSubmit} className="px-4 py-3">
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>

                    <input name='email' type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>

                    <input name='password' type="password" className="form-control" placeholder="Password" required />
                </div>
                <small>No account? <Link to='/register'>Register now</Link></small><br />

                <span className='text-danger'>{error}</span>

                <button type="submit" className="btn btn-outline-secondary w-100 mt-4 shadow-lg mb-4 rounded">Login</button>

            </form>
            <button onClick={handleGoogleLogin} type="submit" className="btn btn-outline-secondary w-100 shadow-lg mb-4 rounded"><FaGoogle /> Continue with google</button>

            <button onClick={handleToGithubLogin} type="submit" className="btn btn-outline-secondary w-100 shadow-lg mb-4 rounded"><FaGithub /> Continue with github</button>

        </div>
    );
};

export default Login;