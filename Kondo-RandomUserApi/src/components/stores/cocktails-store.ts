import { defineStore } from "pinia";
import type { Cocktail } from "../types/CockTail";

export const useCocktailStore = defineStore("cocktails", {
  state: () => ({
    list: [] as Cocktail[],
    pagination: { count: 0, pages: 0 },
  }),

  actions: {
    setCocktails(data: Cocktail[], pagination: any) {
      this.list = data;
      this.pagination = pagination;
    },
  },
});
