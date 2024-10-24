import { useEffect, useState } from "react";


const TicTacToe = () => {

	const [sqaureValues, setSqaureValues] = useState(Array(9).fill(""));
	const [isXTurn, setISXTurn] = useState(true);
	const [winner, setWinner] = useState("");


	const updateValue = (index) => {
		const copy = [...sqaureValues];

		if (checkForWinner(copy) || copy[index]) {
			return;
		};

		copy[index] = isXTurn ? "X" : "O";

		setSqaureValues(copy);
		setISXTurn(!isXTurn);
	}

	const checkForWinner = (sqaures) => {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7 ,8],

			[0, 3 ,6],
			[1, 4, 7],
			[2, 5, 8],

			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i=0; i<winningPatterns.length; i++) {
			const [x,y,z] = winningPatterns[i];

			if (sqaures[x] && sqaures[x] === sqaures[y] && sqaures[x] === sqaures[z]) {
				return sqaures[x];
			}
		}
		return null;
	}

	const restart = () => {
		setISXTurn(true);
		setSqaureValues(Array(9).fill(""));
	}

	useEffect(() => {
		if (!checkForWinner(sqaureValues) && sqaureValues.every((item) => item !== "")) {
			setWinner("D");
		}
		else {
			setWinner(checkForWinner(sqaureValues));
		}

	}, [isXTurn])


	return (
		<div className="w-full h-[100vh] flex justify-center items-center">
			<div className="w-full h-[100vh] flex flex-col justify-center items-center gap-5">
				{
					isXTurn ? 
					<p className="text-2xl">X turns</p> :
					<p className="text-2xl">O turns</p>
				}
				<div className="grid grid-cols-3 gap-2">
					{
						sqaureValues.map((_, index) => {
							return (
								<Sqaure key={index} value={sqaureValues[index]} handleClick={() => updateValue(index)}/>
							)
						})
					}
				</div>
				{
					winner === "D" ?
						<p>The game is over, Draw!</p> :
						winner === "X" ?
							<p>The game is over, X won!</p> :
							winner === "O" ?
								<p>The game is over, O won!</p> :
								null
				}
				<button
					className={`px-4 py-2 text-xl text-white bg-sky-700 hover:bg-sky-500 rounded-lg transition-all ${isFinished ? "" : "opacity-0"}`}
					onClick={() => restart()}>Restart</button> :
			</div>
		</div>
	)
}

export default TicTacToe

const Sqaure = ({ value, handleClick }) => {
	return (
		<button
			className="w-32 h-32 border-[1px] border-sky-600 text-3xl font-bold"
			onClick={handleClick}>{value}</button>
	)
}