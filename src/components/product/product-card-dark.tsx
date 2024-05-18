import Link from "@components/ui/link";
import { ProductDetails } from "@framework/types";
// import Link from "next/link";
import { FC } from "react";

interface ProductCardDarkProps {
    product: ProductDetails;
}

function numberWithCommas(y: number) {
    const x = y.toString();
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProductCardDark: FC<ProductCardDarkProps> = ({ product }) => {
    // const imgHeight = 344;

    const brand = "DJI";
    const productRating = 4.5;
    const stars = Math.floor(productRating);

    const salePrice = `₹${numberWithCommas(product.prices.price)}`;
    const markedPrice = `₹${numberWithCommas(product.prices.originalPrice)}`;
    const productLink = `/products/${product.slug}`;
    const brandLink = '#';
    // const brandLink = `/collections/vendor?=${brand}`;

    const discount = `${Math.floor(((product.prices.originalPrice - product.prices.price) / product.prices.originalPrice) * 100)}%`;


    return (
        <div className="relative m-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg">
            <Link href={productLink} className="relative mx-3 flex h-60 overflow-hidden rounded-xl">
                <img className="object-cover" src={product.image[0]} alt="" />
                <span className="absolute top-0 left-0 m-2 rounded-sm bg-[#12B7B6] px-2 text-center text-sm font-medium text-white">{discount} OFF</span>
            </Link>
            <div
                className="mt-4 px-5"
            >
                <Link href={brandLink} className="bg-[#e9e9eb]">
                    <p className="text-xs text-gray-500 hover:underline hover:text-orange-500">{brand}</p>
                </Link>
                <Link href={productLink}>
                    <h5 className="text-md tracking-tight text-white">
                        {product.title.en.length > 25 ? `${product.title.en.substring(0, 25)}...` : product.title.en}
                    </h5>
                </Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-lg font-bold text-orange-600">{salePrice}</span>
                        <span className="text-xs text-orange-600 line-through">{` ${markedPrice}`}</span>
                    </p>
                    <div className="flex items-center">
                        {[...Array(stars)].map((_, i) => (
                            <svg key={i} aria-hidden="true" className="h-5 w-4 text-yellow-300 text-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                        ))}
                        <span className="mr-1 ml-1 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{productRating}</span>
                    </div>
                </div>
                <div
                    // href={`/product/${product.slug}`}
                    className="cursor-pointer flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                </div>
            </div>


        </div>
    )
}

export default ProductCardDark