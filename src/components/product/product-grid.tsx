// import ProductCard from "@components/product/product-card";
// import Button from "@components/ui/button";
import type { FC } from "react";
// import { useProductsQuery } from "@framework/product/get-all-products";
import { useRouter } from "next/router";
// import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
// import { useTranslation } from "next-i18next";
// import { ProductDetails } from "@framework/types";
import { useProductsByCategoryQuery } from "@framework/product/get-all-products-by-category";
interface ProductGridProps {
	className?: string;
}
export const ProductGrid: FC<ProductGridProps> = ({ className = "" }) => {
	const { query } = useRouter();
	const {
		// data,
		// isLoading,
		error,
	} = useProductsByCategoryQuery(query.slug as string);
	if (error) return <p>{error.message}</p>;

	// const { t } = useTranslation("common");

	return (
		<>
			<div
				className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
			>
				{/* {isLoading && !data?.products?.length ? (
					<ProductFeedLoader limit={20} uniqueKey="search-product" />
				) : (
					data?.products.map((product: any) => {
						return (
							<ProductCard
								key={`product--key${product._id}`}
								product={product}
								variant="grid"
							/>
						);
					})
				)} */}
			</div>
			<div className="text-center pt-8 xl:pt-14">
				{/* {hasNextPage && (
					<Button
						loading={loadingMore}
						disabled={loadingMore}
						onClick={() => fetchNextPage()}
						variant="slim"
					>
						{t("button-load-more")}
					</Button>
				)} */}
			</div>
		</>
	);
};
