import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/Auth';

const Login = () => {
    
    const handleToSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };


    const { googleLoginProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
        })
    }
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded mt-4 w-50 m-auto'>
            <form onSubmit={handleToSubmit} className="px-4 py-3">
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>

                    <input name='email' type="email" className="form-control" placeholder="Email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>

                    <input name='password' type="password" className="form-control" placeholder="Password" required/>
                </div>
                <small>No account? <Link to='/register'>Register now</Link></small>

                <button type="submit" className="btn btn-outline-secondary w-100 mt-4 shadow-lg mb-4 rounded">Login</button>

            </form>
                <button onClick={handleGoogleLogin} type="submit" className="btn btn-outline-secondary w-100 shadow-lg mb-4 rounded"><FaGoogle/> Continue with google</button>

        </div>
    );
};

export default Login;