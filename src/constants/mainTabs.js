import { newRecipes, newRecipesTitle, newRecipesType } from "../data/NewRecipes";
import { popular, popularRecipesTitle, popularRecipesType } from "../data/PopularRecipes";

export const MAIN_TABS = [
  { key: "popular", label: "Популярные", title: popularRecipesTitle, data: popular, type: popularRecipesType },
  { key: "new", label: "Новые", title: newRecipesTitle, data: newRecipes, type: newRecipesType },
];
