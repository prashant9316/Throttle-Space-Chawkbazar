import { ILFlag } from '@components/icons/ILFlag';
import { SAFlag } from '@components/icons/SAFlag';
import { CNFlag } from '@components/icons/CNFlag';
import { USFlag } from '@components/icons/USFlag';
import { DEFlag } from '@components/icons/DEFlag';
import { ESFlag } from '@components/icons/ESFlag';
// import Nike from 'public/assets/images/brands/megamenu/nike.png';
// import Dior from 'public/assets/images/brands/megamenu/dior.png';
// import Gucci from 'public/assets/images/brands/megamenu/gucci.png';
// import Gucci1 from 'public/assets/images/brands/megamenu/gucci1.png';
// import Puma from 'public/assets/images/brands/megamenu/puma.png';
// import Levis from 'public/assets/images/brands/megamenu/levis.png';
// import Banner1 from 'public/assets/images/banner/megamenu/banner-1.png';
// import Banner2 from 'public/assets/images/banner/megamenu/banner-2.png';

import { ThunderIcon } from '@components/icons/thunder-icon';
// import { WomenIcon } from '@components/icons/women-icon';
// import { MenIcon } from '@ck
import { SunglassIcon } from '@components/icons/sunglass-icon';
import { SneakerIcon } from '@components/icons/sneaker-icon';
import { ThaiFlag } from '@components/icons/ThailFlag';

