const products = [
    {
        title: {
            en: 'Product 1'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 2,
    },
    {
        title: {
            en: 'Product 2'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 2,
    },
    {
        title: {
            en: 'Product 3'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 2,
        cols: 2,
    },
    {
        title: {
            en: 'Product 4'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 2,
    },
    {
        title: {
            en: 'Product 5'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 2,
    },
    {
        title: {
            en: 'Product 6'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 2,
        cols: 2,
    },
    {
        title: {
            en: 'Product 7'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 1,
    },
    {
        title: {
            en: 'Product 8'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 1,
    },
    {
        title: {
            en: 'Product 9'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 2,
    },
    {
        title: {
            en: 'Product 10'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 2,
    },
    {
        title: {
            en: 'Product 11'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 1,
    },
    {
        title: {
            en: 'Product 12'
        },
        image: ['https://res.cloudinary.com/dmlbvaapl/image/upload/v1707093454/product/avatar4.png'],
        prices: {
            price: 50000
        },
        rows: 1,
        cols: 1,
    },
];

export default function ProductTilesGroup() {

    return (
        <div className="bg-[#202020] rounded-md my-10 px-10 pb-5">
            <div className="grid grid-rows-4 grid-flow-col gap-4 m-5">
                {products.map((product, index) => {
                    return (
                        <div key={index} className={`row-span-${product.rows} col-span-${product.cols}`}
                            style={{
                                backgroundImage: `url(${product.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                minHeight: '200px'
                                // height: '200px'
                            }}
                        >
                            <div className="hover:bg-[#000000] cursor-pointer hover:bg-opacity-50 h-full w-full flex items-center justify-center">
                                <h3 className="text-white text-2xl">{product.title.en}</h3>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}