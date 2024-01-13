import { QueryOptionsType, FetchProducts } from '@framework/types'
import https from '@framework/utils/https'
import { API_ENDPOINTS } from '@framework/utils/api-endpoints'
import { useQuery } from '@tanstack/react-query'

export const fetchProducts = async () => {
  const { data } = await https.get(API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS)
  return data.products[0] as FetchProducts
}
export const useProductsQuery = (options: QueryOptionsType) => {
  return useQuery<FetchProducts, Error>({
    queryKey: [API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, options],
    queryFn: fetchProducts
  })
}
