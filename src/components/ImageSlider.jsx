import { useEffect, useState } from "react"

const ImageSlider = ({ url, page, limit }) => {

	const [images, setImages] = useState([]);
	const [currentImage, setCurrentImage] = useState(0);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);


	const fetchImages = async (url, page, limit) => {
		try {
			setLoading(true);
			
			const response = await fetch(`${url}${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setLoading(false);
			}

		} catch(e) {
			setError(e.message);
			setLoading(false);
		}
	}


	useEffect(() => {
		if (url !== "") {
			fetchImages(url, page, limit);
		}


	}, [url])



	if (error) {
		return (
			<div>Error: {error}</div>
		)
	}


	if (loading) {
		return (
			<div>Loading...</div>
		)
	}

	const nextImage = () => {
		if (currentImage + 1< images.length) {
			setCurrentImage(currentImage + 1);
		}
	}


	const preImage = () => {
		if (currentImage > 0) {
			setCurrentImage(currentImage - 1);
		}
	}

	


	return (
		<div className="w-full h-[100vh] flex justify-center items-center">


			<div className="flex">
				<button
					className="text-3xl font-bold"
					onClick={() => preImage()}>
					{`<`}
				</button>
				{
					images && images.length ? 
						images.map((image, index) => {
							return (
								<img key={image.id} src={image.download_url} className={`w-[500px] h-[500px] object-cover ${index === currentImage ? "" : "hidden"}`}/>
							)
						}) :
						null
				}
				<button
					className="text-3xl font-bold"
					onClick={() => nextImage()}>
					{`>`}
				</button>
			</div>
			
			
		</div>
	)
}

export default ImageSlider