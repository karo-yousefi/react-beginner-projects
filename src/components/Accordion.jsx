import { useState } from "react";
import { accordionData } from "../data/idnex";

const Accordion = () => {
	const [selected, setSelected] = useState(false); // For opening / clsoing one item at a time (if multipe is not active)
	const [isMutli, setIsMulti] = useState(false); // For activating / deactivating multiple selection
	const [mutli, setMulti] = useState([]); // An array of all the selected items for when the mulitple selection is active

	const handleSelection = (id) => { // If multiple is not active, By clicking each item this funciton will run.
		setSelected(selected === id ? null : id) // Check if the the item the user is selecting is already open or not, If it is open, it will be closed.
	}

	const handleMultiSelection = (id) => { // If multiple is active, By clicking each item this funciton will run. This funciton addes the id of the item to the mutli array
		const copyMulti = [...mutli]; // State should be treated as immutable. React does not track the changes if you update it directly.
		if (copyMulti.includes(id)) { // Alread open
			copyMulti.splice(copyMulti.indexOf(id), 1); // Removing the id form the open array
		}
		else {
			copyMulti.push(id); // Adding the id of the item to the open array
		}
		setMulti(copyMulti); // Updating the actual array

	}
	return (
		<div className="flex flex-col gap-1 items-center">
			<button // Toggling between multi select and single select
				className="w-40 bg-red-400 rounded-md"
				onClick={() => setIsMulti(!isMutli)}> 
				{isMutli ? "disable multi" : "enable multi"}
			</button>
			{
				accordionData ? 
				accordionData.map((item) => {
					return (
						<div className="w-[600px] flex flex-col" key={item.id}>
							<div
								className="group w-full flex justify-between px-3 py-2 bg-sky-400 rounded-md cursor-pointer hover:bg-sky-300 transition-all select-none"
								onClick={
									isMutli ?
									() => handleMultiSelection(item.id) : // If multiple is enabled, The id of the clicked item will be sent to handleMultiSelection function
									() => handleSelection(item.id) // If multiple is not enabled, The id of the clicked item will be sent to handleSelection function
								}>
								<h1 className="text-3xl font-Montserrat font-semibold">{item.title}</h1>
								<span className="text-3xl font-Montserrat font-semibold group-hover:text-white">+</span>
							</div>
							<div className="w-full bg-sky-100 rounded-md px-4">
								{
									isMutli ? // If mutli is selected
										mutli.includes(item.id) && ( // If item exists in the selected array
											<p className="text-2xl font-Montserrat py-4">{item.text}</p>
										) :
										selected === item.id && ( // Single select
											<p className="text-2xl font-Montserrat py-4">{item.text}</p>
										)
								}
							</div>
						</div>
					)
				}):
				<p>Data not found!</p> // In case the data is not available
			}
		</div>
	)
}

export default Accordion;