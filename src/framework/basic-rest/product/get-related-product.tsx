import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const fetchRelatedProducts = async () => {
	const { data } = await http.get(API_ENDPOINTS.RELATED_PRODUCTS);
	return data;
};
export const useRelatedProductsQuery = (options: QueryOptionsType) => {
	return useQuery<Product[], Error>({
		queryKey: [API_ENDPOINTS.RELATED_PRODUCTS, options],
		queryFn: fetchRelatedProducts
	});
};
