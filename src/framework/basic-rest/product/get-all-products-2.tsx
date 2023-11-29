import { QueryOptionsType, Product } from '@framework/types'
import http from '@framework/utils/http'
import { API_ENDPOINTS } from '@framework/utils/api-endpoints'
import { useQuery } from '@tanstack/react-query'

export const fetchProducts = async () => {
  const { data } = await http.get(API_ENDPOINTS.PRODUCTS_2)
  return data as Product[]
}
export const useProductsQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>({
    queryKey: [API_ENDPOINTS.PRODUCTS_2, options],
    queryFn: fetchProducts
  })
}
