import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const CadrItem = ({ card }) => {
  const navigate = useNavigate("");

  const handleGoToCard = () => {
    navigate(`/cardPage/${card.id}`);
  };
  return (
    <Card className="mt-3 d-flex flex-row">
      <Card.Body>{card.uuid}</Card.Body>
      <Button className="w-25 p-3" variant="primary" onClick={handleGoToCard}>
        Подробности о карте
      </Button>
    </Card>
  );
};
