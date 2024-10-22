import { useState } from "react";


const Tabs = ({ data }) => {
	const [activeTab, setActiveTab] = useState(0); // Active tab state

	return (
		<div className="w-full h-[100vh] flex flex-col gap-2 justify-center items-center">
			<div className="flex gap-3">
				{
					data.map((tab) => {
						return (
								<div
									key={tab.id}
									className={`w-28 h-14 flex justify-center items-center rounded-lg cursor-pointer ${activeTab === tab.id ? "font-bold" : ""} transition-all`}
									style={{ backgroundColor: tab.bgColor }}
									onClick={() => setActiveTab(tab.id)}> {/* Updating the state to ID of the current tab */}
									<p>{tab.tabName}</p>
							</div>
						)
					})
				}
			</div>
			<div className="w-[420px] min-h-[100px]">
				{
					data.map((tab) => {
						return (
						activeTab === tab.id ? // Showing only the tab with the same ID as activeTab
							<div key={tab.id}>
								<h1 className="text-2xl font-bold font-Montserrat text-center my-5">{tab.content.title}</h1>
								<p className="font-Montserrat text-center">{tab.content.text}</p>
							</div> :
							null
						);
					})
				}
			</div>
		</div>
	)
}

export default Tabs