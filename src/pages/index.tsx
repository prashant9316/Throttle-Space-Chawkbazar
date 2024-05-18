import type { GetStaticProps } from 'next';
import Container from '@components/ui/container';
import HeroSlider from '@containers/hero-slider';
import Layout from '@components/layout/layout-three';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchFlashSaleProducts } from '@framework/product/get-all-flash-sale-products';
import { fetchCategories } from '@framework/category/get-all-categories';
import { fetchNewArrivalProducts } from '@framework/product/get-all-new-arrival-products';
import { fetchBrands } from '@framework/brand/get-all-brands';
import CategoryBlock from '@containers/category-block';
// import ProductsFeatured from '@containers/products-featured';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import CategoryBlockIcon from '@containers/category-block-icon';
// import { ROUTES } from '@utils/routes';
// import { homeSevenBanner as banner } from '@framework/static/banner';
// import { collectionContemporaryData as collection } from '@framework/static/collection';
// import NewArrivalsProductFeedWithTabs from '@components/product/feeds/new-arrivals-product-feed-with-tabs';
// import BannerCard from '@components/common/banner-card';
// import CollectionBlock from '@containers/collection-block';
// import TestimonialCarousel from '@containers/testimonial-carousel';
// All data file
// import { bannerDataContemporary } from '@framework/static/banner';
import { homeContemporaryHeroSlider as banners } from '@framework/static/banner';
// import SaleBannerGrid from '@containers/sale-banner-grid';
// import TrendingProductFeedWithTabs from '@components/product/feeds/trending-product-feed-with-tabs';
import Subscription from '@components/common/subscription';
import Instagram from '@components/common/instagram';
// import RecentProductFeed from '@components/product/feeds/recent-product-feed';
// import Crew from '@components/pilots/Crew';
import ProductScrollCard from '@components/product/product-scroll';
// import BannerProductCard from '@components/product/BannerProducts';
import FeaturedProductCard from '@components/product/product-featured-card';
import YoutubeBannerVideo from '@components/product/YoutubeBannerVideo';
import ProductTilesGroup from '@components/product/product-tiles-group';
// import {
//   contemporaryBanner1,
//   // contemporaryBanner2,
// } from '@framework/static/banner';
// import BrandTimerBlock from '@containers/brand-timer-block';
// import dynamic from 'next/dynamic';
// const DownloadApps = dynamic(() => import('@components/common/download-apps'));

export default function Home() {
  return (
    <div
      className='bg-[#000000]'
    >
      <HeroSlider
        data={banners}
        variantRounded="default"
        variant="fullWidth"
        prevNextButtons="none"
        className="!mb-12 !md:mb-14 !xl:mb-[60px]"
      />
      <Container>

        <ProductScrollCard collection="featured" heading="Featured Products" />
        <YoutubeBannerVideo url={'https://www.youtube.com/embed/lN-Gt_VVwQs?si=rGEVrr9hvHe3_2kb'} heading={"A Sample heading"} description={"A description about the video"} />
        <ProductScrollCard collection="featured" heading="Newly Launched" />

        <FeaturedProductCard id="walksnail-avatar-digital-hd-fpv-goggles-w-patch-antennas" />

        {/* Second Design */}
        <FeaturedProductCard id="dji-o3-air-unit" />
        <CategoryBlock
          sectionHeading="text-shop-by-category"
          type="rounded"
        />
        <ProductScrollCard collection="featured" heading="Newly Launched" />

        {/* <Crew heading="Meet the Crew" /> */}
        {/* <ProductScrollCard collection="walksnail" heading="From Walksnail" /> */}

        <ProductTilesGroup />
        <Instagram className="mb-4 md:mb-5 xl:mb-16" variant="rounded" />
        <Subscription className="bg-opacity-1 px-5 sm:px-16 xl:px-10 mb-12 md:mb-14 xl:mb-16 lg:mt-16 mt-12 py-10 md:py-10 lg:py-16" />
      </Container>
    </div>
  );
}

Home.Layout = Layout;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [API_ENDPOINTS.FLASH_SALE_PRODUCTS, { limit: 10 }],
    queryFn: fetchFlashSaleProducts
  });
  await queryClient.prefetchQuery({
    queryKey: [API_ENDPOINTS.CATEGORIES, { limit: 10 }],
    queryFn: fetchCategories
  });
  await queryClient.prefetchQuery({
    queryKey: [API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, { limit: 10 }],
    queryFn: fetchNewArrivalProducts
  });
  await queryClient.prefetchQuery({
    queryKey: [API_ENDPOINTS.BRANDS, { limit: 0 }],
    queryFn: fetchBrands
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
    revalidate: 60,
  };
};
