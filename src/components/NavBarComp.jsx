import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import logo from './../assets/logo1.png';

const NavBarComp = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: '#d8e6f0' }} expand="lg">
                <Container>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <img src={logo} alt="Logo" style={{ height: '3rem' }} />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='nav-link nav-link-ltr'>
                                <Link to="/" style={{ textDecoration: 'none', color: '#182641', fontWeight: 'bold' }}>
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='nav-link nav-link-ltr'>
                                <Link to="./Services" style={{ textDecoration: 'none', color: '#182641', fontWeight: 'bold' }}>
                                    Services
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='nav-link nav-link-ltr'>
                                <Link to="./Aboutus" style={{ textDecoration: 'none', color: '#182641', fontWeight: 'bold' }}>
                                    AboutUS
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='nav-link nav-link-ltr'>
                                <Link to="./Contact" style={{ textDecoration: 'none', color: '#182641', fontWeight: 'bold' }}>
                                    Contact
                                </Link>
                            </Nav.Link>
                            
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{ color: '#182641' }}
                            />
                            <Button variant="outline-light" style={{ color: '#182641', borderColor: '#182641' }}>
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBarComp;
