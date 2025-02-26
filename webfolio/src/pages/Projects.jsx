import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

// Asset Imports //
import placeholderIcon from "../assets/placeholder-icon.jpg";

// ArcadeHype
import ArcadeHypeDarkMode from "../assets/project-assets/ArcadeHype-DarkMode.png"
import ArcadeHypeLightMode from "../assets/project-assets/ArcadeHype-LightMode.png"
import ArcadeHypeMobile from "../assets/project-assets/ArcadeHype-Mobile.png"
import ArcadeHypeGif from "../assets/project-assets/ArcadeHypeGif.gif"

// FantasyFighter
import FantasyFighterCombatGif from "../assets/project-assets/FantasyFighter-combatGif.gif"
import FantasyFighterCombat from "../assets/project-assets/FantasyFighter-combat.png"
import FantasyFighterLevels from "../assets/project-assets/FantasyFighter-levels.png"
import FantasyFighterLogin from "../assets/project-assets/FantasyFighter-login.png"

// HyruleCompendium
import HyruleCompendiumHome from "../assets/project-assets/HyruleCompendium-home.png"
import HyruleCompendiumLogin from "../assets/project-assets/HyruleCompendium-login.png"
import HyruleCompendiumPage from "../assets/project-assets/HyruleCompendium-page.png"
import HyruleCompendiumVerify from "../assets/project-assets/HyruleCompendium-verify.png"

// Social Media API
import SocialMediaAPIInsomnia from "../assets/project-assets/SocialMediaAPI-insomnia.png"
import SocialMediaAPIRouteGif from "../assets/project-assets/SocialMediaAPI-routeGIF.gif"
import SocialMediaAPIRoutes from "../assets/project-assets/SocialMediaAPI-routes.png"


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
                        title="Fantasy Fighter"
                        description="A classic turn-based RPG for the web."
                        repoLink="https://github.com/MagicInUse/Fantasy-Fighter"
                        deployLink="https://project-2-c43n.onrender.com/"
                        techStack="PERN stack, TypeScript, Bootstrap"
                        image={FantasyFighterCombatGif}
                        images={[FantasyFighterLogin, FantasyFighterLevels, FantasyFighterCombat, FantasyFighterCombatGif]}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>            
                    <ProjectCard
                        title="Hyrule Compendium"
                        description="A wiki-like social experience for the first The Legend of Zelda game."
                        repoLink="https://github.com/Cinnlight/Hyrule-Compendium"
                        deployLink="https://hyrule-compendium.magicapps.dev/"
                        techStack="PERN stack, Typescript, CSS"
                        image={HyruleCompendiumHome}
                        images={[HyruleCompendiumPage, HyruleCompendiumLogin, HyruleCompendiumVerify]}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Social Media API"
                        description="An API that supports a spread of classic social media actions."
                        repoLink="https://github.com/Cinnlight/Social-Media-API"
                        techStack="MERN stack, Typescript"
                        image={SocialMediaAPIRouteGif}
                        images={[SocialMediaAPIRoutes, SocialMediaAPIInsomnia, SocialMediaAPIRouteGif]}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <ProjectCard
                        title="Kanban Board with Auth"
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