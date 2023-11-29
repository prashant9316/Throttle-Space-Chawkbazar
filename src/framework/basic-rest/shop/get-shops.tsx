import { ShopsQueryOptionsType, Shop } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const fetchShops = async () => {
	const { data } = await http.get(API_ENDPOINTS.SHOPS);
	return { shop: { data } };
};

export const useShopsQuery = (options: ShopsQueryOptionsType) => {
	return useQuery<{ shop: { data: Shop[] } }, Error>({
		queryKey: [API_ENDPOINTS.SHOPS, options],
		queryFn: fetchShops
	});
};
