import { borsches, borschType } from "./borsch";
import { fruitDrinks, fruitDrinksType } from "./fruitDrinks";
import { fruitSalads, fruitSaladsType } from "./fruitSalads";
import { meatSalads, meatSaladsType } from "./meatSalads";
import { milkshakes, milkshakesType } from "./milkshakes";
import { pancakes, pancakesType } from "./pancakes";
import { sauces, saucesType } from "./sauces";
import { soups, soupsType } from "./soups";
import { softDrinks, softDrinksType } from "./softDrinks";
import { popular, popularRecipesType } from "./popularRecipes";
import { newRecipes, newRecipesType } from "./newRecipes";
import { vegetableSalads, vegetableSaladsType } from "./vegetableSalads";

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
  [vegetableSaladsType]: vegetableSalads,
  [popularRecipesType]: popular,
  [newRecipesType]: newRecipes,
};
