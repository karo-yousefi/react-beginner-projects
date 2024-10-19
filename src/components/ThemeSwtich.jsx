import { useEffect, useState } from "react"

const ThemeSwtich = () => {

	const [theme, setTheme] = useLocalStorage({ key: "theme", defaultValue: "dark" }); // Using the custom hook, Passing in a key named "theme". This makes an item in the user's browser

	return (
		<div className={`w-full h-[100vh] flex flex-col gap-10 justify-center items-center ${theme === "dark" ? "bg-black" : "bg-white"}`}>
			<p className={`text-[50px] font-Montserrat ${theme === "dark" ? "text-white" : "text-black"}`}>Hello!!</p>
			<button
				className={`tex-3xl font-Montserrat px-4 py-2 rounded-lg ${theme === "dark" ? "bg-sky-800 text-white" : "bg-red-300 text-black"}`}
				onClick={() => {setTheme(theme === "dark" ? "light" : "dark")}
				}>Dark Mode</button>
		</div>
	)
}


const useLocalStorage  = ({ key, defaultValue }) => { // Custom Hook, This hook saves data in the local storage. 
	const [value, setValue] = useState(() => { // Here we are using a function to determine the value state
		let currentValue;
		
		try {
			currentValue = JSON.parse(localStorage.getItem(key) || defaultValue); // Getting the data saved in the local storage OR the default value (if there is not saved data)
			
		} catch(error) { // If getting data from the local storage failed, We log the error and pass in the default value
			console.log(error);
			currentValue = defaultValue;
		}
		
		return currentValue;
	});

	useEffect(() => { // Defining the setter function (setValue)
		localStorage.setItem(key, JSON.stringify(value));
		
	}, [key, value])
	
	return [value, setValue];

}

export default ThemeSwtich;