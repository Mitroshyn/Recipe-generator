import Body from "../Body/Body";
import { borsches, borschesTitle, borschesTags } from "../data/Borsch";
import { DishesList } from "../DishesList/DishesList";
import { pancakes, pancakesTitle, pancakesTags } from "../data/Pancakes";
import { sauces, saucesTitle, saucesTags } from "../data/Sauces";
import { soups, soupsTags, soupsTitle } from "../data/Soups";

export const routes = [
  {
    path: "/",
    component: <Body />,
  },
  {
    path: "/pancakes",
    component: (
      <DishesList data={pancakes} title={pancakesTitle} tags={pancakesTags} />
    ),
  },
  {
    path: "/soups",
    component: <DishesList data={soups} title={soupsTitle} tags={soupsTags} />,
  },
  {
    path: "/borsch",
    component: (
      <DishesList data={borsches} title={borschesTitle} tags={borschesTags} />
    ),
  },
  {
    path: "/sauces",
    component: (
      <DishesList data={sauces} title={saucesTitle} tags={saucesTags} />
    ),
  },
];
