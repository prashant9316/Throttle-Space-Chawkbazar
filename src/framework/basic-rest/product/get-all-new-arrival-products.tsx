import { QueryOptionsType, ProductDetails } from '@framework/types';
import https from '@framework/utils/https';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export const fetchNewArrivalProducts = async () => {
  const { data } = await https.get(API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS);
  return data.products[0] as ProductDetails[];
};


export const useNewArrivalProductsQuery = (options: QueryOptionsType) => {
  return useQuery<ProductDetails[], Error>({
    queryKey: [API_ENDPOINTS.PRODUCTS_ANCIENT, options],
    queryFn: fetchNewArrivalProducts
  });
};
