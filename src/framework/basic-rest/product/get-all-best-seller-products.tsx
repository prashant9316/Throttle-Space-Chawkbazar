import { QueryOptionsType, ProductDetails } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const fetchBestSellerProducts = async () => {
	const { data } = await http.get(API_ENDPOINTS.BEST_SELLER_PRODUCTS);
	return data as ProductDetails[];
};
export const useBestSellerProductsQuery = (options: QueryOptionsType) => {
	return useQuery<ProductDetails[], Error>({
		queryKey: [API_ENDPOINTS.BEST_SELLER_PRODUCTS, options],
		queryFn: fetchBestSellerProducts
	});
};
