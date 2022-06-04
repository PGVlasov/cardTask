import { Card } from "react-bootstrap";

export const CadrItem = ({ card }) => {
  return (
    <Card>
      <Card.Body>{card.name}</Card.Body>
    </Card>
  );
};
