import BannerCard from '@components/common/banner-card';
import Carousel from '@components/ui/carousel/carousel';
import { ROUTES } from '@utils/routes';
import { SwiperSlide } from 'swiper/react';
import cn from 'classnames';

interface Props {
  data: any;
  className?: string;
  buttonGroupClassName?: string;
  variant?: 'box' | 'fullWidth';
  variantRounded?: 'rounded' | 'default';
  prevNextButtons?: 'none' | '';
}
//  2xl:mb-[75px]
const HeroSlider: React.FC<Props> = ({
  className = 'mb-12 md:mb-14 xl:mb-[60px]',
  variant = 'box',
  variantRounded = 'rounded',
  buttonGroupClassName = '',
  data,
  prevNextButtons = '',
}) => {
  return (
    <div
      className={cn(
        'relative mb-5 md:mb-8',
        {
          'mx-auto max-w-[1920px]': variant === 'fullWidth',
        },
        className
      )}
    >
      <Carousel
        autoplay={{
          delay: 5000,
        }}
        className={`mx-0 ${
          variant === 'fullWidth' ? 'carousel-full-width' : ''
        }`}
        paginationPosition="left"
        prevButtonClasses={`ltr:left-6 rtl:right-6 ltr:md:left-8 rtl:md:right-8 ltr:xl:left-12 rtl:xl:right-12 ltr:2xl:left-16 rtl:2xl:right-16 ${
          prevNextButtons === 'none' && 'hidden'
        }`}
        nextButtonClasses={`ltr:right-6 rtl:left-6 ltr:md:right-8 rtl:md:left-8 ltr:xl:right-12 rtl:xl:left-12 ltr:2xl:right-16 rtl:2xl:left-16 ${
          prevNextButtons === 'none' && 'hidden'
        }`}
        buttonGroupClassName={buttonGroupClassName}
        nextActivateId="hero-slider-next"
        prevActivateId="hero-slider-prev"
        pagination={{
          clickable: true,
        }}
      >
        {data?.map((banner: any) => (
          <SwiperSlide
            className="carouselItem"
            key={`banner--key-${banner?.id}`}
          >
            <BannerCard
              banner={banner}
              href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
              variant={variantRounded}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