export const siteSettings = {
  name: 'ThrottleSpace',
  description: 'One Stop for all FPV Gear.',
  author: {
    name: 'Trinity Systems Pvt. Ltd.',
    websiteUrl: 'throttlespace.com',
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
        id: 1,
        path: '/',
        label: 'Frames',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: '1-2 Inch Frames',
          },
          {
            id: 2,
            path: '/',
            label: '3-4 Inch Frames',
          },
          {
            id: 3,
            path: '/',
            label: '5-6 Inch Frames',
          },
          {
            id: 4,
            path: '/',
            label: '7-10 Inch Frames',
          }
        ],
      },
      {
        id: 2,
        path: '/category/electronics',
        label: 'Electronics',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'Flight Controllers',
          },
          {
            id: 2,
            path: '/',
            label: 'Electronic Speed Controllers',
          },
          {
            id: 3,
            path: '/',
            label: 'Stacks',
          },
          {
            id: 4,
            path: '/',
            label: 'AIOs',
          }
        ]
      },
      {
        id: 3,
        path: '/category/radios',
        label: 'Radios',
      },
      {
        id: 4,
        path: '/',
        label: 'FPV Equipment',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'FPV Goggles',
          },
          {
            id: 2,
            path: '/',
            label: 'GPV Cameras',
          },
          {
            id: 3,
            path: '/',
            label: 'VTX',
          },
          {
            id: 3,
            path: '/',
            label: 'VRX',
          }
        ],
      },
      {
        id: 5,
        path: '/',
        label: 'Motors',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'Micro Motors',
          },
          {
            id: 2,
            path: '/',
            label: 'Mini Motors',
          },
          {
            id: 3,
            path: '/',
            label: 'Long Range',
          }
        ],
      },
      {
        id: 6,
        path: '/',
        label: 'Batteries',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: '1S Batteries',
          },
          {
            id: 2,
            path: '/',
            label: '2S Batteries',
          },
          {
            id: 3,
            path: '/',
            label: '3S Batteries',
          },
          {
            id: 3,
            path: '/',
            label: '4S Batteries',
          },
          {
            id: 3,
            path: '/',
            label: '6S Batteries',
          },
          {
            id: 3,
            path: '/',
            label: 'Li-Ion Batteries',
          },
          {
            id: 3,
            path: '/',
            label: 'Custom Packs',
          },
        ],
      },
      {
        id: 7,
        path: '/',
        label: 'RTF & PNP',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'Ready to Fly Builds',
          },
          {
            id: 2,
            path: '/',
            label: 'Customize your build',
          },
          {
            id: 3,
            path: '/',
            label: 'ThrottleSpace Exclusives',
          }
        ],
      },
      {
        id: 7,
        label: "Tools & Accessories",
        path: "/",
        subMenu: [
          {
            id: 1,
            label: 'Multimeters',
            path: '/',
          },
          {
            id: 1,
            label: 'Tools',
            path: '/',
          },
          {
            id: 1,
            label: 'Soldering Irons',
            path: '/',
          },
          {
            id: 1,
            label: 'Heat Shrink Tubes',
            path: '/',
          },
        ]
      }
    ],
    mobileMenu: [
      {
        id: 1,
        path: '/search',
        label: 'Frames',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: '1-2 Inch Frames',
          },
          {
            id: 2,
            path: '/',
            label: '3-4 Inch Frames',
          },
          {
            id: 3,
            path: '/',
            label: '5-6 Inch Frames',
          },
          {
            id: 4,
            path: '/',
            label: '7-10 Inch Frames',
          },
        ],
      },
      {
        id: 2,
        path: '/search?q=women-wear',
        label: 'Electronics',
        subMenu: [
          {
            id: 1,
            label: 'Flight Controllers',
            path: '/',
          },
          {
            id: 2,
            label: 'Electronic Speed Controllers',
            path: '/',
          },
          {
            id: 3,
            label: 'Stacks',
            path: '/',
          },
          {
            id: 4,
            label: 'AIOs',
            path: '/',
          },
        ]
      },
      {
        id: 3,
        path: '/',
        label: 'Radios',
      },
      {
        id: 4,
        path: '/',
        label: 'FPV Equipment',
        subMenu: [
          {
            id: 1,
            label: 'FPV Goggles',
            path: '/',
          },
          {
            id: 2,
            label: 'FPV Cameras',
            path: '/',
          },
          {
            id: 3,
            label: 'VTX',
            path: '/',
          },
          {
            id: 3,
            label: 'VRX',
            path: '/',
          },
        ],
      },
      {
        id: 5,
        path: '/search?q=accessories',
        label: 'Motors',
        subMenu: [
          {
            id: 1,
            label: 'Micro Motors',
            path: '/',
          },
          {
            id: 2,
            label: 'Mini Motors',
            path: '/',
          },
          {
            id: 3,
            label: 'Long Range',
            path: '/',
          },
        ],
      },
      {
        id: 6,
        path: '/search?q=accessories',
        label: 'Batteries',
        subMenu: [
          {
            id: 1,
            label: '1S Batteries',
            path: '/',
          },
          {
            id: 2,
            label: '2S Batteries',
            path: '/',
          },
          {
            id: 3,
            label: '3S Batteries',
            path: '/',
          },
          {
            id: 3,
            label: '4S Batteries',
            path: '/',
          },
          {
            id: 3,
            label: '6S Batteries',
            path: '/',
          },
          {
            id: 3,
            label: 'Li-Ion Batteries',
            path: '/',
          },
          {
            id: 3,
            label: 'Custom Packs',
            path: '/',
          },
        ],
      },
      {
        id: 7,
        path: '/',
        label: 'RTF & PNP',
        subMenu: [
          {
            id: 1,
            label: 'Ready to Fly Builds',
            path: '/',
          },
          {
            id: 2,
            label: 'Customize your build',
            path: '/',
          },
          {
            id: 3,
            label: 'ThrottleSpace Exclusives',
            path: '/',
          },
        ],
      },
      {
        id: 7,
        label: "Tools & Accessories",
        path: "/",
        subMenu: [
          {
            id: 1,
            label: 'Multimeters',
            path: '/',
          },
          {
            id: 1,
            label: 'Tools',
            path: '/',
          },
          {
            id: 1,
            label: 'Soldering Irons',
            path: '/',
          },
          {
            id: 1,
            label: 'Heat Shrink Tubes',
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
      // {
      //   id: 1,
      //   path: '/',
      //   label: 'Frames',
      //   icon: <WomenIcon />,
      //   columns: [
      //     {
      //       id: 1,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: '/search?q=top-wear',
      //           label: 'Frame by size',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=t-shit-shirtrt',
      //               label: '1-2 inch Frames',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=casual-shirts',
      //               label: '3-5 inch Frames',
      //             },
      //             {
      //               id: 3,
      //               path: '/search?q=formal-shirts',
      //               label: '6-10 inch Frames',
      //             }
      //           ],
      //         },
      //         {
      //           id: 2,
      //           path: '/search?q=belt-scarves',
      //           label: 'Frame Tools',
      //         }
      //       ],
      //     },
      //     {
      //       id: 2,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: '/search?q=western-wear',
      //           label: 'menu-western-wear',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=dresses',
      //               label: 'menu-dresses',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=jumpsuits',
      //               label: 'menu-jumpsuits',
      //             },
      //             {
      //               id: 3,
      //               path: '/search?q=tops-t-shirt',
      //               label: 'menu-tops-shirts',
      //             },
      //             {
      //               id: 4,
      //               path: '/search?q=shorts-skirts',
      //               label: 'menu-shorts-skirts',
      //             },
      //             {
      //               id: 5,
      //               path: '/search?q=shurgs',
      //               label: 'menu-shurgs',
      //             },
      //             {
      //               id: 6,
      //               path: '/search?q=blazers',
      //               label: 'menu-blazers',
      //             },
      //           ],
      //         },
      //         {
      //           id: 2,
      //           path: '/search?q=plus-size',
      //           label: 'menu-plus-size',
      //         },
      //         {
      //           id: 3,
      //           path: '/search?q=sunglasses-frames',
      //           label: 'menu-sunglasses-frames',
      //         },
      //       ],
      //     },
      //     {
      //       id: 3,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: '/search?q=footwear',
      //           label: 'menu-footwear',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=flats',
      //               label: 'menu-flats',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=casual-shoes',
      //               label: 'menu-casual-shoes',
      //             },
      //             {
      //               id: 3,
      //               path: '/search?q=heels',
      //               label: 'menu-heels',
      //             },
      //             {
      //               id: 4,
      //               path: '/search?q=boots',
      //               label: 'menu-boots',
      //             },
      //           ],
      //         },
      //         {
      //           id: 2,
      //           path: '/search?q=sports-active-wear',
      //           label: 'menu-sports-active-wear',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=clothing',
      //               label: 'menu-clothing',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=footwear',
      //               label: 'menu-footwear',
      //             },
      //             {
      //               id: 3,
      //               path: '/search?q=sports-accessories',
      //               label: 'menu-sports-accessories',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      //   brands: [
      //     {
      //       id: 1,
      //       path: '/search?q=nike',
      //       label: 'nike',
      //       icon: Nike,
      //     },
      //     {
      //       id: 2,
      //       path: '/search?q=dior',
      //       label: 'dior',
      //       icon: Dior,
      //     },
      //     {
      //       id: 3,
      //       path: '/search?q=gucci',
      //       label: 'gucci',
      //       icon: Gucci,
      //     },
      //     {
      //       id: 4,
      //       path: '/search?q=gucci1',
      //       label: 'gucci1',
      //       icon: Gucci1,
      //     },
      //     {
      //       id: 5,
      //       path: '/search?q=puma',
      //       label: 'puma',
      //       icon: Puma,
      //     },
      //     {
      //       id: 6,
      //       path: '/search?q=levis',
      //       label: 'levis',
      //       icon: Levis,
      //     },
      //   ],
      //   banners: [
      //     {
      //       id: 1,
      //       path: '/search?q=winter',
      //       label: 'winter',
      //       image: Banner1,
      //     },
      //     {
      //       id: 2,
      //       path: '/search?q=summer',
      //       label: 'summer',
      //       image: Banner2,
      //     },
      //   ],
      // },

      {
        id: 7,
        path: '/',
        label: 'Electronics',
        icon: <SunglassIcon />,
        // brands: [
        //   {
        //     id: 1,
        //     path: '/search?q=nike',
        //     label: 'nike',
        //     icon: Nike,
        //   },
        //   {
        //     id: 2,
        //     path: '/search?q=dior',
        //     label: 'dior',
        //     icon: Dior,
        //   },
        //   {
        //     id: 3,
        //     path: '/search?q=gucci',
        //     label: 'gucci',
        //     icon: Gucci,
        //   },
        //   {
        //     id: 4,
        //     path: '/search?q=gucci1',
        //     label: 'gucci1',
        //     icon: Gucci1,
        //   },
        //   {
        //     id: 5,
        //     path: '/search?q=puma',
        //     label: 'puma',
        //     icon: Puma,
        //   },
        //   {
        //     id: 6,
        //     path: '/search?q=levis',
        //     label: 'levis',
        //     icon: Levis,
        //   },
        // ],
        // banners: [
        //   {
        //     id: 1,
        //     path: '/search?q=winter',
        //     label: 'winter',
        //     image: Banner1,
        //   },
        //   {
        //     id: 2,
        //     path: '/search?q=summer',
        //     label: 'summer',
        //     image: Banner2,
        //   },
        // ],
      },
      {
        id: 8,
        path: '/',
        label: 'Radios',
        icon: <SneakerIcon />,
        // brands: [
        //   {
        //     id: 1,
        //     path: '/search?q=nike',
        //     label: 'nike',
        //     icon: Nike,
        //   },
        //   {
        //     id: 2,
        //     path: '/search?q=dior',
        //     label: 'dior',
        //     icon: Dior,
        //   },
        //   {
        //     id: 3,
        //     path: '/search?q=gucci',
        //     label: 'gucci',
        //     icon: Gucci,
        //   },
        //   {
        //     id: 4,
        //     path: '/search?q=gucci1',
        //     label: 'gucci1',
        //     icon: Gucci1,
        //   },
        //   {
        //     id: 5,
        //     path: '/search?q=puma',
        //     label: 'puma',
        //     icon: Puma,
        //   },
        //   {
        //     id: 6,
        //     path: '/search?q=levis',
        //     label: 'levis',
        //     icon: Levis,
        //   },
        // ],
        // banners: [
        //   {
        //     id: 1,
        //     path: '/search?q=winter',
        //     label: 'winter',
        //     image: Banner1,
        //   },
        //   {
        //     id: 2,
        //     path: '/search?q=summer',
        //     label: 'summer',
        //     image: Banner2,
        //   },
        // ],
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
