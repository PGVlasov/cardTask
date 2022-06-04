import { Card } from "react-bootstrap";

export const CadrItem = ({ card }) => {
  return (
    <Card className="mt-1">
      <Card.Body>{card.uuid}</Card.Body>
    </Card>
  );
};
