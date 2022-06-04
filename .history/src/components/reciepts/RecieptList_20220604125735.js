import { RecieptItem } from "./CheckItem";

export const RecieptList = () => {
  const reciepts = [{}];
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
