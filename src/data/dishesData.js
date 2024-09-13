import { borsches, borschType } from "./Borsch";
import { fruitDrinks, fruitDrinksType } from "./FruitDrinks";
import { fruitSalads, fruitSaladsType } from "./FruitSalads";
import { meatSalads, meatSaladsType } from "./MeatSalads";
import { milkshakes, milkshakesType } from "./Milkshakes";
import { pancakes, pancakesType } from "./Pancakes";
import { sauces, saucesType } from "./Sauces";
import { soups, soupsType } from "./Soups";
import { softDrinks, softDrinksType } from "./SoftDrinks";
import { popular, popularRecipesType } from "./PopularRecipes";
import { newRecipes, newRecipesType } from "./NewRecipes";

export const dishesData = {
  [meatSaladsType]: meatSalads,
  [fruitDrinksType]: fruitDrinks,
  [fruitSaladsType]: fruitSalads,
  [milkshakesType]: milkshakes,
  [pancakesType]: pancakes,
  [saucesType]: sauces,
  [soupsType]: soups,
  [borschType]: borsches,
  [softDrinksType]: softDrinks,
  [popularRecipesType]: popular,
  [newRecipesType]: newRecipes,
};
