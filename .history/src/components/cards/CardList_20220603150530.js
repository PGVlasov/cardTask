import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCards } from "../../store/actions/cards";
import { CadrItem } from "./CardItem";

export const CardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.cards.allCards);

  return (
    <div className="mt-4 mb-2">
      <ul>
        {cards.map((card) => {
          return <CadrItem card={card} key={card.id} />;
        })}
      </ul>
    </div>
  );
};
