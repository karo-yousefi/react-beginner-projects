import { useEffect, useState } from "react"

const ScrollIndicator = () => {

	const [products, setProducts] = useState([]); // A state for some dummy data to show
	const [loading, setLoading] = useState(false); // A state to show if the app is loading (true while fetching data)
	const [error, setError] = useState(null); // A state error messages
	const [scrollPercentage, setScrollPercentage] = useState(0); // percenatge of scrolled page 
	
	const fetchData = async() => {
		const API = "https://dummyjson.com/products?limit=20";

		try {
			setLoading(true);
			const response = await fetch(API);
			const data = await response.json();
			
			if (data && data.products) { // Making sure the data exists
				setLoading(false);
				setProducts(data.products);
			}
		} catch (e) {
			setError(e.message)
			setLoading(false);
		}
	}

	useEffect(() =>{ 
		fetchData();
	}, [])


	const scrollPercentageCalc = () => { // Calculating the percentage of scrolled page
		const documentHeight = document.documentElement.scrollHeight; // The full height of the document 
		const clientScroll = document.documentElement.scrollTop; // How much the user scrolled (top of the user's window to top of the document distance)
		const windowHeight = window.innerHeight; // The full height of the uer's screen

		const percentage = clientScroll / (documentHeight - windowHeight) * 100; // Calculating percentage. Subtracking the height of the window of the full document height is needed

		setScrollPercentage(percentage);

	}

	// The only useEffect is used here is to have a proper clean up. You could do it without it as well.
	useEffect(() => {
		document.addEventListener("scroll", scrollPercentageCalc);

		return () => { // Clean up for when the component gets unmounted
			document.removeEventListener("scroll", scrollPercentageCalc);
		}
	}, [])

	if (error) { // Showing the error message 
		return (
			<div className="w-full h-[250vh] flex justify-center items-center">{error.message}</div>
		)
	}

	if (loading) { // Showing the loading message
		return (
			<div className="w-full h-[250vh] flex justify-center items-center">Loading...</div>
		)
	}

	return (
		<div className="w-full h-[100vh] flex flex-col gap-4 justify-center items-center">
			<h1 className="text-3xl font-Montserrat font-bold">Scroll Indicator</h1>
			{
				products.map((product) => {
					return (
						<p key={product.id}>{product.title}</p>
					)
				})
			}
			{/* tailwind classes can not be used to change the width of the element dynamically, that's why we're using in line style */}
			<div className={`fixed top-0 left-0 h-2 bg-purple-600`} style={{ width: `${scrollPercentage}%` }}></div> 
		</div>
	)
}

export default ScrollIndicator