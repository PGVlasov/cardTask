import { Card, Button } from "react-bootstrap";

export const CheckItem = ({ check }) => {
  return (
    <Card className="mt-3 d-flex flex-row">
      <Card.Body>XCheck</Card.Body>
      <Button className="w-25 p-3" variant="primary" onClick={handleGoToCard}>
        Подробности о карте
      </Button>
    </Card>
  );
};
