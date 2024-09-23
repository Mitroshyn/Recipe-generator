import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dishesData } from "../data/dishesData";
import { popular } from "../data/PopularRecipes";
import { PopularDishes } from "./PopularDishes";

function getRandomItems(arr, num) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export function DishesDetails() {
  const randomRecipes = getRandomItems(popular, 8);

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

  // console.log("currentData", currentData, dishesData);

  return (
    <>
      <div>
        <div className="dishDetail bg-amber-100  pb-8">
          <div className="flex flex-col gap-10-px mx-6">
            <h1 className="text-2xl pt-3.5">{currentData.title}</h1>
            <img
              className="w-3/6"
              src={currentData.image}
              alt={currentData.title}
            />
            <h2 className="font-bold">Ингридиенты:</h2>
            <div className="flex flex-col">
              {currentData.ingridients.map((item, index) => (
                <div key={index}>{sanitizeText(item)}</div>
              ))}
            </div>
            <div>
              {currentData.sauceIngridients &&
                currentData.sauceIngridients.length > 0 && (
                  <div className="flex flex-col">
                    <h2 className="font-bold">Соус,заправка:</h2>
                    {currentData.sauceIngridients.map((item, index) => (
                      <div key={index}>{sanitizeText(item)}</div>
                    ))}
                  </div>
                )}
            </div>

            <h2 className="font-bold">Приготовление:</h2>
            <div>
              {currentData.cooking.map((item, index) => (
                <p key={index}>
                  {sanitizeText(item.description)}
                  <div className="my-1.5">
                    <img src={item.image} alt="" />
                  </div>
                </p>
              ))}
            </div>
            <div>Приятного аппетита!</div>
          </div>
        </div>
        <PopularDishes data={randomRecipes} />
      </div>
    </>
  );
}
