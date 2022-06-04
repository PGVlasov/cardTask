import { RecieptItem } from "./RecieptItem";

export const RecieptList = () => {
  const reciepts = [
    { id: 1, name: "reciept1" },
    { id: 1, name: "reciept1" },
    { id: 1, name: "reciept1" },
  ];
  return (
    <div className="mt-4 mb-2">
      <ul>
        {reciepts.map((reciept) => {
          return <RecieptItem reciept={reciept} key={reciept.uuid} />;
        })}
      </ul>
    </div>
  );
};
