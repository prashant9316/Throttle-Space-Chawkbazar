import Scrollbar from '@components/common/scrollbar';
import { useUI } from '@contexts/ui.context';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { useTranslation } from 'next-i18next';
import { getDirection } from '@utils/get-direction';
import { useRouter } from 'next/router';
import { CollectionFilters } from './collection-filters';

const CollectionFilterSidebar = () => {
  const { closeFilter } = useUI();
  const router = useRouter();
  const { t } = useTranslation('common');
  const dir = getDirection(router.locale);
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="w-full border-b border-gray-100 flex justify-between items-center relative ltr:pr-5 ltr:md:pr-7 rtl:pl-5 rtl:md:pl-7 flex-shrink-0 py-0.5">
        <button
          className="flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity md:px-5 lg:py-8 focus:outline-none hover:opacity-60"
          onClick={closeFilter}
          aria-label="close"
        >
          {dir === 'rtl' ? (
            <IoArrowForward className="text-black" />
          ) : (
            <IoArrowBack className="text-black" />
          )}
        </button>
        <h2 className="w-full m-0 text-xl font-bold text-center md:text-2xl text-heading ltr:pr-6 rtl:pl-6">
          {t('text-collections')}
        </h2>
      </div>

      <Scrollbar className="flex-grow mb-auto menu-scrollbar">
        <div className="flex flex-col px-5 py-7 md:px-7 text-heading">
          <CollectionFilters />
        </div>
      </Scrollbar>

      <div className="flex items-center justify-center flex-shrink-0 text-sm leading-4 text-white md:text-base px-7 h-14 bg-heading">
        9,608 {t('text-items')}
      </div>
    </div>
  );
};

export default CollectionFilterSidebar;
