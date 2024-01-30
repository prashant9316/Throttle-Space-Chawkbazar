import cn from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import { useUI } from '@contexts/ui.context';
// import usePrice from '@framework/product/use-price';
import { ProductDetails } from '@framework/types';
// import ProductIcon1 from '../../../public/assets/images/products/icons/product-icon1.svg'
// import ProductIcon2 from '../../../public/assets/images/products/icons/product-icon2.svg'
// import ProductIcon3 from '../../../public/assets/images/products/icons/product-icon3.svg'
import ProductViewIcon from '@components/icons/product-view-icon';
import ProductWishIcon from '@components/icons/product-wish-icon';
import ProductCompareIcon from '@components/icons/product-compare-icon';
import RatingDisplay from '@components/common/rating-display';

interface ProductProps {
  product?: ProductDetails;
  className?: string;
  contactClassName?: string;
  imageContentClassName?: string;
  variant?:
  | 'grid'
  | 'gridSlim'
  | 'list'
  | 'listSmall'
  | 'gridModern'
  | 'gridModernWide'
  | 'gridTrendy'
  | 'rounded'
  | 'circle';
  imgWidth?: number | string;
  imgHeight?: number | string;
  imgLoading?: 'eager' | 'lazy';
  hideProductDescription?: boolean;
  showCategory?: boolean;
  showRating?: boolean;
  bgTransparent?: boolean;
  bgGray?: boolean;
  demoVariant?: 'ancient';
  disableBorderRadius?: boolean;
}

