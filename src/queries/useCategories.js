import { getCategories } from "@/api/categories.api";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
    keepPreviousData: true,
  });
};
