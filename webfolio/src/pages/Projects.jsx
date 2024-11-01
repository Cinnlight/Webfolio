import React from "react";
import ProjectCard from "../components/ProjectCard";
import placeholderIcon from "../assets/placeholder-icon.jpg";
import { Container, Row, Col } from "react-bootstrap";


function Projects() {
    return (
        <Container className="portfolio my-5">
            <Row className="g-4">
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Project 1"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Project 2"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>            
                    <ProjectCard
                        title="Project 3"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Project 4"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Project 5"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Project 6"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;