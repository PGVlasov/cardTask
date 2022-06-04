import { Card, Container } from "react-bootstrap";

export const CardComponent = () => {
  return (
    <div>
      <Card className="w-10 mt-5">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="container">
            <div className="row">
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
