import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from '../../assets/logo/tyLogo.png'
import './Header.css'
import { LinkContainer } from 'react-router-bootstrap'
import Sidebar from '../Sidebar/Sidebar';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/Auth/Auth';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleToLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='header'>
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

                            <LinkContainer to="/courses">
                                <Nav.Link>Courses</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/faq">
                                <Nav.Link>FAQ</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/blog">
                                <Nav.Link>Blog</Nav.Link>
                            </LinkContainer>

                            <Nav.Link className='d-lg-block d-none' href="#theme">
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="theme"
                                />
                            </Nav.Link>
                        </Nav>

                        <Nav className='user-info'>
                            <span className='text-white'>{user?.displayName}</span>
                            {
                                user?.uid ?
                                    <Nav.Link onClick={handleToLogout}>Logout</Nav.Link>
                                    :
                                    <LinkContainer to="/login">
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>
                            }


                            {
                                user?.photoURL ?
                                    <div title={user?.displayName} className='user'>
                                        <img src={user?.photoURL} className="img-fluid rounded-5" alt="user" />
                                    </div>

                                    :
                                    <div title={user?.displayName} className='user'>
                                        <img src={logo} className="img-fluid rounded-5" alt="user" />
                                    </div>
                            }
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