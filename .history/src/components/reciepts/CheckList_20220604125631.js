import { RecieptItem } from "./CheckItem";

export const CheckList = () => {
  const checks = [{}];
  return (
    <div className="mt-4 mb-2">
      <ul>
        {checks.map((reciepts) => {
          return <RecieptItem reciept={reciept} key={card.uuid} />;
        })}
      </ul>
    </div>
  );
};
