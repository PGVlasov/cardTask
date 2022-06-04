import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loadReciepts } from "../../store/actions/reciepts";
import { RecieptItem } from "./RecieptItem";

export const RecieptList = () => {
  const reciepts = [
    { id: 1, name: "reciept1" },
    { id: 2, name: "reciept2" },
    { id: 3, name: "reciept3" },
  ];
  const param = useParams();
  const cardId = param.id;
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(loadReciepts(cardId));
  //   }, [dispatch]);

  console.log("CARDID++++>>>>>>>", param);

  //   const cards = useSelector((state) => state.cards.allCards);

  //   const card = useSelector((state) =>
  //     state.cards.allCards.find((c) => c.uuid === cardId)
  //   );

  return (
    <div className="mt-4 mb-2">
      <ul>
        {reciepts.map((reciept) => {
          return <RecieptItem reciept={reciept} key={reciept.id} />;
        })}
      </ul>
    </div>
  );
};
