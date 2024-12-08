import React from "react";
import { useNavigate } from "react-router-dom";
import { popularRecipesType } from "../data/popularRecipes";

export function PopularDishes({ data }) {
  const historyPush = useNavigate();
  return (
    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 lg:grid-cols-8">
      {data.map((item, index) => (
        <div
          className="p-2 cursor-pointer hover:bg-blue-200"
          key={index}
          onClick={() =>
            historyPush(`/dishes/${popularRecipesType}/${item.title}`)
          }
        >
          <img
            className="w-full h-20 object-cover "
            src={item.image}
            alt={item.title}
          />
          <h2 className="text-sm">{item.title}</h2>
        </div>
      ))}
    </div>
  );
}
