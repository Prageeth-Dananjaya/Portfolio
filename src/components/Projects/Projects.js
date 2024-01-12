import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">My Recent Works</h1>
        <p style={{ color: "white" }}>
          Here is the short drama we have done for module "Introduction to
          Digital Art".
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              youtubeVideoId="O9uhekenxj0"
              title="EF528 - Introduction to Digital Art - Short Drama"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
