import { Main } from "../Main/Main";
import { borsches, borschesTitle, borschType } from "../data/borsch";
import { DishesList } from "../DishesList/DishesList";
import { pancakes, pancakesTitle, pancakesType } from "../data/pancakes";
import { sauces, saucesTitle, saucesType } from "../data/sauces";
import { soups, soupsTitle, soupsType } from "../data/soups";
import {
  fruitSalads,
  fruitSaladsTitle,
  fruitSaladsType,
} from "../data/fruitSalads";
import {
  meatSalads,
  meatSaladsTitle,
  meatSaladsType,
} from "../data/meatSalads";
import {
  milkshakes,
  milkshakesTitle,
  milkshakesType,
} from "../data/milkshakes";
import {
  fruitDrinks,
  fruitDrinksTitle,
  fruitDrinksType,
} from "../data/fruitDrinks";
import {
  softDrinks,
  softDrinksTitle,
  softDrinksType,
} from "../data/softDrinks";
import { DishesDetails } from "../components/DishesDetails";
import {
  vegetableSalads,
  vegetableSaladsTitle,
  vegetableSaladsType,
} from "../data/vegetableSalads";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  { path: "/dishes/:type/:id", element: <DishesDetails /> },
  // { path: "/dishes/:type/:title", component: <DishesDetails /> },
  {
    path: "/pancakes",
    element: (
      <DishesList data={pancakes} title={pancakesTitle} type={pancakesType} />
    ),
  },
  {
    path: "/milkshakes",
    element: (
      <DishesList
        data={milkshakes}
        title={milkshakesTitle}
        type={milkshakesType}
      />
    ),
  },
  {
    path: "/fruitDrinks",
    element: (
      <DishesList
        data={fruitDrinks}
        title={fruitDrinksTitle}
        type={fruitDrinksType}
      />
    ),
  },
  {
    path: "/softDrinks",
    element: (
      <DishesList
        data={softDrinks}
        title={softDrinksTitle}
        type={softDrinksType}
      />
    ),
  },
  {
    path: "/soups",
    element: <DishesList data={soups} title={soupsTitle} type={soupsType} />,
  },
  {
    path: "/borsch",
    element: (
      <DishesList data={borsches} title={borschesTitle} type={borschType} />
    ),
  },
  {
    path: "/sauces",
    element: <DishesList data={sauces} title={saucesTitle} type={saucesType} />,
  },
  {
    path: "/fruitSalads",
    element: (
      <DishesList
        data={fruitSalads}
        title={fruitSaladsTitle}
        type={fruitSaladsType}
      />
    ),
  },
  {
    path: "/meatSalads",
    element: (
      <DishesList
        data={meatSalads}
        title={meatSaladsTitle}
        type={meatSaladsType}
      />
    ),
  },
  {
    path: "/vegetableSalads",
    element: (
      <DishesList
        data={vegetableSalads}
        title={vegetableSaladsTitle}
        type={vegetableSaladsType}
      />
    ),
  },
];
