import React, { useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { isArray } from 'lodash';
import 'swiper/css';
import 'swiper/css/pagination';
import { useProductQuery } from '@framework/product/get-product';
import numberWithCommas from '@framework/utils/number-with-commas';



export default function FeaturedProductCard({ id }: any) {
    const [imageToShow, setImageToShow] = React.useState("");
    const [selectedAddOn, setSelectedAddOn] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    const { data, isLoading, error } = useProductQuery(id as string);

    const listOfAddOns = [
        {
            name: "None",
            id: 0,
            price: 0,
        },
        {
            name: '4S Li-Ion Battery',
            id: 1,
            price: 4200
        },
        {
            name: 'Iflight HeadStrap',
            id: 2,
            price: 999
        }
    ]

    useEffect(() => {
        if (data) {
            setImageToShow(data?.image[0] || "");
            setSelectedAddOn(listOfAddOns[0].name);
            setPrice(data?.prices.price || 0);
        }
    }, [data])


    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;







    const product = data;
    const productRating = 4.5;
    const stars = Math.floor(productRating);
    const Reviews = {
        total: 20,
        rating: 4.5
    }

    const selectProductQuantity = (e: any) => {
        setQuantity(e.target.value);
    }

    return (
        <div className='bg-[#202020] h-[70vh] my-10 p-5 rounded-md flex'>
            <div className='w-[50%] grid grid-cols-6 '>
                <div className='col-span-1 flex flex-col px-2 overflow-y-auto overflow-x-hidden'>
                    {isArray(product?.image) && product?.image.map((img: any, i: number) => {
                        return (
                            <div
                                key={i}
                                onClick={() => {
                                    setImageToShow(img);
                                }}
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '50px',
                                    width: '50px',
                                }}
                                className={`my-2 ${imageToShow === img ? 'border-2 border-orange-400' : 'border-0'}`}
                            >

                            </div>
                        )
                    })}
                </div>
                <div className='col-span-5 px-8'>
                    <div className=''
                        style={{
                            backgroundImage: `url(${imageToShow})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '90%',
                            width: '100%',
                            marginTop: '5%'
                        }}
                    >

                    </div>
                </div>
            </div>
            <div className='w-[50%] mt-10 pl-5'>
                <h2 className='text-xl text-white font-bold'>{product?.title.en}</h2>
                <div className='flex text-sm mt-3 items-center'>
                    {[...Array(stars)].map((_, i) => (
                        <svg key={i} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>

                    ))}
                    <span className='text-gray-300 ml-2'>{Reviews.total} reviews</span>
                </div>
                <div className='mt-8'>
                    <h2 className='font-semibold text-gray-200'>Add Ons: {selectedAddOn}</h2>
                    <div className='flex items-center justify-start'>
                        {listOfAddOns.map((addOn, i) => {
                            return (
                                <div key={i} onClick={() => {
                                    setPrice((product?.prices.price || 0) + addOn.price)
                                    setSelectedAddOn(addOn.name)
                                }} className={`border-2 cursor-pointer inline-flex mx-2 p-2 mt-2 rounded-md ${selectedAddOn == addOn.name ? 'border-orange-400 bg-orange-200 bg-opacity-10' : 'border-gray-600'}`}>
                                    <h2 className='text-sm text-orange-400'>{addOn.name}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='mt-8 flex items-center'>
                    <h2 className='font-semibold text-gray-200'>Price:</h2>
                    <h2 className='font-semibold text-orange-400 ml-2 text-lg'>₹{numberWithCommas(price)}/-</h2>
                </div>
                <div className='mt-4 flex items-center'>
                    <h2 className='font-semibold text-gray-200 mr-5'>Quantity:</h2>
                    <select
                        className='bg-[#202020] border-2 border-gray-600 text-white p-2 rounded-md w-20'
                        id='quantity'
                        value={quantity}
                        onChange={selectProductQuantity}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>
                <div
                    className="mt-5 flex items-center cursor-pointer justify-center rounded-md hover:bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
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