import { useState } from "react";

const RandomColorGen = () => {
	const [color, setColor] = useState("#FFFFFF"); // Color state
	const [colorCode, setColorCode] = useState("hex"); // Color code type state

	const changeColorCode = (code) => {
		if (colorCode !== code) { // Preventing the user to chose the type that is already selected
			setColorCode(code);
		}
	}

	const generateColor = () => {
		if (colorCode === "hex") { // Generating HEX color codes
			const randomCode = Math.floor(Math.random() * 16777216).toString(16); // Chosing a radnom number between all the possible HEX colors and converting it to HEX
			const randomColor = ("#" + randomCode).toUpperCase(); 
			setColor(randomColor);
		}
		else {
			const red = Math.floor(Math.random() * 255); // Chosing a random number from all the possible red colors
			const green = Math.floor(Math.random() * 255); // Chosing a random number from all the possible green colors
			const blue = Math.floor(Math.random() * 255); // Chosing a random number from all the possible blue colors

			const rgb = `rgb(${red}, ${green}, ${blue})`;
			setColor(rgb)
		}
	}

	return (
		<div className="w-full h-[100vh] flex flex-col justify-center items-center" style={{backgroundColor: color}}>
			<div className="flex justify-center items-center gap-4">
				<button
					className="font-Montserrat text-xl bg-[#45454588] text-white rounded-md px-4 py-2 transition-all hover:bg-[#454545aa] active:bg-[#454545cc]"
					onClick={() => generateColor()}>{`Generate Random Color ${colorCode.toUpperCase()}`}</button>
				<div>
					<input className="cursor-pointer" type="radio" id="hex-input" name="radio" value="hex" defaultChecked onClick={() => changeColorCode("hex")}/>
					<label className="font-Montserrat text-xl text-white cursor-pointer px-3 py-2" htmlFor="hex-input"> HEX</label>
					<br />
				</div>
				<div>
					<input className="cursor-pointer" type="radio" id="rgb-input" name="radio" value="rgb" onClick={() => changeColorCode("rgb")}/>
					<label className="font-Montserrat text-xl text-white cursor-pointer px-3 py-2" htmlFor="rgb-input"> RGB</label>
					<br />
				</div>
			</div>
			<div className="h-[90vh] flex justify-center items-center">
				<h1
					className="font-Montserrat text-[60px] hover:font-semibold transition-all select-none cursor-pointer bg-[#45454588] px-7 py-3 rounded-lg">{color}</h1>
			</div>
		</div>
	);
}

export default RandomColorGen