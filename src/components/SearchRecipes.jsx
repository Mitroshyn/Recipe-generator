import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { allDishes } from "../data/allDishes";

export function SearchRecipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const historyPush = useNavigate();

  const filteredDishes = allDishes.filter((dish) =>
    dish.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleRecipeClick = (dish) => {
    setSearchTerm("");
    historyPush(`/dishes/${dish.type}/${dish.title}`);
  };

  const handleClickOutside = (event) => {
    if (
      event.target.closest(".filtered-dishes") ||
      event.target.closest("input")
    ) {
      return;
    }
    setSearchTerm("");
  };

  return (
    <div className="search-recipes relative" onClick={handleClickOutside}>
      <div
        className={`${
          searchTerm.length > 0 ? "fixed inset-0 backdrop-blur-sm" : ""
        }`}
      ></div>

      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Введите название рецепта..."
          className={`border p-2 text-base lg:text-xl ease-linear ${
            searchTerm.length > 0
              ? "p-0 xxs:w-[190px] xs:w-[350px] sm:w-[500px] md:w-[600px] lg:w-[750px]"
              : "w-full"
          }`}
        />
      </div>

      <div className="filtered-dishes absolute max-h-[40rem] overflow-y-auto z-20 w-full">
        {searchTerm.length > 0 ? (
          filteredDishes.length > 0 ? (
            filteredDishes.map((dish, index) => (
              <div
                key={index}
                className="flex xxs:flex-col xs:flex-row p-2 bg-white cursor-pointer hover:bg-gray-200"
                onClick={() => handleRecipeClick(dish)}
              >
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-16 h-16 mr-2 inline-block"
                />
                <span className="flex items-center">{dish.title}</span>
              </div>
            ))
          ) : (
            <div>Ничего не найдено</div>
          )
        ) : null}
      </div>
    </div>
  );
}
