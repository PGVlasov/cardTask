import { Card, Button } from "react-bootstrap";

export const CadrItem = ({ card }) => {
  return (
    <Card className="mt-1">
      <Card.Body>{card.uuid}</Card.Body>
      <Button variant="primary" size="sm">
        Small button
      </Button>
    </Card>
  );
};
