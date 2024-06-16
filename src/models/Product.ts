export interface Product {
  id: number;
  title: string;
  images?: string[];
  price: number;
  rating: number;
  thumbnail?: string;
  description?: string;
  category: string;
  brand?: string;
  stock?: number;
  discountPercentage?: number;
  compound?: string;
  calories?: number | string;
  squirrels?: number | string;
  fats?: number | string;
  carbohydrates?: number | string;
  weight?: number | string;
  bestBeforeDate?: string;
}
