import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCards } from "../../store/actions/cards";
import { Loader } from "../Loader";
import { CardItem } from "./CardItem";

export const CardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.cards.allCards);

  if (cards.length === 0) {
    return <Loader />;
  }

  return (
    <div className="mt-4 mb-2">
      <ul>
        {cards.map((card) => {
          return <CardItem card={card} key={card.uuid} />;
        })}
      </ul>
    </div>
  );
};
