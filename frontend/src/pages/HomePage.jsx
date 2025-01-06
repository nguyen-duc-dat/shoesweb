
import CategoryItem from "../components/CategoryItem.jsx";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import { useEffect } from "react";




const categories = [
	{ href: "/adidas", name: "Adidas", imageUrl: "/adidas.jpg" },
	{ href: "/converse", name: "Converse", imageUrl: "/converse.jpg" },
	{ href: "/nike", name: "Nike", imageUrl: "/nike.jpg" },
	{ href: "/puma", name: "Puma", imageUrl: "/puma.jpg" },
	{ href: "/vans", name: "Vans", imageUrl: "/vans.jpg" },
	{ href: "/socks", name: "Socks", imageUrl: "/socks.jpg" },
];

const HomePage = () => {

	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);


	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-yellow-400 mb-4'>
					Đa dạng các hãng giày
				</h1>
				<p className='text-center text-xl text-green-500 mb-12'>
					Xu hướng thân thiện với môi trường
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}

			</div>
		</div>
  )
};

export default HomePage;