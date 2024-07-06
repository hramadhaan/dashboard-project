import { Category } from "./category";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: Category;
  sku: string;
  status: string;
  quantity: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}
