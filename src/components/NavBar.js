import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream:src/components/NavBar.js
import SignUpForm from './signupForm';
import LoginForm from './loginForm';
import myTrips from './pages/MyTrips';
import ChatGPT from './ChatGPT';
import Auth from '../utils/auth';

const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);
=======
import SignUpForm from '../components/signupForm';
import LoginForm from '../components/loginForm';
import Auth from '../utils/auth';
import { Nav, Modal, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
>>>>>>> Stashed changes:client/src/components/Navigation.js

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
<<<<<<< Updated upstream:src/components/NavBar.js
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
=======
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            JetSetGo!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav>
              {!Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/mytrips'>
                    My Trips
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={handleShowModal}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleCloseModal} className='custom-modal'>
        <Modal.Header closeButton>
          <Nav variant='tabs' defaultActiveKey='login'>
            <Nav.Item>
              <Nav.Link eventKey='login'>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Header>
        <Modal.Body className='modal-content'>
          {showModal === 'login' ? <LoginForm handleCloseModal={handleCloseModal} /> : <SignUpForm handleCloseModal={handleCloseModal} />}
        </Modal.Body>
      </Modal>
>>>>>>> Stashed changes:client/src/components/Navigation.js
    </>
  );
};

<<<<<<< Updated upstream:src/components/NavBar.js
export default AppNavbar;
=======
export default Navigation;
>>>>>>> Stashed changes:client/src/components/Navigation.js
