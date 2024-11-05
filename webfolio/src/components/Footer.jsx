// import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from './ContactForm';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <footer className="footer-custom d-flex justify-content-center align-items-center">
            {/* Contact Me Button */}
            <div className="container d-flex flex-column align-items-center text-center">
                <p>© 2024 Cinnlight</p>
                <span className="me-3">
                    <Button variant="outline-light" onClick={handleShow}>
                        Contact Me
                    </Button>
                    <a
                        {/* Github Icon and Link */}
                        href="https://github.com/cinnlight"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                    >
                        <FaGithub size={30} />
                    </a>
                </span>

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
        </footer>
    )
}

export default Footer