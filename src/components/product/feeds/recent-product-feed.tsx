// import ProductsBlockCarousel from '@containers/products-block-carousel'
import { useProductsQuery } from '@framework/product/get-all-products-2'
import ProductScrollCard from '../product-scroll';

interface RecentProductFeedProps {
  heading: string;
}

export default function RecentProductFeed({ heading }: RecentProductFeedProps) {
  // const limit = 5
  const { data, isLoading, error } = useProductsQuery({
    limit: 10,
  })

  console.log(isLoading, error, data?.productRef)

  return (
    <>
      <ProductScrollCard products={data?.productRef} heading={heading} />
    </>
  )
}
