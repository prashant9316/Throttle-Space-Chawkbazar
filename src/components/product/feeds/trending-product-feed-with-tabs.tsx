import SectionHeader from '@components/common/section-header'
import ProductsBlock from '@containers/products-block'
import { useTranslation } from 'next-i18next'
import { useProductsQuery } from '@framework/product/get-all-products-2'
import { Tab } from '@headlessui/react'

const TrendingProductFeedWithTabs: React.FC<any> = () => {
  const { t } = useTranslation('common')

  const { data, isLoading, error } = useProductsQuery({
    limit: 10,
  })

  return (
    <div className='mb-12 md:mb-14 xl:mb-16'>
      <SectionHeader
        sectionHeading='text-trending-products'
        className='pb-0.5 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-5'
      />

      <Tab.Group as='div' className=''>
        <Tab.List as='ul' className='tab-ul'>
          <Tab
            as='li'
            className={({ selected }) =>
              selected ? 'tab-li-selected' : 'tab-li'
            }
          >
            <p className=''>{t('All Products')}</p>
          </Tab>
          <Tab
            as='li'
            className={({ selected }) =>
              selected ? 'tab-li-selected' : 'tab-li'
            }
          >
            <p>{t('Flash Sale')}</p>
          </Tab>
          <Tab
            as='li'
            className={({ selected }) =>
              selected ? 'tab-li-selected' : 'tab-li'
            }
          >
            <p>{t('Best Selling')}</p>
          </Tab>
          <Tab
            as='li'
            className={({ selected }) =>
              selected ? 'tab-li-selected' : 'tab-li'
            }
          >
            <p>{t('Featured Products')}</p>
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <ProductsBlock
              products={data?.productRef}
              loading={isLoading}
              error={error?.message}
              uniqueKey='new-arrivals'
              variant='gridModern'
              imgWidth={344}
              imgHeight={344}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ProductsBlock
              products={data?.productRef}
              loading={isLoading}
              error={error?.message}
              uniqueKey='new-arrivals'
              variant='gridModern'
              imgWidth={344}
              imgHeight={344}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ProductsBlock
              products={data?.productRef}
              loading={isLoading}
              error={error?.message}
              uniqueKey='new-arrivals'
              variant='gridModern'
              imgWidth={344}
              imgHeight={344}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ProductsBlock
              products={data?.productRef}
              loading={isLoading}
              error={error?.message}
              uniqueKey='new-arrivals'
              variant='gridModern'
              imgWidth={344}
              imgHeight={344}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default TrendingProductFeedWithTabs
