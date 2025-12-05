import { defineStore } from "pinia";
import type { Category } from "../types/Category";

export const useCategoryStore = defineStore("categories", {
  state: () => ({
    list: [] as Category[]
  }),

  actions: {
    setCategories(items: Category[]) {
      this.list = items;
      localStorage.setItem("categories", JSON.stringify(items));
    },

    loadFromLocalStorage() {
      const cached = localStorage.getItem("categories");
      if (cached) this.list = JSON.parse(cached);
    }
  }
});
