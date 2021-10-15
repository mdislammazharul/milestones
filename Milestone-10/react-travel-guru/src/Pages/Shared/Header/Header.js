// non - customized

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    // the main part for google login!!
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#homeSection1">Section 1</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#homeSection2">section 2</Nav.Link>
                        <Nav.Link as={HashLink} to="/page3">Page3</Nav.Link>
                        <Nav.Link as={HashLink} to="/page4">Page4</Nav.Link>
                        <Nav.Link as={HashLink} to="/page5">Page5</Nav.Link>
                        {user?.displayName && <Navbar.Text>
                            Signed in as: <a className="me-3" href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                        {user?.displayName ?
                            <button onClick={logOut} className="btn btn-light">LogOut</button> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;