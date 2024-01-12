import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dp.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>LET ME INTRODUCE MYSELF</h1>
            <p className="home-about-body">
              I am a driven and detail-oriented Computer Engineering
              undergraduate at the University of Peradeniya, with a keen
              interest in the dynamic world of Computing and Mathematics. My
              academic journey so far has equipped me with a solid foundation in
              the principles of computer systems and relevant technologies. I
              thrive on challenges and am passionate about unraveling complex
              problems in the realm of computing and mathematics. Whether it's
              optimizing computing performance or implementing innovative
              solutions, I am committed to finding effective and efficient
              answers.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
                style={{ width: "300px", height: "400px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to connect with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Prageeth-Dananjaya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prageeth-wickramaarachchi-716506279/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
