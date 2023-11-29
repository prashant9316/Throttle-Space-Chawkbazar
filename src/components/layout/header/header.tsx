import React, { useRef } from 'react';
import SearchIcon from '@components/icons/search-icon';
import { siteSettings } from '@settings/site-settings';
import HeaderMenu from '@components/layout/header/header-menu';
import Logo from '@components/ui/logo';
import { useUI } from '@contexts/ui.context';
import { ROUTES } from '@utils/routes';
import { addActiveScroll } from '@utils/add-active-scroll';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '@components/ui/language-switcher';
const AuthMenu = dynamic(() => import('./auth-menu'), { ssr: false });
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
  ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;
const Header: React.FC = () => {
  const { openSearch, openModal, setModalView, isAuthorized } = useUI();
  const { t } = useTranslation('common');
  const siteHeaderRef = useRef() as DivElementRef;
  addActiveScroll(siteHeaderRef);

  function handleLogin() {
    setModalView('LOGIN_VIEW');
    return openModal();
  }

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="relative z-20 w-full h-16 sm:h-20 lg:h-24"
    >
      <div className="fixed z-20 w-full h-16 px-4 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font sm:h-20 lg:h-24 md:px-8 lg:px-6">
        <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
          <Logo />

          <HeaderMenu
            data={site_header.menu}
            className="hidden lg:flex ltr:md:ml-6 rtl:md:mr-6 ltr:xl:ml-10 rtl:xl:mr-10"
          />

          <div className="flex-shrink-0 ltr:ml-auto rtl:mr-auto ltr:lg:mr-5 rtl:lg:ml-5 ltr:xl:mr-8 rtl:xl:ml-8 ltr:2xl:mr-10 rtl:2xl:ml-10">
            <LanguageSwitcher />
          </div>
          <div className="items-center justify-end flex-shrink-0 hidden lg:flex gap-x-6 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10 ltr:ml-auto rtl:mr-auto">
            <button
              className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
              onClick={openSearch}
              aria-label="search-button"
            >
              <SearchIcon />
            </button>
            <div className="-mt-0.5 flex-shrink-0">
              <AuthMenu
                isAuthorized={isAuthorized}
                href={ROUTES.ACCOUNT}
                className="text-sm font-semibold xl:text-base text-heading"
                btnProps={{
                  className:
                    'text-sm xl:text-base text-heading font-semibold focus:outline-none',
                  // @ts-ignore
                  children: t('text-sign-in'),
                  onClick: handleLogin,
                }}
              >
                {t('text-account')}
              </AuthMenu>
            </div>
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
