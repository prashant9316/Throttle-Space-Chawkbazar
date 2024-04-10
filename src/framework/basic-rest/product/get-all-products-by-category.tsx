// import { Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import https from "@framework/utils/https";
// import shuffle from "lodash/shuffle";
import { useQuery } from "react-query";
import { ProductDetails } from "@framework/types";
// type PaginatedProduct = {
// 	data: Product[];
// 	paginatorInfo: any;
// };

interface ProductData {
    products: ProductDetails[];
}

const fetchProducts = async (_slug: string) => {
    try {
        const response = await https.get(`${API_ENDPOINTS.PRODUCT_CATEGORY}${_slug}`);
        const data: ProductData = response.data;
        //   console.log("fetchProducts:",data)
        return data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
};

const useProductsByCategoryQuery = (slug: string) => {
    return useQuery<ProductData, Error>(
        [API_ENDPOINTS.PRODUCT_CATEGORY, slug], () =>
        fetchProducts(slug)
    );
};

export { useProductsByCategoryQuery, fetchProducts };
