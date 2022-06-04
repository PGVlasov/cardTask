import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadCards } from "../../store/actions/cards";
import { Loader } from "../Loader";

export const CardComponent = () => {
  const param = useParams();
  const cardId = param.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.cards.allCards);

  const card = useSelector((state) =>
    state.cards.allCards.find((c) => c.uuid === cardId)
  );

  const navigate = useNavigate();

  const handleGoToReciept = () => {
    navigate(`"/reciepts/${cardId}/reciepts"`);
  };

  if (cards.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <Card className="w-10 mt-5 align-items-center">
        <Card.Body className=" d-flex flex-column align-items-center">
          <Card.Title>карта номер: {card.uuid}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted align-items-center">
            Баланс карты: {card.balance} рублей
          </Card.Subtitle>
          <div className="container">
            <div className="d-flex flex-row justify-content-between">
              <Card.Link onClick={handleGoToReciept}>Постотреть чеки</Card.Link>
              <Card.Link href="#">Посмотреть транзакции</Card.Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
