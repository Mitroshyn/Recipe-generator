import React from "react";
import { useNavigate } from "react-router-dom";
export function Data({data,title,tags,type}) {
  const historyPush = useNavigate();
  return (
    <div className="flex flex-wrap ">
      {data.map((item, index) => (
        <div
          className="w-2/5 p-4 cursor-pointer hover:bg-blue-200 mt-1 flex: 1 1 50%; flex-grow flex-shrink basis-1/2"
          key={index}
          onClick={() => historyPush(`/dishes/${type}/${item.title}`)}
        >
          <img className="w-28 h-24" src={item.image} alt={item.title} />
          <h2 className="">{item.title}</h2>
        </div>
      ))}
    </div>
  );
}
