// ProjectCards.js

import React from "react";
import Card from "react-bootstrap/Card";
import YouTube from "react-youtube";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.youtubeVideoId ? (
        <YouTube videoId={props.youtubeVideoId} className="card-img-top" />
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
