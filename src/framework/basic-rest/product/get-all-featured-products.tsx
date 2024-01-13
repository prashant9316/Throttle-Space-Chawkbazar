import { QueryOptionsType, FetchProducts } from '@framework/types';
import https from '@framework/utils/https';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export const fetchFeaturedProducts = async () => {
  const { data } = await https.get(API_ENDPOINTS.FLASH_SALE);
  return data.data as FetchProducts;
};

// const fetchAncientFeaturedProducts = async () => {
//   const { data } = await http.get(API_ENDPOINTS.FEATURED_PRODUCTS_ANCIENT);
//   return data as Product[];
// };

export const useFeaturedProductsQuery = (options: QueryOptionsType) => {
  // if (options.demoVariant === 'ancient') {
  //   return useQuery<Product[], Error>({
  //     queryKey: [API_ENDPOINTS.FEATURED_PRODUCTS, options],
  //     queryFn: fetchAncientFeaturedProducts
  //   });
  // }

  return useQuery<FetchProducts, Error>({
    queryKey: [API_ENDPOINTS.FLASH_SALE, options],
    queryFn: fetchFeaturedProducts
  });
};
