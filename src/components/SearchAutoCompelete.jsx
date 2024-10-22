import { useState, useEffect } from "react";

const SearchAutoCompelete = () => {
	const [loading, setLoading] = useState(false); // Loading state, While the data for useranmes is fetching, This will be true
	const [users, setUsers] = useState([]); // All the fetched usernames
	const [error, setError] = useState(null); // Error state, A container for the fetching error
	const [input, setInput] = useState(""); // Value of the input
	const [showDropdown, setShowDropdown] = useState(false); // A state the determine whether the dropsdown should be shown or not 
	const [filteredUsers, setFilteredUsers] = useState([]); // An array of the filtered users (The users that match what the user wrote down)

	const fetchUsers = async() => {
		const API = "https://dummyjson.com/users?limit=100"; // Getting data of 100 users
		try {
			setLoading(true); // Updating the loading state
			const response = await fetch(API);
			const data = await response.json();

			if (data && data.users.length) { // Making sure the data exists before updating the user state
				setUsers(data.users.map((user) => (user.firstName))); // Updating the user state with only the first name of the users
				setLoading(false); // Updating the loading state
				setError(null); // Clearing the error state
			}

		} catch (e) {
			setError(e.message); // Updating the error with the error message
			setLoading(false); // Updating the loading state
		}
	}

	const handleSearch = (e) => {
		const query = e.target.value; // Getting the text in the input
		setInput(query); // Updating the input state 

		if (query.length > 1) { // Showing the suggestions only if the user typed more than 1 character
			const filteredItems =  // Defining the value of filteredItems based on a condition
			users && users.length ? 
			users.filter((item) => item.toLowerCase().indexOf(query.toLowerCase()) > -1) : // Checking all the fetched usernames, Filtering out the onces that have common characters with the inputed text
			[];
			
			setFilteredUsers(filteredItems); // Updating the state of filted users
			setShowDropdown(true);
		}
		else {
			setShowDropdown(false);
		}
	}

	const handleSelect = (e) => { // If the user click on a suggested value, The value of input will be updated
		setInput(e.target.innerHTML);
		setShowDropdown(false);
	}

	useEffect(() => {
		fetchUsers();
	},[]);

	if (loading) { // Hanlding loading
		return (
			<div className="w-full h-[100vh] flex justify-center items-center">Loading...</div>
		)
	}

	if (error){ // Hanlding errors
		<div className="w-full h-[100vh] flex justify-center items-center">Error + error</div>
	}


	return (
		<div className="w-full h-[100vh] flex justify-center items-center">
			<div className="w-[200px] flex flex-col justify-start items-center h-52">
				<input
					className="border-2 border-black w-full"
					name="search"
					type="text"
					value={input}
					onChange={handleSearch}
					placeholder="Search"/>

				{showDropdown && filteredUsers.length > 0 ? ( // Only show the dropdown if the state of the dropdown is true and there is something to show
					<div className="border-2 border-black w-full border-t-0 flex flex-col">
						{
							filteredUsers.map((item) => { // Showing the suggested items one by one
								return <p
								key={item}
								onClick={(e) => handleSelect(e)}
								className="cursor-pointer">{item}</p>;
							})
						}
					</div>
				) : null}
			</div>
		</div>
	);
}

export default SearchAutoCompelete