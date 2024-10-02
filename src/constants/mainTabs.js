import {
  newRecipes,
  newRecipesTitle,
  newRecipesType,
} from "../data/newRecipes";
import {
  popular,
  popularRecipesTitle,
  popularRecipesType,
} from "../data/popularRecipes";

export const MAIN_TABS = [
  {
    key: "popular",
    label: "Популярные",
    title: popularRecipesTitle,
    data: popular,
    type: popularRecipesType,
  },
  {
    key: "new",
    label: "Новые",
    title: newRecipesTitle,
    data: newRecipes,
    type: newRecipesType,
  },
];
