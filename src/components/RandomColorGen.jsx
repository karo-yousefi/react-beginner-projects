import { useState } from "react";

const RandomColorGen = () => {
	const [color, setColor] = useState("#FFFFFF");
	const [colorCode, setColorCode] = useState("hex");

	const changeColorCode = (code) => {
		if (colorCode !== code) {
			setColorCode(code);
		}
	}

	const generateColor = (colorCode) => {
		if (colorCode === "hex") {
			const randomCode = Math.floor(Math.random() * 16777216).toString(16);
			const randomColor = ("#" + randomCode).toUpperCase();
			setColor(randomColor);
		}
		else {
			const red = Math.floor(Math.random() * 255);
			const green = Math.floor(Math.random() * 255);
			const blue = Math.floor(Math.random() * 255);

			const rgb = `rgb(${red}, ${green}, ${blue})`;
			setColor(rgb)
		}
	}

	const copyCode = () => {
		navigator.clipboard.writeText("asd");
	}

	return (
		<div className="w-full h-[100vh] flex flex-col justify-center items-center" style={{backgroundColor: color}}>
			<div className="flex justify-center items-center gap-4">
				<button
					className="font-Montserrat text-xl bg-sky-400  border-2  border-white rounded-md px-4 py-2 hover:bg-sky-500 transition-all"
					onClick={() => generateColor(colorCode)}>{`Generate Random Color ${colorCode}`}</button>
				<div>
					<input className="cursor-pointer" type="radio" id="hex-input" name="radio" value="hex" defaultChecked onClick={() => changeColorCode("hex")}/>
					<label className="font-Montserrat text-xl cursor-pointer px-3 py-2" htmlFor="hex-input"> HEX</label>
					<br />
				</div>
				<div>
					<input className="cursor-pointer" type="radio" id="rgb-input" name="radio" value="rgb" onClick={() => changeColorCode("rgp")}/>
					<label className="font-Montserrat text-xl cursor-pointer px-3 py-2" htmlFor="rgb-input"> RGB</label>
					<br />
				</div>
			</div>
			<div className="h-[90vh] flex justify-center items-center">
				<h1
					className="font-Montserrat text-[60px] hover:font-semibold transition-all select-none cursor-pointer"
					onClick={() => copyCode()}>
						{color}
				</h1>
			</div>
		</div>
	);
}

export default RandomColorGen