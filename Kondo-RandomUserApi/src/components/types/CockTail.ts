export interface Cocktail {
  id: number;
  name: string;
  alcoholic: boolean;
  image: string;
  ingredients: string[];
  category: string | object;
  glass_type: {
    id: number;
    label: string;
  };
  created_at: string;
  updated_at: string;
}
