import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import '../styles/ProjectCard.css';


const ProjectCard = ({ title, description, repoLink, image }) => {
    return (
        <Card className="project-card">
            <div 
                className="project-image"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
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
    );
}

export default ProjectCard;