import { useState } from "react"


const TreeView = ({ data }) => { // The main component, This is a container for all the list and items
	return (
		<div className="w-full h-[100vh] flex justify-start">
			<div className="w-[320px] h-full bg-sky-400">
				<MenuList list={data} />
			</div>
		</div>
	)
}

const MenuList = ({ list }) => { // Handling the array of objects in the data. It renders a list of items. Each item renders by ItemList component
	return (
		<ul className="px-5 py-3">
			{
				list && list.length > 0 ?
				list.map((item, index) => {
					return (
						<ItemList key={index} item={item} />
					)
				}) :
				null
			}
		</ul>
	)
}

const ItemList = ({ item }) => { // Rendering items

	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({}); // Tracking expansion / collapse of each item (if they have children)

	const handleExpand = (item) => {
		setDisplayCurrentChildren({...displayCurrentChildren, [item] : !displayCurrentChildren[item]}) // Toggling between open and closed
	}

	return (
		<li className="mt-2">
				<div className="flex gap-4">
					{
						item && item.children ? // Ensuring the item is exists before checking if its children is falsy (undefined) or truthy 
						<span className="cursor-pointer font-Montserrat text-3xl font-bold select-none hover:text-white transition-all" onClick={() => handleExpand(item.label)}>
							{
								displayCurrentChildren[item.label] ? "-" : "+" // Changint the text of the span based on if the item is open or closed (using label as key)
							}
						</span>:
						null // If not item or no children in item do nothing
					}
					<p className="cursor-pointer font-Montserrat text-2xl select-none hover:font-semibold transition-all">{item.label}</p>
				</div>
				{
					item && item.children && displayCurrentChildren[item.label] ? // Cheking each item for children, If there are children, The MenuList component will run again
					<MenuList list={item.children}/> : // Calling the MenuList with the new children (recursion)]
					null
				}
		</li>
	)
}

export default TreeView;