const ProductCard: FC<ProductProps> = ({
  product,
  className = '',
  contactClassName = '',
  imageContentClassName = '',
  variant = 'list',
  imgWidth = 340,
  imgHeight = 440,
  imgLoading,
  hideProductDescription = false,
  showCategory = false,
  showRating = false,
  bgTransparent = false,
  bgGray = false,
  demoVariant,
  disableBorderRadius = false,
}) => {
  if (!product) return null;
  const { openModal, setModalView, setModalData } = useUI();
  const placeholderImage = `/assets/placeholder/products/product-${variant}.svg`;
  // const { price, basePrice, discount } = usePrice({
  //   amount: product.prices.price ? product.prices.originalPrice : product.prices.price,
  //   baseAmount: product.prices.price,
  //   currencyCode: 'INR',
  // });

  // const discount = product.prices.price - product.prices.originalPrice;
  // const price = `₹${product.prices.price}/-`;
  // const basePrice = `₹${product.prices.originalPrice}/-`;
  const discount = product.prices.price - product.prices.originalPrice;
  const price = `₹${product.prices.price}/-`;
  const basePrice = `₹${product.prices.originalPrice}/-`;
  function handlePopupView() {
    setModalData({ data: product });
    setModalView('PRODUCT_VIEW');
    return openModal();
  }

  return (
    <div
      className={cn(
        `group box-border overflow-hidden flex ${!disableBorderRadius && 'rounded-md'
        } cursor-pointer`,
        {
          'ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product':
            variant === 'grid' ||
            variant === 'gridModern' ||
            variant === 'gridModernWide' ||
            variant === 'gridTrendy',
          ' bg-white':
            (variant === 'grid' && !bgGray) ||
            (variant === 'gridModern' && !bgGray) ||
            (variant === 'gridModernWide' && !bgGray) ||
            (variant === 'gridTrendy' && !bgGray) ||
            (variant === 'gridSlim' && !bgGray),
          'bg-gray-200': variant === 'list' || bgGray,
          'ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start':
            variant === 'gridSlim',
          'items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct':
            variant === 'listSmall',
          'flex-row items-center transition-transform ease-linear ltr:pr-2 rtl:pl-2 ltr:lg:pr-3 rtl:lg:pl-3 ltr:2xl:pr-4 rtl:2xl:pl-4':
            variant === 'list',
          '!bg-transparent': variant === 'grid' && bgTransparent === true,
        },
        className
      )}
      onClick={handlePopupView}
      role="button"
      title={product?.title.en}
    >
      <div
        className={cn(
          'flex',
          {
            'mb-3 md:mb-3.5': variant === 'grid',
            'mb-3 md:mb-3.5 pb-0': variant === 'gridSlim',
            'flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44':
              variant === 'listSmall',
            'mb-3 md:mb-3.5 relative':
              variant === 'gridModern' ||
              variant === 'gridModernWide' ||
              variant === 'gridTrendy',
          },
          imageContentClassName
        )}
      >
        <Image
          src={product?.image[0] ?? placeholderImage}
          width={demoVariant === 'ancient' ? 352 : imgWidth}
          height={demoVariant === 'ancient' ? 452 : imgHeight}
          loading={imgLoading}
          quality={100}
          alt={product?.title.en || 'Product Image'}
          className={cn(
            `bg-gray-300 object-cover ${!disableBorderRadius && 'rounded-s-md'
            }`,
            {
              'w-full transition duration-200 ease-in':
                variant === 'grid' ||
                variant === 'gridModern' ||
                variant === 'gridModernWide' ||
                variant === 'gridTrendy',
              'rounded-md group-hover:rounded-b-none':
                (variant === 'grid' && !disableBorderRadius) ||
                (variant === 'gridModern' && !disableBorderRadius) ||
                (variant === 'gridModernWide' && !disableBorderRadius) ||
                (variant === 'gridTrendy' && !disableBorderRadius),
              'rounded-md transition duration-150 ease-linear transform group-hover:scale-105':
                variant === 'gridSlim',
              'rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105':
                variant === 'list',
            }
          )}
        />

        <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start">
          {discount &&
            (variant === 'gridModernWide' ||
              variant === 'gridModern' ||
              variant === 'gridTrendy') && (
              <span className="bg-heading text-white text-10px md:text-xs leading-5 rounded-md inline-block px-1 sm:px-1.5 xl:px-2 py-0.5 sm:py-1">
                <p>
                  <span className="sm:hidden">-</span>
                  {discount} <span className="hidden sm:inline">OFF</span>
                </p>
              </span>
            )}

          {product &&
            (variant === 'gridModernWide' ||
              variant === 'gridModern' ||
              variant === 'gridTrendy') && (
              <span className="bg-[#B26788] text-white text-10px md:text-xs leading-5 rounded-md inline-block px-1.5 sm:px-1.5 xl:px-2 py-0.5 sm:py-1">
                <p>
                  New <span className="hidden sm:inline">Arrival</span>
                </p>
              </span>
            )}
        </div>

        {variant === 'gridModernWide' && (
          <div className="absolute ltr:right-2 rtl:left-2 ltr:sm:right-3 rtl:sm:left-3 bottom-6 space-y-2 w-[32px] sm:w-[42px] lg:w-[52px]">
            <ProductViewIcon className="w-full transition duration-300 ease-in delay-100 bg-white rounded-md sm:opacity-0 group-hover:opacity-100" />
            <ProductWishIcon className="w-full transition duration-300 ease-in delay-200 bg-white rounded-md sm:opacity-0 group-hover:opacity-100" />
            <ProductCompareIcon className="w-full transition duration-300 ease-in delay-300 bg-white rounded-md sm:opacity-0 group-hover:opacity-100" />
          </div>
        )}
      </div>
      <div
        className={cn(
          'w-full overflow-hidden p-2',
          {
            'md:px-2.5 xl:px-4': variant === 'grid',

            'px-2 md:px-2.5 xl:px-4 h-full flex flex-col':
              variant === 'gridModern' ||
              variant === 'gridModernWide' ||
              variant === 'gridTrendy',

            'ltr:pl-0 rtl:pr-0': variant === 'gridSlim',
            'px-4 lg:px-5 2xl:px-4': variant === 'listSmall',
          },
          contactClassName
        )}
      >
        {(variant === 'gridModern' ||
          variant === 'gridModernWide' ||
          variant === 'gridTrendy') && (
            <div className="flex items-center py-2 gap-x-2">
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6 text-[#FBD103]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-xs font-semibold truncate sm:text-sm text-heading">
                4.5
              </span>
              {product.stock === 0 && (
                <span className="text-xs sm:text-sm leading-5 ltr:pl-3 rtl:pr-3 font-semibold text-[#EF4444]">
                  Out of stock
                </span>
              )}
            </div>
          )}
        {!!(showCategory || showRating) && (
          <div className="flex flex-col md:flex-row md:items-center lg:flex-row xl:flex-row 2xl:flex-row  mb-0.5 items-start">
            {!!showCategory && (
              <h3
                className={cn(
                  'font-semibold text-sm mb-1 md:mb-0 ltr:mr-2 rtl:ml-2 ltr:md:mr-3 rtl:md:ml-3',
                  {
                    'text-white': bgTransparent,
                    'text-black/70': !bgTransparent,
                  }
                )}
              >
                Category
              </h3>
            )}
            {!!showRating && <RatingDisplay rating={2.5} />}
          </div>
        )}
        <h2
          className={cn('truncate mb-1', {
            'text-sm md:text-base': variant === 'grid',
            'font-semibold': demoVariant !== 'ancient',
            'font-bold': demoVariant === 'ancient',
            'text-xs sm:text-sm md:text-base':
              variant === 'gridModern' ||
              variant === 'gridModernWide' ||
              variant === 'gridTrendy',
            'md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg':
              variant === 'gridSlim',
            'text-sm sm:text-base md:mb-1.5 pb-0': variant === 'listSmall',
            'text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5':
              variant === 'list',
            'text-white': bgTransparent,
            'text-heading': !bgTransparent,
          })}
        >
          {product?.title.en}
        </h2>
        {!hideProductDescription && product?.description && (
          <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
            {product?.description.en}
          </p>
        )}
        <div
          className={`font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 ${variant === 'grid'
            ? 'lg:text-lg lg:mt-2.5'
            : 'sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3'
            }
          ${variant === 'gridModern' ||
              variant === 'gridModernWide' ||
              variant === 'gridTrendy'
              ? 'flex flex-col-reverse !gap-x-0 !mt-auto'
              : ''
            } ${bgTransparent ? 'text-white' : 'text-heading'}`}
        >
          <span
            className={`inline-block ${demoVariant === 'ancient' && 'font-bold text-gray-900 text-lg'
              }`}
          >
            {price}
          </span>
          {discount && (
            <del
              className={`sm:text-base font-normal ${bgTransparent ? 'text-white/70' : 'text-gray-800'
                }`}
            >
              {basePrice}
            </del>
          )}
        </div>
      </div>

      {(variant === 'gridTrendy' || variant === 'gridModern') && (
        <div className="absolute flex ltr:right-2 rtl:left-2 bottom-2 gap-x-2">
          <ProductWishIcon className="transition ease-in duration-300 sm:opacity-0 group-hover:opacity-100 delay-200 w-[35px] sm:w-[42px] lg:w-[52px] bg-[#F1F3F4] rounded-md" />
          <ProductCompareIcon className="transition ease-in duration-300 sm:opacity-0 group-hover:opacity-100 delay-300 w-[35px] sm:w-[42px] lg:w-[52px] bg-[#F1F3F4] rounded-md" />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
