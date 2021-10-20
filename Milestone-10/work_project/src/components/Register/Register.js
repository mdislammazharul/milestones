import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>
                <h2>Please Register</h2>
                <form>
                    <input type="email" />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="text" value="submit" />
                </form>
                <Link to="/login">Already Registered?</Link>
            </h2>
        </div>
    );
};

export default Register;