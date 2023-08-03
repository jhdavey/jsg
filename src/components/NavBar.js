import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signupForm';
import LoginForm from './loginForm';
import myTrips from './pages/MyTrips';
import ChatGPT from './ChatGPT';
import Auth from '../utils/auth';

const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                JetSetGo!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar' />
                <Navbar.Collaspe id='navbar'>
                    <Nav>
                        {/* The navbar will show these links after you log in */}
                        {!Auth.loggedIn()? (
                        <>
                        <Nav.Link as={Link} to='/MyTrips'>
                        My Trips
                        </Nav.Link>
                        <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                        </>
                        ) : (
                        <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collaspe>  
            </Container>
        </Navbar>
        
        {showModal && (
                <Modal.Header className="custom-modal">
                    <Modal.Container className="modal-content">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link eventKey='login'>Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Container className="modal-body">
                            { <LoginForm handleModalClose={() => setShowModal(false)} /> }
                            { <SignUpForm handleModalClose={() => setShowModal(false)} /> }
                        </Container>
                    </Modal.Container>
                </Modal.Header>
            )}
    </>
    );
};

export default AppNavbar;