import { Card } from "react-bootstrap";

export const CadrItem = ({ card }) => {
  return (
    <Card>
      <Card.Body>{card.uuid}</Card.Body>
    </Card>
  );
};
