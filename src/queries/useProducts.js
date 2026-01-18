import {
  getProductById,
  getProducts,
  getRelatedProducts,
} from "@/api/products.api";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (productId) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
  });
};

export const useProducts = (filters = {}) => {
  const { categories = [], priceRanges = [], page = 1 } = filters;

  return useQuery({
    queryKey: ["products", { categories, priceRanges, page }],
    queryFn: () => getProducts({ categories, priceRanges, page }),
    keepPreviousData: true,
  });
};

export const useRelatedProducts = (productId) => {
  return useQuery({
    queryKey: ["relatedProducts", productId],
    queryFn: () => getRelatedProducts(productId),
    enabled: !!productId,
  });
};
