import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Link to="/home"></Link>
            <Link to="/register"></Link>
            <Link to="/login"></Link>
        </div>
    );
};

export default Header;