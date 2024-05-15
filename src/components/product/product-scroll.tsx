import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductDetails } from '@framework/types';
import ProductCardDark from './product-card-dark';
import { useProductsQuery } from '@framework/product/get-all-products-2';
import { isArray } from 'lodash';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};


export default function ProductScrollCard({ collection, heading }: any) {
    console.log("will fetch collection: ", collection)
    const { data, isLoading, error } = useProductsQuery({ limit: 10 });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const products = data?.productRef;
    const [deviceType, setDeviceType] = React.useState('desktop');

    // setDeviceType("desktop")

    return (
        <div
            className='bg-[#202020] rounded-md my-10 px-10 pb-5'
            onClick={() => {
                if (deviceType === 'mobile') {
                    setDeviceType('desktop')
                }
            }}
        >
            <div className='flex justify-between py-4 w-[95%] ml-[2.5%] items-center '>
                <h2 className='text-2xl text-white font-extrabold '>{heading}</h2>
                <span className='text-orange-400 font-bold cursor-pointer hover:underline'>See All</span>
            </div>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false}
                keyBoardControl={false}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {isArray(products) && products.map((product: ProductDetails, index: number) => {
                    return (
                        <ProductCardDark
                            key={index}
                            product={product}
                        />
                    )
                })}
            </Carousel>

        </div>
    )
}
