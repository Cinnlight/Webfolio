import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

// Asset Imports //
// ArcadeHype
import placeholderIcon from "../assets/placeholder-icon.jpg";
import ArcadeHypeDarkMode from "../assets/project-assets/ArcadeHype-DarkMode.png"
import ArcadeHypeLightMode from "../assets/project-assets/ArcadeHype-LightMode.png"
import ArcadeHypeMobile from "../assets/project-assets/ArcadeHype-Mobile.png"
import ArcadeHypeGif from "../assets/project-assets/ArcadeHypeGif.gif"


function Projects() {
    return (
        <Container className="portfolio my-5 project-body dark-overlay">
            <Row className="g-4">
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="ArcadeHype!"
                        description="One stop shop for game release tracking."
                        repoLink="https://github.com/Cinnlight/ArcadeHype"
                        deployLink="https://cinnlight.github.io/ArcadeHype/"
                        techStack="HTML, CSS, TailwindCSS, JavaScript"
                        image={ArcadeHypeGif}
                        images={[ArcadeHypeDarkMode, ArcadeHypeLightMode, ArcadeHypeMobile, ArcadeHypeGif]}
                        className="dark-overlay"
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Project 2"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                        images={[placeholderIcon]}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>            
                    <ProjectCard
                        title="Project 3"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                        images={[placeholderIcon]}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Project 4"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                        images={[placeholderIcon]}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Project 5"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                        images={[placeholderIcon]}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Project 6"
                        description="This is a project description."
                        repoLink="https://github.com/Cinnlight/employee-tracker"
                        image={placeholderIcon}
                        images={[placeholderIcon]}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;