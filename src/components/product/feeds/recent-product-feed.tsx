import ProductsBlockCarousel from '@containers/products-block-carousel'
import { useProductsQuery } from '@framework/product/get-all-products-2'

interface RecentProductFeedProps {
  heading: string;
}

export default function RecentProductFeed({ heading }: RecentProductFeedProps) {
  // const limit = 5
  const { data, isLoading, error } = useProductsQuery({
    limit: 10,
  })

  return (
    <ProductsBlockCarousel
      sectionHeading={heading}
      products={data?.productRef}
      loading={isLoading}
      error={error?.message}
      uniqueKey='new-arrivals'
      type='gridTrendy'
      className='mb-12 md:mb-14 xl:mb-16'
      imgWidth={344}
      imgHeight={344}
    />
  )
}
