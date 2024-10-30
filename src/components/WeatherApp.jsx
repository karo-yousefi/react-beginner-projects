import { useEffect, useState } from "react";

const APIKEY = "4fd6258c6dd8f1bc9033a8d6de709710";

const WeatherApp = () => {

	const [city, setCity] = useState(""); // The selected city will be saved here, This state is updated from SearchEngine component
	const [data, setData] = useState(); // Weather data state
	const [date, setDate] = useState(); // Today's date state
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState();


	const handleSearch = () => {
		fetchData();
	}

	const fetchData = async() => {
		const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`; // Passing in the city name, APIKEY and selecting metric units
		try {
			if (city) {
				setLoading(true);
				const response = await fetch(API);
				const data = await response.json();

				updateDate();
				setData(data);
				setLoading(false);
				setCity(""); // Reset city state
			}


		} catch (e) {
			setError(e.message);
			setLoading(false);
		}
	};

	const updateDate = () => { // Updaing date state funciton
		const time = new Date().toISOString().split("T")[0];
		const year = time.split("-")[0];
		const month = parseInt(time.split("-")[1], 10) + 1; // Month is zero-based
		const day = time.split("-")[2];
		
		setDate(`${day}.${month}.${year}`);
	}


	if (error) { // Error screen
		return (
			<div className="w-full h-[100vh] flex justify-center items-center">
				<p className="text-red-600 text-3xl font-semibold">Error + {error}</p>
			</div>
		)
	};

	if (loading) { // Loading screen
		return (
			<div className="w-full h-[100vh] flex justify-center items-center">
				<p className="text-sky-600 text-3xl font-semibold">Loading...</p>
			</div>
		)
	};

	return (
		<div className="w-full h-[100vh] flex justify-center items-center">
			<div className="w-[500px] h-[400px] flex flex-col justify-start items-center bg-sky-200 rounded-lg p-4 gap-7">
				<SearchEngine city={city} setCity={setCity} handleSearch={handleSearch}/>
				<p className="text-xl font-Montserrat font-semibold">
					{
						data ?
							data.name ? 
								`${data.name} / ${data.sys.country}` : // If city entered by the user is vaild, The city name will be shown + the country
								data.message : // Other wise, The error message will be shown
							"Enter a city" // In case the city input was empty
					}
				</p>
				<p className="text-3xl font-Montserrat">
					{
						data && data.main ? 
							`${data.main.temp} °C` : // temp
							"0 °C"
					}
				</p>
				<p className="text-xl font-Montserrat font-semibold">{date}</p>
				<div className="flex gap-24">
					<p className="text-md font-Montserrat">
						{
							data && data.main ?
								`${data.main.humidity} g/m3` : // Humidity
								"0 g/m3"
						}
					</p>
					<p className="text-md font-Montserrat">
						{
							data && data.main ?
								`${data.wind.speed} Km/h` : // Wind speed
								"0 Km/h"
						}
					</p>
				</div>
			</div>
		</div>
	)
}

export default WeatherApp


const SearchEngine = ({ city, setCity, handleSearch}) => {


	return (
		<div className="flex justify-center items-center gap-4">
			<input
				className="border-[1px] w-64 border-sky-500 rounded-md placeholder:text-center text-center h-10"
				type="text"
				placeholder="Enter City Name"
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<button
				className="px-4 py-2 text-white text-xl rounded-lg bg-sky-500 hover:bg-sky-400 transition-all"
				onClick={() => {
					// setCity(value);
					handleSearch();
				}}
			>
				Search
			</button>
		</div>
	);
}