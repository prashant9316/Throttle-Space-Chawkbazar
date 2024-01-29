import { QueryKey } from '@tanstack/react-query';
// import exp from 'constants';

export type CollectionsQueryOptionsType = {
  text?: string;
  collection?: string;
  status?: string;
  limit?: number;
};

export type CategoriesQueryOptionsType = {

};
export type ProductsQueryOptionsType = {
  type: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type QueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
  demoVariant?: 'ancient';
};

export type ShopsQueryOptionsType = {
  text?: string;
  shop?: Shop;
  status?: string;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Attachment = {
  id: string | number;
  thumbnail: string;
  original: string;
};
export type Category = {
  _id: string;
  name: title;
  description: title;
  icon: string;
  text?: string;
  category?: string;
  status?: boolean;
  limit?: number;
  children: CategoriesQueryOptionsType[];
};
export type Collection = {
  id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Brand = {
  id: number | string;
  name: string;
  slug: string;
  image?: Attachment;
  background_image?: any;
  [key: string]: unknown;
};
export type Tag = {
  id: string | number;
  name: string;
  slug: string;
};
export type Product = {
  id: number | string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  sale_price?: number;
  image: Attachment;
  sku?: string;
  gallery?: Attachment[];
  category?: Category;
  tag?: Tag[];
  meta?: any[];
  description?: string;
  variations?: object;
  [key: string]: unknown;
  isNewArrival?: boolean;
};
export type OrderItem = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
};
export type Order = {
  id: string | number;
  name: string;
  slug: string;
  products: OrderItem[];
  total: number;
  tracking_number: string;
  customer: {
    id: number;
    email: string;
  };
  shipping_fee: number;
  payment_gateway: string;
};

export type Shop = {
  id: string | number;
  owner_id: string | number;
  owner_name: string;
  address: string;
  phone: string;
  website: string;
  ratings: string;
  name: string;
  slug: string;
  description: string;
  cover_image: Attachment;
  logo: Attachment;
  socialShare: any;
  created_at: string;
  updated_at: string;
};

interface title {
  en: string;
  ar: string;
}

interface bannerType {
  _id: string;
  offerLink: string;
  imageRef: string;
  mobileImageRef: string;
  state: boolean;
}

export type HomepageBanner = {
  visible: boolean;
  productRef: string[] | ProductDetails[];
  categoryRef: string[];
  BlogLinkReference: string[];
  _id: string;
  sectionCode: string;
  sectionTitle: string;
  offerBlock: bannerType[];
}

export type FetchProducts = {
  visible: boolean;
  productRef: ProductDetails[];
  categoryRef: string[];
  BlogLinkReference?: string[];
  _id: string;
  sectionCode: string;
  sectionTitle: string;
  offerBlock?: bannerType[];
}

interface Categories {
  image: string,
  status: boolean,
  _id: string,
  name: title,
  description: title,
  parentId: string,
  parentName: string,
  icon: string,
  createdAt: string,
  updatedAt: string
}

interface Variants {
  key?: string;
  value: title;
  price: number;
  name: title;
  originalPrice: number;
  discount: number;
  stock: number;
  sku: string;
  image: string;
  productId: string;
  barcode: string;
}

export type FetchCategories = {
  visible: boolean;
  productRef: String[];
  categoryRef: Categories[];
  BlogLinkReference?: string[];
  _id: string;
  sectionCode: string;
  sectionTitle: string;
  offerBlock?: bannerType[];
}

export type categoryRef = {
  image: string,
  status: boolean,
  _id: string,
  name: title,
  description: title,
  parentId: string,
  parentName: string,
  icon: string,
  createdAt: string,
  updatedAt: string,
  slug: string
}

export type prices = {
  price: number;
  originalPrice: number;
  discount: number;
}

export type description = {
  en: string;
}
export type category = {
  status: boolean;
  name: title;
  description: description;
  parentName: string;
  icon: string;
}
export type ProductDetails = {
  _id: string;
  approved?: boolean;
  barcode?: string;
  categories: category[];
  category: category;
  createdAt: object;
  description: description;
  image: string[];
  isCombination: object;
  prices: prices;
  productId: string;
  sku: string;
  slug: string;
  status: string;
  stock: number;
  tag: string[];
  title: title;
  variants?: Variants[];
  gallery?: string[];
  limit?: number;
};