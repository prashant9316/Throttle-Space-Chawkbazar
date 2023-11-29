import Image from 'next/image';
import Link from '@components/ui/link';
import { useTranslation } from 'next-i18next';

const data = {
  exclusiveName: 'text-new-year',
  year: 2021,
  exclusiveData: [
    {
      id: 1,
      slug: '/search',
      buttonText: 'button-women-exclusive',
      image: '/assets/images/exclusive/women.png',
      backgroundColor: 'bg-gray-150',
    },
    {
      id: 2,
      slug: '/search',
      buttonText: 'button-men-exclusive',
      image: '/assets/images/exclusive/men.png',
      backgroundColor: 'bg-linenSecondary',
    },
  ],
};

interface Props {
  className?: string;
  variant?: 'default' | 'modern';
}

const ExclusiveBlock: React.FC<Props> = ({
  className = 'mb-12 md:mb-14 xl:mb-16',
  variant = 'default',
}) => {
  const { t } = useTranslation('common');
  return (
    <div className={`rounded-md overflow-hidden lg:block ${className}`}>
      <div className="flex justify-between">
        {data.exclusiveData.slice(0, 2).map((item: any) => (
          <div
            className={`group w-2/4 flex justify-between items-end relative transition duration-200 ease-in ${
              item.id === 2 && variant === 'modern'
                ? 'flex-row'
                : 'flex-row-reverse'
            } ${item.backgroundColor}`}
            key={`exclusive--key${item.id}`}
          >
            <div
              className={`exclusiveImage relative z-10 flex transform transition duration-200 ease-in group-hover:scale-105 ${
                variant === 'modern' && item.id === 2
                  ? 'ltr:mr-auto rtl:ml-auto ltr:2xl:pl-24 rtl:2xl:pr-24 ltr:3xl:pl-40 rtl:3xl:pr-40'
                  : 'ltr:ml-auto rtl:mr-auto ltr:2xl:pr-24 rtl:2xl:pl-24 ltr:3xl:pr-40 rtl:3xl:pl-40'
              }`}
            >
              <Image
                src={item.image}
                alt={item.buttonText}
                width={600}
                height={600}
                priority={true}
              />
            </div>
            <Link
              href={item.slug}
              className={`absolute z-10 bottom-3 sm:bottom-5 inline-block bg-white shadow-product rounded-md text-heading lowercase text-sm xl:text-xl 2xl:text-xl sm:uppercase px-3 sm:px-5 xl:px-6 2xl:px-8 py-2.5 sm:py-4 xl:py-5 2xl:py-7 transform transition duration-300 ease-in-out hover:bg-heading hover:text-white ${
                item.id === 2
                  ? variant === 'modern'
                    ? 'ltr:right-3 rtl:left-3 ltr:sm:right-5 rtl:sm:left-5 ltr:xl:right-7 rtl:xl:left-7'
                    : 'ltr:left-3 rtl:right-3 ltr:sm:left-5 rtl:sm:right-5 ltr:xl:left-7 rtl:xl:right-7'
                  : variant === 'modern'
                  ? 'ltr:left-3 rtl:right-3 ltr:sm:left-5 rtl:sm:right-5 ltr:xl:left-7 rtl:xl:right-7'
                  : 'ltr:right-3 rtl:left-3 ltr:sm:right-5 rtl:sm:left-5 ltr:xl:right-7 rtl:xl:left-7'
              } ${
                variant === 'modern'
                  ? 'xl:top-7 xl:bottom-auto'
                  : 'xl:bottom-7 xl:top-auto'
              }`}
            >
              {t(`${item.buttonText}`)}
            </Link>
            {data.exclusiveName && (
              <div
                className={`z-0 absolute top-10 xl:top-12 2xl:top-16 3xl:top-24 uppercase text-black opacity-10 text-xl xl:text-2xl 3xl:text-3xl tracking-widest leading-5 ${
                  item.id === 2
                    ? 'ltr:left-5 rtl:right-5 ltr:xl:left-7 rtl:xl:right-7'
                    : 'ltr:right-5 rtl:left-5 ltr:xl:right-7 rtl:xl:left-7'
                }`}
              >
                {item.id !== 2
                  ? t(`${data.exclusiveName}`)
                  : t('text-exclusive')}
              </div>
            )}

            {data.year && (
              <div
                className={`exclusiveYear absolute top-16 xl:top-20 2xl:top-24 3xl:top-32 ltr:left-0 rtl:right-0 z-10 text-black font-bold leading-none tracking-widest ${
                  item.id === 2
                    ? 'ltr:text-left rtl:text-right pl-4 ltr:left-0 rtl:right-0'
                    : 'ltr:text-right rtl:text-left ltr:right-0 rtl:left-0'
                }`}
              >
                {item.id !== 2
                  ? data.year.toString().slice(0, 2)
                  : data.year.toString().slice(2, 4)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveBlock;
