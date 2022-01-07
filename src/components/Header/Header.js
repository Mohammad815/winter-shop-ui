import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" class variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
                paddingTop: "1rem"
                }}
                >
                    <Link to="/home">Home</Link>|{" "}
                    <Link to="/about">About</Link>|{" "}
                    <Link to="/contact">Contact</Link>|{" "}
                    <Link to="/addproduct">AddProduct</Link>|{" "}
                    <Link to="/login">Login</Link>
                </nav>
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;