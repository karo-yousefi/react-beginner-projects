import { useEffect, useState, useRef } from "react"


const GithubProfileFinder = () => {

	const [username, setUsername] = useState("");
	const [data, setData] = useState(null);
	const contentRef = useRef();

	const fetchData = async() => {

		const API = `https://api.github.com/users/${username}`;

		try {
			const response = await fetch(API);
			const data = await response.json();

			if (data) {
				setData(data);
			}
		} catch(e){
			console.log(e.messsage)
		}
	};

	return (
		<div className="w-full h-[100vh] flex flex-col justify-center items-center gap-10">
			<div className="flex gap-3 items-center">
				<input
					type="text"
					placeholder="Github Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="border-[1px] border-gray-600 w-[200px] h-8 rounded-lg text-center"
				/>
				<button
					className="px-4 py-2 bg-sky-500 text-white hover:bg-sky-700 rounded-lg"
					onClick={() => fetchData()}
				>
					Find
				</button>
			</div>
			<div ref={contentRef} className="w-[35%] h-[400px]">
				{data ? 
					data.status ?
						(
							<div className="w-full h-full flex justify-center items-center">
								<div>User not found</div>
							</div>
						) :
						(
							<div className="w-full h-full flex flex-col justify-start items-center gap-10">
								<img src={data.avatar_url} className="w-52 h-full rounded-full object-cover hover:scale-125 transition-all"/>
								
								<div className="flex gap-1">
									<span className="font-Montserrat">Username:</span>
									<h1 className="font-Montserrat font-semibold">{data.login}</h1>
								</div>

								<div className="flex gap-1">
									<span className="font-Montserrat">Bio:</span>
									<h1 className="font-Montserrat font-semibold">{data.bio}</h1>
								</div>

								<div className="flex gap-10">

									<div className="w-full flex gap-1">
										<h1 className="font-Montserrat">Followers:</h1>
										<span className="font-Montserrat font-semibold">{data.followers}</span>
									</div>

									<div className="w-full flex gap-1">
										<h1 className="font-Montserrat">Following:</h1>
										<span className="font-Montserrat font-semibold">{data.following}</span>
									</div>

								</div>
							</div>
						) :
				null}
			</div>
		</div>
	);
}

export default GithubProfileFinder