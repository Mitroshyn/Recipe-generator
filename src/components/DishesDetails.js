import React from "react";
import { useParams } from "react-router-dom";
import { dishesData } from "../data/dishesData";

export function DishesDetails() {
  let { type, id } = useParams();
  const sanitizeText = (text) => (text ? text.replace(/&nbsp;/g, " ") : "");

  const currentDataType = dishesData[type];
  if (!currentDataType) {
    return <div>Тип блюда не найден</div>;
  }
  const currentData = dishesData[type].find((item) => item.title === id);
  if (!currentData) {
    return <div>Блюдо не найдено</div>;
  }
  console.log("currentData", currentData, dishesData);
  return (
    <>
      <div className="dishDetail">
        <h1>{currentData.title}</h1>
        <img src={currentData.image} alt={currentData.title} />
        <h2>Ингридиенты</h2>
        {/* <p>{item.ingridients.map(sanitizeText).join(", ")}</p>
            <div>
              {item.cooking.map((step, index) => (
                <p key={index}>
                  {sanitizeText(step.description)}
                  <img src={step.image} alt="" />
                </p>
              ))}
            </div> */}
      </div>
    </>
  );
}
