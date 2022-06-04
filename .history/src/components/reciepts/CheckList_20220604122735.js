import { CheckItem } from "./CheckItem";

export const CheckList = () => {
  const checks = [{}];
  return (
    <div className="mt-4 mb-2">
      <ul>
        {checks.map((card) => {
          return <CheckItem card={card} key={card.uuid} />;
        })}
      </ul>
    </div>
  );
};
