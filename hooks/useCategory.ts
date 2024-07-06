"use client";

import { Category } from "@/types/category";
import axios from "axios";
import { useQuery } from "react-query";

export const getCategory = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<Category[]>({
    queryKey: ["category"],
    queryFn: async () =>
      await axios.get("/api/category/show").then((response) => {
        return response.data.data as Category[];
      }),
    staleTime: 120 * 1000,
  });
  return { categories, error, isLoading };
};

export const getCategoryById = (id: string | string[]) => {
  const {
    data: category,
    isLoading,
    error,
  } = useQuery<Category>({
    queryKey: ["category", id],
    queryFn: async () =>
      await axios.get(`/api/category/show/${id}`).then((response) => {
        return response.data.data as Category;
      }),
  });
  return { category, isLoading, error };
};
