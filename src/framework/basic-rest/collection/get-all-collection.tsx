import { CollectionsQueryOptionsType, Collection } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const fetchCollections = async () => {
	const {
		data: { data },
	} = await http.get(API_ENDPOINTS.COLLECTIONS);
	return { collections: { data: data.data as Collection[] } };
};
export const useCollectionsQuery = (options: CollectionsQueryOptionsType) => {
	return useQuery<{ collections: { data: Collection[] } }, Error>({
		queryKey: [API_ENDPOINTS.COLLECTIONS, options],
		queryFn: fetchCollections
	});
};
