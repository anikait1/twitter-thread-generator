import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Tweet(props) {
  return (
    <Card
      className="mb-3"
      style={{
        borderColor: "#1da1f2",
        backgroundColor: "#15202b",
        color: "#ffffff",
      }}
    >
      <Card.Header
        className="py-1 px-2 d-flex justify-content-between align-items-center"
        style={{ color: "#1da1f2", borderColor: "#1da1f2" }}
      >
        # {props.number}
        <Button
          style={{ backgroundColor: "#1da1f2", borderColor: "#1da1f2" }}
          onClick={() => navigator.clipboard.writeText(props.content)}
          size="sm"
        >
          Copy Text
        </Button>{" "}
      </Card.Header>
      <Card.Body className="p-2">
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
      <Card.Footer className="py-1 px-2" style={{ borderColor: "#1da1f2" }}>
        <small className="text-muted">Character count: {props.length}</small>
      </Card.Footer>
    </Card>
  );
}

export default Tweet;
