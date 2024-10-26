import { useContext } from "react";
import { FeatureFlagContext } from "../App";

const FeatureFlag = () => {

	const {active, toggleActive} = useContext(FeatureFlagContext);


	return (
		<div className="w-full h-[100vh] flex flex-col justify-center items-center gap-3">
			<div>
				<input
					type="checkbox"
					checked={active["accordion"]}
					id="accordion"
					onChange={() => toggleActive("accordion")}
					className="cursor-pointer"
					/>
				<label
					for="accordion"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Accordion Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["randomColorGen"]}
					id="randomColorGen"
					onChange={() => toggleActive("randomColorGen")}
					className="cursor-pointer"
					/>
				<label
					for="randomColorGen"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Random Color Gen Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["starRating"]}
					id="starRating"
					onChange={() => toggleActive("starRating")}
					className="cursor-pointer"
					/>
				<label
					for="starRating"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Star Rating Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["imageSlider"]}
					id="imageSlider"
					onChange={() => toggleActive("imageSlider")}
					className="cursor-pointer"
					/>
				<label
					for="imageSlider"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Image Slider Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["loadMore"]}
					id="loadMore"
					onChange={() => toggleActive("loadMore")}
					className="cursor-pointer"
					/>
				<label
					for="loadMore"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Load More Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["treeView"]}
					id="treeView"
					onChange={() => toggleActive("treeView")}
					className="cursor-pointer"
					/>
				<label
					for="treeView"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Tree View Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["QRGenerator"]}
					id="QRGenerator"
					onChange={() => toggleActive("QRGenerator")}
					className="cursor-pointer"
					/>
				<label
					for="QRGenerator"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">QR Generator Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["themeSwitch"]}
					id="themeSwitch"
					onChange={() => toggleActive("themeSwitch")}
					className="cursor-pointer"
					/>
				<label
					for="themeSwitch"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Theme Switch Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["scrollIndicator"]}
					id="scrollIndicator"
					onChange={() => toggleActive("scrollIndicator")}
					className="cursor-pointer"
					/>
				<label
					for="scrollIndicator"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Scroll Indicator Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["tabs"]}
					id="tabs"
					onChange={() => toggleActive("tabs")}
					className="cursor-pointer"
					/>
				<label
					for="tabs"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Tabs Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["customModal"]}
					id="customModal"
					onChange={() => toggleActive("customModal")}
					className="cursor-pointer"
					/>
				<label
					for="customModal"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Custom Modal Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["githubProfileFinder"]}
					id="githubProfileFinder"
					onChange={() => toggleActive("githubProfileFinder")}
					className="cursor-pointer"
					/>
				<label
					for="githubProfileFinder"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Github Profile Finder Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["searchAutoCompelete"]}
					id="searchAutoCompelete"
					onChange={() => toggleActive("searchAutoCompelete")}
					className="cursor-pointer"
					/>
				<label
					for="searchAutoCompelete"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Search Auto Compelete Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["ticTacToe"]}
					id="ticTacToe"
					onChange={() => toggleActive("ticTacToe")}
					className="cursor-pointer"
					/>
				<label
					for="ticTacToe"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Tic Tac Toe Project</label>
			</div>

		</div>
	)
}

export default FeatureFlag