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
  console.log(data)
  const groupedData = data?.productRef.reduce((grouped: any, item) => {
    const key = item.category.name.en;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item)
    return grouped;
  }, {});
  console.log(groupedData)
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
          {groupedData && Object.keys(groupedData).map((item, index) => (
            <Tab
              as="li"
              key={index}
              className={({ selected }) =>
                selected
                  ? 'tab-li-selected'
                  : 'tab-li focus-visible:outline-0 focus-visible:outline-transparent'
              }
            >
              <p>{item}</p>
            </Tab>
          ))}
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
          {groupedData && Object.keys(groupedData).map((item, index) => (
            <Tab.Panel key={index}>
              <ProductsBlock
                products={groupedData[item]}
                loading={isLoading}
                error={error?.message}
                uniqueKey="new-arrivals"
                variant="gridModernWide"
                imgWidth={435}
                imgHeight={435}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default NewArrivalsProductFeedWithTabs;
