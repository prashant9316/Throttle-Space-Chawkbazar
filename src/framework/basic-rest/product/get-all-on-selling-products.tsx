import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const fetchOnSellingProducts = async () => {
  const { data } = await http.get(API_ENDPOINTS.ON_SELLING_PRODUCTS);
  return data;
};
export const useOnSellingProductsQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>({
    queryKey: [API_ENDPOINTS.ON_SELLING_PRODUCTS, options],
    queryFn: fetchOnSellingProducts
  });
};
