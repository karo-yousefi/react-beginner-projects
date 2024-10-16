import { FaStar } from "react-icons/fa"; // Using font awesome icons in react-icon package
import { useState } from "react";

const StarRating = ({ numberOfStars=5 }) => { // Default number of stars: 5

	const [rating, setRating] = useState(0); // rating is the index of the selected star. All the stars before that should be colored (selected)
	const [hover, setHover] = useState(0); // hover is the index of the hovered star. All the stars before that should be colored (selected)


	const handleClick = (index) => {
		setRating(index);
	}

	const handleMouseEnter = (index) => {
		setHover(index);
	}

	const handleMouseLeave = () => {
		setHover(rating); // If mouse leaves, The colored stars should be based on what user clicked on previously, If none, Then no colored stars
	}

	return (
		<div className="w-full h-[100vh] flex justify-center items-center">
			{
				[...Array(numberOfStars)].map((_, index) => { // Creating an array with emoty elements, Spreading them before using them so they all can have undefined value
					index++; // We don't have 0 start so index + 1
					return (
						<FaStar
							key={index}
							onClick={() => handleClick(index)}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={() => handleMouseLeave()}
							className={`text-3xl ${index <= (hover || rating) ? "text-sky-500" : "text-gray-500"} `}/> // Styling all the items before the clicked, hovered star
						  // Note in the code above the order of hover and rating is important. hover should have priority to rating so you can see the hover even after rating 
					)
				})
			}
		</div>
	)
}

export default StarRating