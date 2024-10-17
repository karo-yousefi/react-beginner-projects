import { useEffect, useState } from "react";


const LoadMore = () => {

	const [loading, setLoading] = useState(false); // Loading screen
	const [products, setProducts] = useState([]); // An array of all the products fetched from the API
	const [count, setCount] = useState(1); // How many items should be shown, Each time the user clicks on load, This state will be incremened by 1 (10 more products)
	const [error, setError] = useState(null); // State for handling errors


	const fetchImages = async(API) => {
		try {
			setLoading(true);
			const response = await fetch(API);
			const data = await response.json();

			setLoading(false);
			setProducts(data.products); // Updating the products state

			}catch(e) {
				setError(e.message); // Updating the error state
				setLoading(false);
		 }
	}


	useEffect(() => {

		const API = `https://dummyjson.com/products?limit=${count * 10}&select=title,category,price,images`; // Each time the user gets 10 more products 
		fetchImages(API);
		
	}, [count])

	const loadMore = () => {
		if (count < 5) { // Limit of 50 products for testing purposes
			setCount(count + 1);
		}
	}


	if (loading) { // Showing loading screen
		return (
			<div className="w-full h-[100vh] flex justify-center items-center">Loading...</div>
		)
	}

	if (error) { // Showing error message
		return (
			<div className="w-full h-[100vh] flex justify-center items-center">Error: {error}</div>
		)
	}

	return (
		<div className="w-full flex flex-col gap-5 mt-5">
			<div className="w-full grid grid-cols-5 gap-4">
				{
					products.map((product) => {
						return (
							<div key={product.id} className="w-[320px] border-[1px] border-slate-600 rounded-lg flex flex-col items-center cursor-pointer">
								<img src={product.images[0]} className="w-[250px] h-[250px] object-cover"/>
								<h1 className="text-lg mt-2 font-Montserrat font-bold">{product.title}</h1>
								<p className="font-bold text-sky-500">{product.price}</p>
								<p>{product.category}</p>
							</div>
						)
					})
				}
			</div>

			<div className="w-full flex justify-center mb-5">
				{/* If the user reaches the products limit, The button will be grayed out */}
				<button className={`${count >= 5 ? "bg-gray-500" : "bg-sky-400"} rounded-lg px-5 py-2`} onClick={() => loadMore()} title="5 pages total">Load More</button>
			</div>
		</div>
	)
}

export default LoadMore;