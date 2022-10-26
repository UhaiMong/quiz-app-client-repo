import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const handleToSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fullName,email,password);
    }
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded mt-4 w-50 m-auto'>
            <form onSubmit={handleToSubmit} className="px-4 py-3">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Full name</label>

                    <input name='name' type="text" className="form-control" placeholder="Full name" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>

                    <input name='email' type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>

                    <input name='password' type="password" className="form-control" placeholder="Password" required />
                </div>
                <small>Already have an account <Link to='/login'>Go to login</Link></small>
                <button type="submit" className="btn btn-outline-secondary w-100 mt-4 shadow-lg mb-4 rounded">Register now</button>

                <button type="submit" className="btn btn-outline-secondary w-100 shadow-lg mb-4 rounded"><FaGoogle/> Continue with google</button>
            </form>

        </div>
    );
};

export default RegisterPage;