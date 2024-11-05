import React, { useState } from 'react';
import { Card, Modal, Carousel, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import '../styles/custom-theme.scss';


const ProjectCard = ({ title, description, repoLink, image, images = [] }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Card className="project-card" onClick={handleShow}>
            <div 
                className="project-image rounded"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <Card.Body>
                <Card.Title className="text-outline">{title}</Card.Title>
                <Card.Text className="text-outline">{description}</Card.Text>
                <a 
                href={repoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-icon"
                >
                    <FaGithub size={24} />
                </a>
            </Card.Body>
        </Card>

        {/* Project Card Modal */}
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{description}</p>

                {/* Image Carousel */}
                <Carousel>
                    {Array.isArray(images) && images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100 rounded"
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
};

export default ProjectCard;