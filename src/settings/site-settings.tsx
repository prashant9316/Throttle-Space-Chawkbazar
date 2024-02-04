import { ILFlag } from '@components/icons/ILFlag';
import { SAFlag } from '@components/icons/SAFlag';
import { CNFlag } from '@components/icons/CNFlag';
import { USFlag } from '@components/icons/USFlag';
import { DEFlag } from '@components/icons/DEFlag';
import { ESFlag } from '@components/icons/ESFlag';
import Nike from 'public/assets/images/brands/megamenu/nike.png';
import Dior from 'public/assets/images/brands/megamenu/dior.png';
import Gucci from 'public/assets/images/brands/megamenu/gucci.png';
import Gucci1 from 'public/assets/images/brands/megamenu/gucci1.png';
import Puma from 'public/assets/images/brands/megamenu/puma.png';
import Levis from 'public/assets/images/brands/megamenu/levis.png';
import Banner1 from 'public/assets/images/banner/megamenu/banner-1.png';
import Banner2 from 'public/assets/images/banner/megamenu/banner-2.png';

import { ThunderIcon } from '@components/icons/thunder-icon';
import { WomenIcon } from '@components/icons/women-icon';
// import { MenIcon } from '@ck
import { SunglassIcon } from '@components/icons/sunglass-icon';
import { SneakerIcon } from '@components/icons/sneaker-icon';
import { ThaiFlag } from '@components/icons/ThailFlag';

