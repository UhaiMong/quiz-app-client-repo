import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded mt-4 w-50 m-auto'>
            <form className="px-4 py-3">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Full name</label>

                    <input name='username' type="text" className="form-control" placeholder="Full name" required />
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
                <button type="submit" className="btn btn-secondary w-100 mt-4">Register now</button>
            </form>

        </div>
    );
};

export default RegisterPage;