import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am Prageeth Dananjaya from SriLanka.
            <br />
            I am currently an undergraduate at the University of Peradeniya.
            <br />
            I completed DiTEC offered from ESOFT Metro campus
            <br />
            And also I am a former student from Bandaranayake College Gampaha.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
