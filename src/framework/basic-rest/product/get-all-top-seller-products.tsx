import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const fetchTopSellerProducts = async () => {
	const { data } = await http.get(API_ENDPOINTS.TOP_SELLER_PRODUCTS);
	return data;
};
export const useTopSellerProductsQuery = (options: QueryOptionsType) => {
	return useQuery<Product[], Error>({
		queryKey: [API_ENDPOINTS.TOP_SELLER_PRODUCTS, options],
		queryFn: fetchTopSellerProducts
	});
};
