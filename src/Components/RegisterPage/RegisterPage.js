import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/Auth';

const RegisterPage = () => {
    const { googleLoginProvider, createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleToSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                alert("You registration is successful");
                navigate('/courses');
                profileUpdateHandler(fullName, photoURL);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    const profileUpdateHandler = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses')
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded mt-4 w-100 m-auto'>
            <form onSubmit={handleToSubmit} className="px-4 py-3">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Full name</label>

                    <input name='name' type="text" className="form-control" placeholder="Full name" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="photoURL" className="form-label">photoURL</label>

                    <input name='photoURL' type="text" className="form-control" placeholder="photoURL" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>

                    <input name='email' type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>

                    <input name='password' type="password" className="form-control" placeholder="Password" required />
                </div>
                <small>Already have an account <Link to='/login'>Go to login</Link></small><br />

                <span className='text-danger'>{error}</span>

                <button type="submit" className="btn btn-outline-secondary w-100 mt-4 shadow-lg mb-4 rounded">Register now</button>

            </form>
            <button onClick={handleGoogleLogin} type="submit" className="btn btn-outline-secondary w-100 shadow-lg mb-4 rounded"><FaGoogle /> Continue with google</button>

        </div>
    );
};

export default RegisterPage;