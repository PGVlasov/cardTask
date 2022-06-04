import { Card } from "react-bootstrap";

export const RecieptItem = ({ reciept }) => {
  return (
    <Card className="mt-3 d-flex flex-row">
      <Card.Body>Все чеки по карте {reciept.name}</Card.Body>
    </Card>
  );
};
