import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadCards } from "../../store/actions/cards";
import { Loader } from "../Loader";

export const CardComponent = () => {
  const param = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.cards.allCards);

  const card = useSelector((state) =>
    state.cards.allCards.find(
      (c) => c.uuid === "f6a6b695-d248-4188-a5ed-376ba29e4136"
    )
  );
  console.log("PARAM=====>>>>>>", param);
  console.log("CARDS=====>>>>>>", card);

  if (cards.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <Card className="w-10 mt-5 align-items-center">
        <Card.Body className=" d-flex flex-column align-items-center">
          <Card.Title>{card.uuid}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted align-items-center">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="container">
            <div className="d-flex flex-row justify-content-between">
              <Card.Link href="#">Постотреть чеки</Card.Link>
              <Card.Link href="#">Посмотреть транзакции</Card.Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
