import { useEffect, useState, useRef } from "react"

const ScrollToTopToButtom = () => {

	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const topButtonRef = useRef(null); // The page scrolls here when the user presses top button
	const bottomButtonRef = useRef(null); // The page scrolls here when the user presses down button



	// Note: If we wanted to use this component in a real project and we wanted to move to the actul top and bottom of the page (insteaf of just this component), 
	// We could use window.scrollTo({ top: 0, left: 0. behavior: "smooth"}). But here we are moving to the position of a certain element
	const handleMoveDown = () => {
		if (bottomButtonRef.current) {
			bottomButtonRef.current.scrollIntoView({ behavior: "smooth" }); 
		}
	}

	const handleMoveUp = () => {
		if (topButtonRef.current) {
			topButtonRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}

	const fetchData = async () => { // Fetching dummy data
		const API = "https://dummyjson.com/products?limit=40";
		try {
			setLoading(true); // Showing loading screen 
		 	const response = await fetch(API);
			const data = await response.json();

			if (data) {
				setData(data.products);
			}
			setLoading(false); // Not showing loading screen 

		} catch(e) {
			setError(e.message);
			setLoading(false); // Not showing loading screen 

		}
	}


	useEffect(() => {
		fetchData();
	}, [])


	if (error) {
		return (
			<div className="w-full h-[100vh] flex justify-center items-center">{error}</div>
		)
	}

	if (loading) {
		return (
			<div className="w-full h-[100vh] flex justify-center items-center">
				<p className="text-3xl text-sky-600">Loading...</p>
			</div>
		)
	}


	return (
		<div className="w-full flex flex-col justify-center items-center gap-10 my-10">
			<button
				onClick={handleMoveDown}
			 	ref={topButtonRef}
				className="px-5 py-2 bg-sky-400 rounded-lg hover:bg-sky-500 transition-all">
					Down
				</button>
			<div className="w-full flex flex-col justify-center items-center gap-3">
				{
					data && data.length ? // Making sure the data exists before trying to render it
					(
						data.map((item, index) => {
							return (
								<p key={index}>{item.title}</p>
							)
						})
					) :
					null
				}
			</div>
			<button
				onClick={handleMoveUp}
			 	ref={bottomButtonRef}
				className="px-5 py-2 bg-sky-400 rounded-lg hover:bg-sky-500 transition-all">
					Up
				</button>
		</div>
	)
}

export default ScrollToTopToButtom