import { Card, Button } from "react-bootstrap";

export const CadrItem = ({ card }) => {
  return (
    <Card className="mt-1 d-inline p-2">
      <Card.Body>{card.uuid}</Card.Body>
      <Button className="w-25 p-3" variant="primary" size="sm">
        Small button
      </Button>
    </Card>
  );
};
