import { useEffect, useState } from "react"

const ImageSlider = ({ url, page, limit }) => {

	const [images, setImages] = useState([]); // This state contains an array of all the fetched iamges
	const [currentImage, setCurrentImage] = useState(0); // The image selected in the slider
	const [error, setError] = useState(null); // A state for wehn an error occured
	const [loading, setLoading] = useState(false); // Loading state before for before fetching the data from the API


	const fetchImages = async (url, page, limit) => {
		try {
			setLoading(true); // Loading is on
			
			const response = await fetch(`${url}${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setLoading(false); // Loading is off
			}

		} catch(e) {
			setError(e.message); // Updating the error state
			setLoading(false); // Loading is off
		}
	}


	useEffect(() => {
		if (url !== "") {
			fetchImages(url, page, limit);
		}

	}, [url])



	if (error) {
		return (
			<div>Error: {error}</div> // This will be shown when an error occured
		)
	}


	if (loading) {
		return (
			<div>Loading...</div> // Loading scren before fetching the data
		)
	}

	const nextImage = () => { // Nect image function 
		if (currentImage + 1< images.length) {
			setCurrentImage(currentImage + 1);
		}
	}


	const preImage = () => { // Previous image function
		if (currentImage > 0) {
			setCurrentImage(currentImage - 1);
		}
	}

	


	return (
		<div className="w-full h-[100vh] flex justify-center items-center">

			<div className="flex items-center justify-center">
				<button  // Next image button
					className="text-3xl font-bold text-sky-400 bg-[#45454588] px-3 py-2 translate-x-5 rounded-md hover:bg-[#454545aa] active:bg-[#454545cc] transition-all"
					onClick={() => preImage()}>
					{`<`}
				</button>
				{
					images && images.length ? 
						images.map((image, index) => {
							return ( // Conditional rendering. Only showing the iamge with index of currentIamge
								<img key={image.id} src={image.download_url} className={`w-[500px] h-[500px] object-cover ${index === currentImage ? "" : "hidden"}`}/> 
							)
						}) :
						null
				}
				<button // Previous image button
					className="text-3xl font-bold text-sky-400 bg-[#45454588] px-3 py-2 -translate-x-5 rounded-md hover:bg-[#454545aa] active:bg-[#454545cc] transition-all"
					onClick={() => nextImage()}>
					{`>`}
				</button>
			</div>
			
		</div>
	)
}

export default ImageSlider