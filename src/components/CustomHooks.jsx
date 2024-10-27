import { useEffect, useLayoutEffect, useRef, useState } from "react"

const CustomHooks = () => {

	const {data, error, isLoading} = useFetch("https://dummyjson.com/products", {}); // Gettting the data from the custom fetch hook


	return (
		<div className="w-full flex flex-col justify-center items-center gap-10 my-10">
			<h1 className="text-3xl font-semibold font-Montserrat">Testing 1st custom hook: useFetch</h1>
			{
				error && <div className="text-red-600 text-2xl font-semibold">{`Error ${error}`}</div>
			}
			{
				isLoading && <div className="text-sky-600 text-2xl font-semibold">Loading...</div>
			}
			<div className="flex flex-col justify-center items-center gap-3">
				{
					data && data.products.map((product, index) => {
						return (
							<p key={index}>{product.title}</p>
						)
					})
				}
			</div>
			<h1 className="text-3xl font-semibold font-Montserrat">Testing 2nd custom hook: useOnClickOutside</h1>
			<OnClickContentContainer />

			<h1 className="text-3xl font-semibold font-Montserrat">Testing 3rd custom hook: useWindowResize</h1>
			<WindowResizeComponent />
		</div>
	)
}

export default CustomHooks



// Since this project has multiple mini projects and each of them is a component on their own, I coded all the cusomt hooks here in this file. (not the best practice in a real project)

// ================================

// Custom fetch hook:
const useFetch = (url, options={}) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);


	const fetchData = async() => {
		setIsLoading(true);
		try {
			const response = await fetch(url, {...options});

			if (!response.ok) {
				throw new Error(response.statusText);
			}
			
			const data = await response.json();
			setData(data);
			setError(null);
			setIsLoading(false);


		} catch(e) {
			setError("Error: " + e.message);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();

	}, [url])

	return { data, error, isLoading }
}

// ================================

// Custom click outside hook:

// This is the acutal custom hook
const useOnClickOutside = ({ ref, handler }) => { // ref is a reference to the the component that will use this hook 
	useEffect(() => {

		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) { // First part: preventing erros for when the component is not mounted, Second part: If the user clicks on the open component
				return;
			}

			handler(event); // Closing the menu (handler is a function to change the show state)
		}

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		}

	}, [handler])
}

// Just a component to use this along side the custom fetch hook (In the same file)
const OnClickContentContainer = () => {
	const contentRef = useRef();
	const [show, setShow] = useState(false);

	useOnClickOutside({ ref: contentRef, handler: () => setShow(false) });


	return (
		<div className="w-full h-[20vh] flex justify-center items-center">
			{
				show ?
				<div
					ref={contentRef}
					className="flex flex-col gap-4 justify-center items-center border-[1px] border-black px-20 py-10">
					<h1 className="text-3xl font-black">Hello</h1>
					<p>This is the content! Click outside of the border to close this.</p>
				</div> :
				<button
					onClick={() => setShow(true)}
					className="px-4 py-2 bg-sky-400 rounded-lg hover:bg-sky-500">Show content</button>
			}
		</div>
	)
}

// ================================

// Custom window resize hook

const WindowResizeComponent = () => {

	const { width, height } = useWindowResize();

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<p>Width: {width}</p>
			<p>Height: {height}</p>
		</div>
	)
}


// The custom hook
const useWindowResize = () => {
	const [windowSize, setWindowSize] = useState({width: 0, height: 0,});

	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useLayoutEffect(() => { // useEffect: loads after all the elements in the DOM loaded, useLayoutEffect: will call before
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		}
	}, []);

	return windowSize;
}