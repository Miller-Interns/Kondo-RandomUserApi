import { ref } from "vue";
import type { Cocktail } from "../types/CockTail";

export function useCocktails() {
  const cocktails = ref<Cocktail[]>([]);
  const pagination = ref({ count: 0, pages: 0 });
  const loading = ref(false);

  const fetchCocktails = async (page = 1, categoryId?: number) => {
    loading.value = true;

    const url = new URL("https://boozeapi.com/api/v1/cocktails");
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", "10");

    if (categoryId) url.searchParams.append("category_id", categoryId.toString());

    try {
      const res = await fetch(url.toString());
      const data = await res.json();

      cocktails.value = data.data;
      pagination.value = data.pagination;
    } finally {
      loading.value = false;
    }
  };

  return { cocktails, pagination, fetchCocktails, loading };
}
