// src/api/use-cocktails.ts
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
    if (categoryId)
      url.searchParams.append("category_id", categoryId.toString());

    try {
      const res = await fetch(url.toString());
      if (!res.ok)
        throw new Error(`API error: ${res.status} ${res.statusText}`);
      const data = await res.json();

      cocktails.value = data.data;
      pagination.value = data.pagination;
    } catch (err) {
      console.error("Error fetching cocktails:", err);
    } finally {
      loading.value = false;
    }
  };

  // SAFE version: fetch all cocktails sequentially to avoid 429
  const fetchAllCocktails = async (categoryId?: number) => {
    loading.value = true;

    try {
      // 1) Fetch first page
      const url1 = new URL("https://boozeapi.com/api/v1/cocktails");
      url1.searchParams.append("page", "1");
      url1.searchParams.append("limit", "10");
      if (categoryId)
        url1.searchParams.append("category_id", categoryId.toString());

      const res1 = await fetch(url1.toString());
      if (!res1.ok)
        throw new Error(`API error: ${res1.status} ${res1.statusText}`);
      const data1 = await res1.json();

      const allData: Cocktail[] = [...data1.data];
      const totalPages = data1.pagination?.pages ?? 1;

      // 2) Fetch remaining pages sequentially
      for (let p = 2; p <= totalPages; p++) {
        const url = new URL("https://boozeapi.com/api/v1/cocktails");
        url.searchParams.append("page", p.toString());
        url.searchParams.append("limit", "10");
        if (categoryId)
          url.searchParams.append("category_id", categoryId.toString());

        const res = await fetch(url.toString());
        if (!res.ok) {
          console.warn(`Stopped at page ${p}: ${res.status} ${res.statusText}`);
          break; // stop if API blocks
        }

        const r = await res.json();
        if (r && Array.isArray(r.data)) allData.push(...r.data);

        // small delay to avoid hammering the API
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      cocktails.value = allData;
      pagination.value = {
        count: allData.length,
        pages: Math.ceil(allData.length / 10),
      };
    } catch (err) {
      console.error("Error fetching all cocktails:", err);
    } finally {
      loading.value = false;
    }
  };

  return { cocktails, pagination, fetchCocktails, fetchAllCocktails, loading };
}
