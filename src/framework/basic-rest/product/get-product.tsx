import { ProductDetails } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const fetchProduct = async (_slug: string) => {
	const { data } = (await https.get(`${API_ENDPOINTS.PRODUCT}${_slug}`));
	console.log("Data fetched:");
	console.log(data)
	return data;
};
export const useProductQuery = (slug: string) => {
	return useQuery<ProductDetails, Error>({
		queryKey: [API_ENDPOINTS.PRODUCT, slug],
		queryFn: () => fetchProduct(slug)
	});
};
