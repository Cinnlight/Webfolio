import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import ContactForm from './ContactForm';
import { Modal } from 'react-bootstrap';

function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Webfolio</Link>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={handleShow}>Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Modal */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ContactForm handleClose={handleClose} />
                    </Modal.Body>
                </Modal>
            </div>
        </nav>
    );
}

export default Navbar;
