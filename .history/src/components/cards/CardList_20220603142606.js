import { useState } from "react";

export const CardList = () => {
  const cards = [
    {
      "uuid": "3fa85f64",
      "type_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "number": "string",
      "status": "active",
      "holder": "string",
      "phone": "87876236863",
      "birthdate": "2022-06-03",
      "created_date": 0,
      "created_user": "31-162756066862556",
      "created_store_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "created_device_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "sales": 0,
      "balance": 0,
    },
    {
      "uuid": "99999999",
      "type_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "number": "string",
      "status": "active",
      "holder": "string",
      "phone": "87876236863",
      "birthdate": "2022-06-03",
      "created_date": 0,
      "created_user": "31-162756066862556",
      "created_store_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "created_device_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "sales": 0,
      "balance": 0,
    },
  ];

  return (
    <div className="container">
      <ul>
        {cards.map((card) => {
          return <div>{cards.uuid}</div>;
        })}
      </ul>
    </div>
  );
};
