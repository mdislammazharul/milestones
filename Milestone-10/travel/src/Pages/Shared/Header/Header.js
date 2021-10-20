// non - customized

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    // the main part for google login!!
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container style={{ color: 'white' }}>
                    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="header justify-content-end">
                        <HashLink className="me-3" to="/home#home">Home</HashLink>
                        <HashLink className="me-3" to="/home#homeSection1">Section 1</HashLink>
                        <HashLink className="me-3" to="/home#homeSection2">section 2</HashLink>
                        <HashLink className="me-3" to="/page3">Page3</HashLink>
                        <HashLink className="me-3" to="/page4">Page4</HashLink>
                        <HashLink to="/page5" > Page5</HashLink>
                        {user?.displayName && <Navbar.Text>
                            Signed in as: <a className="me-3" href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                        {
                            user?.displayName ?
                                <button onClick={logOut} className="btn btn-light">LogOut</button> :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse >
                </Container >
            </Navbar >
        </div >
    );
};

export default Header;