import SectionHeader from '@components/common/section-header';
import ProductsBlock from '@containers/products-block';
import { useProductsQuery } from '@framework/product/get-all-products-2';
import { Tab } from '@headlessui/react';
import { useTranslation } from 'next-i18next';

const NewArrivalsProductFeedWithTabs: React.FC<any> = () => {
  const { t } = useTranslation('common');

  const { data, isLoading, error } = useProductsQuery({
    limit: 5,
  });
  // console.log("New Arrival Products:")
  // console.log(data)
  return (
    <div className="mb-12 md:mb-14 xl:mb-16">
      <SectionHeader
        sectionHeading="text-new-arrivals"
        className="pb-0.5 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-5"
      />

      <Tab.Group as="div" className="">
        <Tab.List as="ul" className="tab-ul">
          <Tab
            as="li"
            className={({ selected }) =>
              selected
                ? 'tab-li-selected'
                : 'tab-li focus-visible:outline-0 focus-visible:outline-transparent'
            }
          >
            <p>{t('All Products')}</p>
          </Tab>
          <Tab
            as="li"
            className={({ selected }) =>
              selected ? 'tab-li-selected' : 'tab-li'
            }
          >
            <p>{t('Frames')}</p>
          </Tab>
          <Tab
            as="li"
            className={({ selected }) =>
              selected ? 'tab-li-selected' : 'tab-li'
            }
          >
            <p>{t('Batteries')}</p>
          </Tab>
          {/* <Tab
            as="li"
            className={({ selected }) =>
              selected ? 'tab-li-selected' : 'tab-li'
            }
          >
            <p>{t('Radios')}</p>
          </Tab> */}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <ProductsBlock
              products={data?.productRef}
              loading={isLoading}
              error={error?.message}
              uniqueKey="new-arrivals"
              variant="gridModernWide"
              imgWidth={435}
              imgHeight={435}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ProductsBlock
              products={data?.productRef}
              loading={isLoading}
              error={error?.message}
              uniqueKey="new-arrivals"
              variant="gridModernWide"
              imgWidth={435}
              imgHeight={435}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ProductsBlock
              products={data?.productRef}
              loading={isLoading}
              error={error?.message}
              uniqueKey="new-arrivals"
              variant="gridModernWide"
              imgWidth={435}
              imgHeight={435}
            />
          </Tab.Panel>
          {/* <Tab.Panel>
            <ProductsBlock
              products={data?.productRef}
              loading={isLoading}
              error={error?.message}
              uniqueKey="new-arrivals"
              variant="gridModernWide"
              imgWidth={435}
              imgHeight={435}
            />
          </Tab.Panel> */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default NewArrivalsProductFeedWithTabs;
