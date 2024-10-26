import { useEffect, useState } from "react";

const TicTacToe = () => {

	const [sqaureValues, setSqaureValues] = useState(Array(9).fill(""));  // This state is used to create the squares (line 74), Also to save each square's content (X or O)
	const [isXTurn, setISXTurn] = useState(true); // true: X truns , false: O turns
	const [winner, setWinner] = useState(null); // X: X is winner, O: O is winner, D: Draw (All the squares are full and no X or O), null: The game not finished yet


	const updateValue = (index) => {
		const copy = [...sqaureValues]; // You can not update a state directly, That's why we are manking a copy, Chnage it and then update the state with the copy using its setter function

		if (checkForWinner(copy) || copy[index]) { // If checkForWinner is null  or  the selected square is already full, do nothing
			return;
		};

		copy[index] = isXTurn ? "X" : "O"; // Updating the vlaue based on who turns it is

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
			const [x, y, z] = winningPatterns[i]; // x, y and z are the indexs of a winner pattern

			if (sqaures[x] && sqaures[x] === sqaures[y] && sqaures[x] === sqaures[z]) { // If values of the squares with the x, y and z index are the same (win condition)
				return sqaures[x]; // Return the value (The winner)
			}
		}
		return null; // No winner
	}

	const restart = () => {
		setISXTurn(true);
		setSqaureValues(Array(9).fill(""));
	}

	useEffect(() => { // Updating the winner state whenever the turn changes
		if (!checkForWinner(sqaureValues) && sqaureValues.every((item) => item !== "")) { // If there is not a winner (X or D) and all the squares are full (Draw condition)
			setWinner("D");
		}
		else {
			setWinner(checkForWinner(sqaureValues)); // Updating the winner state if there is a winner
		}
	}, [isXTurn])


	return (
		<div className="w-full h-[100vh] flex justify-center items-center">
			<div className="w-full h-[100vh] flex flex-col justify-center items-center gap-5">
				{
					isXTurn ? // Updaing the the text based on the turn
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
					className={`px-4 py-2 text-xl text-white bg-sky-700 hover:bg-sky-500 rounded-lg transition-all ${winner === null ? "opacity-0" : "opacity-100"}`}
					onClick={() => restart()}>Restart</button>
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