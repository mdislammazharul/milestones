import React from 'react';
import { Container, Nav } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbar;