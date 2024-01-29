import { CategoriesQueryOptionsType, Category } from '@framework/types';
import https from '@framework/utils/https';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export const fetchCategories = async () => {
  const {
    data,
  } = await https.get(API_ENDPOINTS.CATEGORIES);
  return {
    categories: {
      data: data[0].children as Category[],
    },
  };
};

// const fetchAncientCategories = async () => {
//   const {
//     data: { data },
//   } = await http.get(API_ENDPOINTS.CATEGORIES_ANCIENT);
//   return {
//     categories: {
//       data: data as Category[],
//     },
//   };
// };

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  // if (options.demoVariant === 'ancient') {
  //   return useQuery<{ categories: { data: Category[] } }, Error>({
  //     queryKey: [API_ENDPOINTS.CATEGORIES, options],
  //     queryFn: fetchAncientCategories
  //   });
  // }
  return useQuery<{ categories: { data: Category[] } }, Error>({
    queryKey: [API_ENDPOINTS.CATEGORIES, options],
    queryFn: fetchCategories
  });
};
