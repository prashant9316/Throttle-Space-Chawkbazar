import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export const fetchFeaturedProducts = async () => {
  const { data } = await http.get(API_ENDPOINTS.FEATURED_PRODUCTS);
  return data as Product[];
};

const fetchAncientFeaturedProducts = async () => {
  const { data } = await http.get(API_ENDPOINTS.FEATURED_PRODUCTS_ANCIENT);
  return data as Product[];
};

export const useFeaturedProductsQuery = (options: QueryOptionsType) => {
  if (options.demoVariant === 'ancient') {
    return useQuery<Product[], Error>({
      queryKey: [API_ENDPOINTS.FEATURED_PRODUCTS, options],
      queryFn: fetchAncientFeaturedProducts
    });
  }

  return useQuery<Product[], Error>({
    queryKey: [API_ENDPOINTS.FEATURED_PRODUCTS, options],
    queryFn: fetchFeaturedProducts
  });
};
