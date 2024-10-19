import { useState } from "react";
import QRCode from "react-qr-code";

const QRGenrator = () => {

	const [input, setInput] = useState(""); // The value of the input element will be saved in this state
	const [QRInput, setQRInput] = useState(""); // QRCode component gets its value from this

	return (
		<div className="w-full h-[100vh] flex flex-col justify-center items-center gap-4">
			<input
				type="text"
				placeholder="Enter your value"
				className="text-center border-[1px] border-black"
				onChange={(e) => setInput(e.target.value)} // Updaing the input state as the user changes the input
				value={input}
			/>
			<button
				disabled={input.length === 0}
				className="bg-pink-600 px-5 py-2 text-white rounded-lg hover:bg-pink-500 disabled:bg-gray-300"
				onClick={() =>  {
					setQRInput(input); // Updating QRCode input so it can generate the the code
					setInput(""); // Clearing the input 
				}}
			>
				Generate
			</button>
			<div>
				{
					QRInput && QRInput.length !== 0 ? // Checking if the input is empty or not
						<QRCode value={QRInput} size={300} bgColor="#0af"/> :
						<div>Nothing to show</div>
				}
			</div>
		</div>
	)
}

export default QRGenrator