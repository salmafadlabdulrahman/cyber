import {
  getProductById,
  getProducts,
  getRelatedProducts,
  getNewProducts,
  getFeaturedProducts,
  getBestSellers,
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

export const useNewProducts = () => {
  return useQuery({
    queryKey: ["newProducts"],
    queryFn: () => getNewProducts(),
  });
};

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featuredProducts"],
    queryFn: () => getFeaturedProducts(),
  });
};

export const useBestSellersProducts = () => {
  return useQuery({
    queryKey: ["bestSellersProducts"],
    queryFn: () => getBestSellers(),
  });
};