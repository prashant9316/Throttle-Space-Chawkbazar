import { QueryOptionsType, Category } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const fetchFeaturedCategories = async () => {
	const { data } = await http.get(API_ENDPOINTS.FEATURED_CATEGORIES);
	return data as Category[];
};
export const useFeaturedCategoriesQuery = (options: QueryOptionsType) => {
	return useQuery<Category[], Error>({
		queryKey: [API_ENDPOINTS.FEATURED_CATEGORIES, options],
		queryFn: fetchFeaturedCategories
	});
};
