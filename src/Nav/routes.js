import { Main } from "../Main/Main";
import {
  borsches,
  borschesTitle,
  borschesTags,
  borschType,
} from "../data/Borsch";
import { DishesList } from "../DishesList/DishesList";
import {
  pancakes,
  pancakesTitle,
  pancakesTags,
  pancakesType,
} from "../data/Pancakes";
import { sauces, saucesTitle, saucesTags, saucesType } from "../data/Sauces";
import { soups, soupsTags, soupsTitle, soupsType } from "../data/Soups";
import {
  fruitSalads,
  fruitSaladsTags,
  fruitSaladsTitle,
  fruitSaladsType,
} from "../data/FruitSalads";
import {
  meatSalads,
  meatSaladsTitle,
  meatSaladsTags,
  meatSaladsType,
} from "../data/MeatSalads";
import {
  milkshakes,
  milkshakesTitle,
  milkshakesTags,
  milkshakesType,
} from "../data/Milkshakes";
import {
  fruitDrinks,
  fruitDrinksTitle,
  fruitDrinksTags,
  fruitDrinksType,
} from "../data/FruitDrinks";
import {
  softDrinks,
  softDrinksTitle,
  softDrinksTags,
  softDrinksType,
} from "../data/SoftDrinks";
import { DishesDetails } from "../components/DishesDetails";

export const routes = [
  {
    path: "/",
    component: <Main />,
  },
  { path: "/dishes/:type/:id", component: <DishesDetails /> },
  {
    path: "/pancakes",
    component: (
      <DishesList
        data={pancakes}
        title={pancakesTitle}
        tags={pancakesTags}
        type={pancakesType}
      />
    ),
  },
  {
    path: "/milkshakes",
    component: (
      <DishesList
        data={milkshakes}
        title={milkshakesTitle}
        tags={milkshakesTags}
        type={milkshakesType}
      />
    ),
  },
  {
    path: "/fruitDrinks",
    component: (
      <DishesList
        data={fruitDrinks}
        title={fruitDrinksTitle}
        tags={fruitDrinksTags}
        type={fruitDrinksType}
      />
    ),
  },
  {
    path: "/softDrinks",
    component: (
      <DishesList
        data={softDrinks}
        title={softDrinksTitle}
        tags={softDrinksTags}
        type={softDrinksType}
      />
    ),
  },
  {
    path: "/soups",
    component: (
      <DishesList
        data={soups}
        title={soupsTitle}
        tags={soupsTags}
        type={soupsType}
      />
    ),
  },
  {
    path: "/borsch",
    component: (
      <DishesList
        data={borsches}
        title={borschesTitle}
        tags={borschesTags}
        type={borschType}
      />
    ),
  },
  {
    path: "/sauces",
    component: (
      <DishesList
        data={sauces}
        title={saucesTitle}
        tags={saucesTags}
        type={saucesType}
      />
    ),
  },
  {
    path: "/fruitSalads",
    component: (
      <DishesList
        data={fruitSalads}
        title={fruitSaladsTitle}
        tags={fruitSaladsTags}
        type={fruitSaladsType}
      />
    ),
  },
  {
    path: "/meatSalads",
    component: (
      <DishesList
        data={meatSalads}
        title={meatSaladsTitle}
        tags={meatSaladsTags}
        type={meatSaladsType}
      />
    ),
  },
  // {
  //   path: "/newRecipes",
  //   component: (
  //     <New
  //       data={newRecipes}
  //       title={newRecipesTitle}
  //       // tags={newRecipesTags}
  //       type={newRecipesType}
  //     />
  //   ),
  // },
];
