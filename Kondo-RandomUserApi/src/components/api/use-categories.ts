import { ref } from "vue";
import type { Category } from "../types/Category";

export function useCategories() {
  const categories = ref<Category[]>([]);
  const loading = ref(false);

  const fetchCategories = async () => {
    loading.value = true;
    try {
      const res = await fetch("https://boozeapi.com/api/v1/categories");
      categories.value = await res.json();
    } finally {
      loading.value = false;
    }
  };

  return { categories, fetchCategories, loading };
}
