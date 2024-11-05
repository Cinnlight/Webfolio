// import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from './ContactForm';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <footer className="footer-custom d-flex justify-content-center align-items-center">
            {/* Contact Me Button */}
            <div className="container d-flex flex-column align-items-center text-center mt-3">
                <span>
                    <Button variant="outline-light" onClick={handleShow}>
                        Contact Me
                    </Button>
                    {/* Github Icon and Link */}
                    <a
                        href="https://github.com/cinnlight"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                    href="https://www.linkedin.com/in/hailey-smith-b770b9336/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-icon"
                    >
                    <FaLinkedin size={30} />
                    </a>
                </span>
                <p className="mt-1 me-2">© 2024 | Cinnlight</p>

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