export const siteSettings = {
  name: 'ThrottleSpace',
  description: 'One Stop for all FPV Gear.',
  author: {
    name: 'Prashant Mishra',
    websiteUrl: 'https://prashant9316.github.io/profile/',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.webp',
    alt: 'THROTTLESPACE',
    href: '/',
    width: 150,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'INR',
  site_header: {
    menu: [
      {
        id: 2,
        path: '/search?q=men-wear',
        label: 'Frames',
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: '5 inch Frames',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'Frame Sub-category',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'Frame Sub-category 2',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'Frame Sub-category 3',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'Frame Sub-category 4',
                  }
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'Frame Accessories',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'Tools',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'Whoops',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'Cine Whoop',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'Frame Sub-category 2',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'Frame Sub-category 3',
                  }
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'Whoop tools',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'Whoop blogs',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: '3inch-5inch Frames',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'Frame Sub-category',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'Frame Sub-category 2',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'Frame Sub-category 3',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'Frame Sub-category 4',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'Long Range Frames',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: '6inch Frames',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: '7inch Frames',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: '10inch Frames',
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: '/search?q=lingerie-sleepwear',
                label: 'Customized FPV',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=bra',
                    label: 'Ultra Long Range',
                  },
                  {
                    id: 2,
                    path: '/search?q=briefs',
                    label: 'Quad Builder',
                  },
                  {
                    id: 3,
                    path: '/search?q=sleepwear',
                    label: 'Connect with us',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'Custom Frame',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=makeup',
                    label: 'Frame Sub-category',
                  },
                  {
                    id: 2,
                    path: '/search?q=skincare',
                    label: 'Frame Sub-category 2',
                  },
                  {
                    id: 3,
                    path: '/search?q=premium-beauty',
                    label: 'Frame Sub-category 3',
                  },
                  {
                    id: 4,
                    path: '/search?q=lipsticks',
                    label: 'Frame Sub-category 4',
                  },
                ],
              },
            ],
          }
        ],
      },
      {
        id: 4,
        path: '/category/electronics',
        label: 'Electronics',
      },
      {
        id: 5,
        path: '/category/radios',
        label: 'Radios',
      },
      {
        id: 6,
        path: '/',
        label: 'menu-pages',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-users',
            subMenu: [
              {
                id: 1,
                path: '/my-account',
                label: 'menu-my-account',
              },
              {
                id: 2,
                path: '/signin',
                label: 'menu-sign-in',
              },
              {
                id: 3,
                path: '/signup',
                label: 'menu-sign-up',
              },
              {
                id: 4,
                path: '/forget-password',
                label: 'menu-forget-password',
              },
            ],
          },
          {
            id: 2,
            path: '/faq',
            label: 'menu-faq',
          },
          {
            id: 3,
            path: '/privacy',
            label: 'menu-privacy-policy',
          },
          {
            id: 4,
            path: '/terms',
            label: 'menu-terms-condition',
          },
          {
            id: 5,
            path: '/contact-us',
            label: 'menu-contact-us',
          },
          {
            id: 6,
            path: '/checkout',
            label: 'menu-checkout',
          },
          {
            id: 7,
            path: '/collections/mens-collection',
            label: 'menu-collection',
          },
          {
            id: 8,
            path: '/category/man',
            label: 'menu-category',
          },
          {
            id: 9,
            path: '/order',
            label: 'menu-order',
          },
          {
            id: 10,
            path: '/404',
            label: 'menu-404',
          },
        ],
      },
    ],
    mobileMenu: [
      {
        id: 2,
        path: '/search?q=men-wear',
        label: 'menu-men-wear',
        subMenu: [
          {
            id: 1,
            path: '/search?q=top-wear',
            label: 'menu-top-wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=t-shit-shirtrt',
                label: 'menu-t-shirt',
              },
              {
                id: 2,
                path: '/search?q=casual-shirts',
                label: 'menu-casual-shirts',
              },
              {
                id: 3,
                path: '/search?q=formal-shirts',
                label: 'menu-formal-shirts',
              },
              {
                id: 4,
                path: '/search?q=blazwers-coats',
                label: 'menu-blazwers-coats',
              },
              {
                id: 5,
                path: '/search?q=suits',
                label: 'menu-suits',
              },
              {
                id: 6,
                path: '/search?q=jackets',
                label: 'menu-jackets',
              },
            ],
          },
          {
            id: 2,
            path: '/search?q=belt-scarves',
            label: 'menu-belt-scarves',
          },
          {
            id: 3,
            path: '/search?q=watches-wearables',
            label: 'menu-watches-wearables',
          },
          {
            id: 4,
            path: '/search?q=western-wear',
            label: 'menu-western-wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=dresses',
                label: 'menu-dresses',
              },
              {
                id: 2,
                path: '/search?q=jumpsuits',
                label: 'menu-jumpsuits',
              },
              {
                id: 3,
                path: '/search?q=tops-t-shirt',
                label: 'menu-tops-shirts',
              },
              {
                id: 4,
                path: '/search?q=shorts-skirts',
                label: 'menu-shorts-skirts',
              },
              {
                id: 5,
                path: '/search?q=shurgs',
                label: 'menu-shurgs',
              },
              {
                id: 6,
                path: '/search?q=blazers',
                label: 'menu-blazers',
              },
            ],
          },
          {
            id: 5,
            path: '/search?q=plus-size',
            label: 'menu-plus-size',
          },
          {
            id: 6,
            path: '/search?q=sunglasses-frames',
            label: 'menu-sunglasses-frames',
          },
          {
            id: 7,
            path: '/search?q=footwear',
            label: 'menu-footwear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=flats',
                label: 'menu-flats',
              },
              {
                id: 2,
                path: '/search?q=casual-shoes',
                label: 'menu-casual-shoes',
              },
              {
                id: 3,
                path: '/search?q=heels',
                label: 'menu-heels',
              },
              {
                id: 4,
                path: '/search?q=boots',
                label: 'menu-boots',
              },
            ],
          },
          {
            id: 8,
            path: '/search?q=sports-active-wear',
            label: 'menu-sports-active-wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=clothing',
                label: 'menu-clothing',
              },
              {
                id: 2,
                path: '/search?q=footwear',
                label: 'menu-footwear',
              },
              {
                id: 3,
                path: '/search?q=sports-accessories',
                label: 'menu-sports-accessories',
              },
            ],
          },
          {
            id: 9,
            path: '/search?q=lingerie-sleepwear',
            label: 'menu-lingerie-sleepwear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=bra',
                label: 'menu-bra',
              },
              {
                id: 2,
                path: '/search?q=briefs',
                label: 'menu-briefs',
              },
              {
                id: 3,
                path: '/search?q=sleepwear',
                label: 'menu-sleepwear',
              },
            ],
          },
          {
            id: 10,
            path: '/search?q=belt-scarves',
            label: 'menu-belt-scarves',
            subMenu: [
              {
                id: 1,
                path: '/search?q=makeup',
                label: 'menu-makeup',
              },
              {
                id: 2,
                path: '/search?q=skincare',
                label: 'menu-skincare',
              },
              {
                id: 3,
                path: '/search?q=premium-beauty',
                label: 'menu-premium-beauty',
              },
              {
                id: 4,
                path: '/search?q=lipsticks',
                label: 'menu-lipsticks',
              },
            ],
          },
          {
            id: 11,
            path: '/search?q=gadgets',
            label: 'menu-gadgets',
            subMenu: [
              {
                id: 1,
                path: '/search?q=smart-wearables',
                label: 'menu-smart-wearables',
              },
              {
                id: 2,
                path: '/search?q=headphones',
                label: 'menu-headphones',
              },
            ],
          },
          {
            id: 12,
            path: '/search?q=jewellers',
            label: 'menu-jewellers',
            subMenu: [
              {
                id: 1,
                path: '/search?q=fashion-jewellers',
                label: 'menu-fashion-jewellers',
              },
              {
                id: 2,
                path: '/search?q=fine-jewellers',
                label: 'menu-fine-jewellers',
              },
            ],
          },
          {
            id: 13,
            path: '/search?q=backpacks',
            label: 'menu-backpacks',
          },
          {
            id: 14,
            path: '/search?q=handbags-wallets',
            label: 'menu-handbags-wallets',
          },
        ],
      },
      {
        id: 3,
        path: '/search?q=women-wear',
        label: 'menu-women-wear',
      },
      {
        id: 4,
        path: '/search',
        label: 'menu-search',
      },
      {
        id: 5,
        path: '/shops',
        label: 'menu-shops',
      },
      {
        id: 6,
        path: '/',
        label: 'menu-pages',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-users',
            subMenu: [
              {
                id: 1,
                path: '/my-account',
                label: 'menu-my-account',
              },
              {
                id: 2,
                path: '/signin',
                label: 'menu-sign-in',
              },
              {
                id: 3,
                path: '/signup',
                label: 'menu-sign-up',
              },
              {
                id: 4,
                path: '/forget-password',
                label: 'menu-forget-password',
              },
            ],
          },
          {
            id: 2,
            path: '/faq',
            label: 'menu-faq',
          },
          {
            id: 3,
            path: '/privacy',
            label: 'menu-privacy-policy',
          },
          {
            id: 4,
            path: '/terms',
            label: 'menu-terms-condition',
          },
          {
            id: 5,
            path: '/contact-us',
            label: 'menu-contact-us',
          },
          {
            id: 6,
            path: '/checkout',
            label: 'menu-checkout',
          },
          {
            id: 7,
            path: '/collections/mens-collection',
            label: 'menu-collection',
          },
          {
            id: 8,
            path: '/category/man',
            label: 'menu-category',
          },
          {
            id: 9,
            path: '/order',
            label: 'menu-order',
          },
          {
            id: 10,
            path: '/404',
            label: 'menu-404',
          },
        ],
      },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag width="20px" height="15px" />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag width="20px" height="15px" />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag width="20px" height="15px" />,
      },
      {
        id: 'th',
        name: 'แบบไทย - TH',
        value: 'th',
        icon: <ThaiFlag width="20px" height="15px" />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag width="20px" height="15px" />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag width="20px" height="15px" />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <ESFlag width="20px" height="15px" />,
      },
    ],
    categoryMenu: [
      {
        id: 1,
        path: '/',
        label: 'Frames',
        icon: <WomenIcon />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'Frame by size',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: '1-2 inch Frames',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: '3-5 inch Frames',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: '6-10 inch Frames',
                  }
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'Frame Tools',
              }
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'menu-western-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'menu-dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'menu-jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'menu-tops-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'menu-shorts-skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'menu-shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'menu-blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'menu-plus-size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'menu-sunglasses-frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'menu-footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'menu-flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'menu-casual-shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'menu-heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'menu-boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'menu-sports-active-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'menu-clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'menu-footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'menu-sports-accessories',
                  },
                ],
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },

      {
        id: 7,
        path: '/',
        label: 'Electronics',
        icon: <SunglassIcon />,
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 8,
        path: '/',
        label: 'Radios',
        icon: <SneakerIcon />,
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
    ],
    pagesMenu: [
      {
        id: 1,
        path: '/search',
        label: 'menu-deals-today',
        icon: <ThunderIcon className="w-3 h-auto" />,
      },
      {
        id: 2,
        path: '/',
        label: 'menu-offers',
      },
      {
        id: 3,
        path: '/faq',
        label: 'menu-faq',
      },
      {
        id: 4,
        path: '/contact-us',
        label: 'menu-contact',
      },
    ],
  },
};
