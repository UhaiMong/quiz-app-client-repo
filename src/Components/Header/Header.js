import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from '../../assects/logo/tyLogo.png'
import './Header.css'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand className='d-flex align-items-center'>
                        <img
                            alt="website logo"
                            src={logo}
                            width="60"
                            height="60"
                            className="img-fluid"
                        />{' '}
                        <h4 className='d-lg-block d-none'>Teach Yourself</h4>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link to="/courses">Courses</Nav.Link>
                            <Nav.Link to="/faq">FAQ</Nav.Link>
                            <Nav.Link to="/blog">Blog</Nav.Link>
                            <Nav.Link className='d-lg-block d-none' href="#theme">
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="theme"
                                />
                            </Nav.Link>
                        </Nav>

                        <Nav className='user-info'>
                            <Nav.Link href="#deets">user email</Nav.Link>
                            <Nav.Link href="#memes">
                                <div className='user'>
                                    <img src={logo} class="img-fluid" alt="user" />
                                </div>
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none d-block'>
                            <Sidebar></Sidebar>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;