export const CheckList = ()=>{
    return ( <div className="mt-4 mb-2">
    <ul>
      {cards.map((card) => {
        return <CheckItem card={card} key={card.uuid} />;
      })}
    </ul>
  </div>
))
}