import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" class variant="dark">
                <Container className='main'>
                <Navbar.Brand href="#home" className='header'>Winter</Navbar.Brand>
                <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
                paddingTop: "1rem"
                }}
                >
                    <Link to="/home"className='header' >Home</Link>|{" "}
                    <Link to="/about" className='header'>About</Link>|{" "}
                    <Link to="/contact" className='header'>Contact</Link>|{" "}
                    <Link to="/blog" className='header'>Blog</Link>|{" "}
                    {/* <Link to="/addproduct" className='header'>AddProduct</Link>|{" "} */}
                    <Link to="/login" className='header'>Login</Link>
                </nav>
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;