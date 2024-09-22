import React from "react";
import { useNavigate,useParams } from "react-router-dom";
export function PopularDishes({ data, title, type }) {
  const historyPush = useNavigate();
  return (
    <div className="flex">
      {data.map((item, index) => (
        <div
          className="w-[12.5%] p-2 cursor-pointer hover:bg-blue-200"
          key={index}
          onClick={() => historyPush(`/dishes/${type}/${item.title}`)}
        >
          <img className="w-full h-20 object-cover " src={item.image} alt={item.title} />
          <h2 className="text-sm">{item.title}</h2>
        </div>
      ))}
    </div>
  );
}
