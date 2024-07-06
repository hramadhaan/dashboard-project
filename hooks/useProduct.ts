"use client";

import { Product } from "@/types/product";
import axios from "axios";
import { useQuery } from "react-query";

export const getProduct = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[]>({
    queryKey: ["product"],
    queryFn: async () =>
      await axios.get("/api/product/show").then((response) => {
        return response.data.data as Product[];
      }),
    staleTime: 120 * 1000,
  });
  return { products, error, isLoading };
};

export const getProductById = (id: string) => {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () =>
      await axios.get(`/api/product/show/${id}`).then((response) => {
        return response.data.data as Product;
      }),
  });
  return { product, isLoading, error };
};
