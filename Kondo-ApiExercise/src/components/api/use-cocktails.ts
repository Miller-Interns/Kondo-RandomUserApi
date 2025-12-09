// src/api/use-cocktails.ts
import { ref } from "vue";
import type { Cocktail } from "../types/CockTail";

export function useCocktails() {
  const cocktails = ref<Cocktail[]>([]);
  const pagination = ref({ count: 0, pages: 0 });
  const loading = ref(false);

  // existing paged fetch (keeps compatibility)
  const fetchCocktails = async (page = 1, categoryId?: number) => {
    loading.value = true;

    const url = new URL("https://boozeapi.com/api/v1/cocktails");
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", "10");
    if (categoryId)
      url.searchParams.append("category_id", categoryId.toString());

    try {
      const res = await fetch(url.toString());
      const data = await res.json();

      cocktails.value = data.data;
      pagination.value = data.pagination;
    } finally {
      loading.value = false;
    }
  };

  // NEW: fetch all cocktails across pages, set cocktails.value to the full list
  const fetchAllCocktails = async (categoryId?: number) => {
    loading.value = true;

    try {
      // 1) fetch page 1 to learn pagination info
      const url1 = new URL("https://boozeapi.com/api/v1/cocktails");
      url1.searchParams.append("page", "1");
      url1.searchParams.append("limit", "10");
      if (categoryId)
        url1.searchParams.append("category_id", categoryId.toString());

      const res1 = await fetch(url1.toString());
      const data1 = await res1.json();

      const allData: Cocktail[] = [...data1.data];

      const totalPages = data1.pagination?.pages ?? 1;

      // 2) fetch remaining pages in parallel (if any)
      if (totalPages > 1) {
        const promises = [];
        for (let p = 2; p <= totalPages; p++) {
          const url = new URL("https://boozeapi.com/api/v1/cocktails");
          url.searchParams.append("page", p.toString());
          url.searchParams.append("limit", "10");
          if (categoryId)
            url.searchParams.append("category_id", categoryId.toString());
          promises.push(fetch(url.toString()).then((r) => r.json()));
        }
        const results = await Promise.all(promises);
        results.forEach((r) => {
          if (r && Array.isArray(r.data)) allData.push(...r.data);
        });
      }

      cocktails.value = allData;
      // update pagination to reflect the full count/pages (optional)
      pagination.value = {
        count: allData.length,
        pages: Math.ceil(allData.length / 10),
      };
    } finally {
      loading.value = false;
    }
  };

  return { cocktails, pagination, fetchCocktails, fetchAllCocktails, loading };
}
