import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/signupForm';
import LoginForm from '../components/loginForm';
import { AuthContext } from "../context/authContext";
import { Nav, Modal, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
    const { user, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();
        window.location.assign('/');
    }

    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState('login'); // Added mode state to manage login/signup
    const handleModalClose = () => {
        setShowModal(false);
        setMode('login'); // Reset mode when modal is closed
    };
    return (
        <>
           <Navbar>
             <Container>
                 <Navbar.Brand as={Link} to='/'>
                 JetSetGo!
                 </Navbar.Brand>
                 <Navbar.Toggle aria-controls='navbar' />
                 <Navbar.Collapse id='navbar'>
                     <Nav>
                         { user ? (
                        <>
                        <Nav.Link as={Link} to='/mytrips'>
                        My Trips
                        </Nav.Link>
                        <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                        </>
                        ) : (
                        <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>  
            </Container>
        </Navbar>
            {/* Modal */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header className="custom-modal">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="login"
                                onClick={() => setMode('login')}>
                                Login
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="signup"
                                onClick={() => setMode('signup')}>
                                Sign Up
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Modal.Header>
                <Modal.Body className="modal-content">
                    {mode === 'login' && (
                        <LoginForm handleModalClose={handleModalClose} />
                    )}
                    {mode === 'signup' && (
                        <SignUpForm handleModalClose={handleModalClose} />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};
export default Navigation;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import SignUpForm from '../components/signupForm';
// import LoginForm from '../components/loginForm';
// import Auth from '../utils/auth';
// import {Nav, Modal, Navbar, Container } from "react-bootstrap";

// const Navigation = () => {
//     const [showModal, setShowModal] = useState(false);

//     return (
//     <>
//         <Navbar>
//             <Container>
//                 <Navbar.Brand as={Link} to='/'>
//                 JetSetGo!
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls='navbar' />
//                 <Navbar.Collapse id='navbar'>
//                     <Nav>
//                         {/* The navbar will show these links after you log in */}
//                         {!Auth.loggedIn()? (
//                         <>
//                         <Nav.Link as={Link} to='/mytrips'>
//                         My Trips
//                         </Nav.Link>
//                         <Nav.Link onClick={Auth.login}>Login</Nav.Link>
//                         </>
//                         ) : (
//                         <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>  
//             </Container>
//         </Navbar>
        
//         {showModal && (
//                 <Modal.Header className="custom-modal">
//                     <Modal.Container className="modal-content">
//                         <Nav>
//                             <Nav.Item>
//                                 <Nav.Link eventKey='login'>Login</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                         <Container className="modal-body">
//                             { <LoginForm handleModalClose={() => setShowModal(false)} /> }
//                             { <SignUpForm handleModalClose={() => setShowModal(false)} /> }
//                         </Container>
//                     </Modal.Container>
//                 </Modal.Header>
//             )}
//     </>
//     );
// };

// export default Navigation;