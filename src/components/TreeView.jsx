import { useState } from "react"


const TreeView = ({ data }) => {
	return (
		<div className="w-full h-[100vh] flex justify-start">
			<div className="w-[320px] h-full bg-sky-400">
				<MenuList list={data} />
			</div>
		</div>
	)
}

const MenuList = ({ list }) => {
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

const ItemList = ({ item }) => {

	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

	const handleExpand = (item) => {
		setDisplayCurrentChildren({...displayCurrentChildren, [item] : !displayCurrentChildren[item]})
	}


	return (
		<li className="mt-2">
				<div className="flex gap-4">
					{
						item && item.children && item.children.length ?
						<span className="cursor-pointer font-Montserrat text-3xl font-bold select-none hover:text-white transition-all" onClick={() => handleExpand(item.label)}>
							{
								displayCurrentChildren[item.label] ? "-" : "+"
							}
						</span>:
						null
					}
					<p className="cursor-pointer font-Montserrat text-2xl select-none hover:font-semibold transition-all">{item.label}</p>
				</div>
				{
					item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
					<MenuList list={item.children}/> :
					null
				}
		</li>
	)
}

export default TreeView;