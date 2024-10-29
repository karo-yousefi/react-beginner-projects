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
					htmlFor="accordion"
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
					htmlFor="randomColorGen"
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
					htmlFor="starRating"
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
					htmlFor="imageSlider"
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
					htmlFor="loadMore"
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
					htmlFor="treeView"
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
					htmlFor="QRGenerator"
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
					htmlFor="themeSwitch"
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
					htmlFor="scrollIndicator"
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
					htmlFor="tabs"
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
					htmlFor="customModal"
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
					htmlFor="githubProfileFinder"
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
					htmlFor="searchAutoCompelete"
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
					htmlFor="ticTacToe"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Tic Tac Toe Project</label>
			</div>

			<div>
				<input
					type="checkbox"
					checked={active["customHooks"]}
					id="customHooks"
					onChange={() => toggleActive("customHooks")}
					className="cursor-pointer"
					/>
				<label
					htmlFor="customHooks"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Custom Hooks Project</label>
			</div>
			
			<div>
				<input
					type="checkbox"
					checked={active["scrollToTopToButtom"]}
					id="scrollToTopToButtom"
					onChange={() => toggleActive("scrollToTopToButtom")}
					className="cursor-pointer"
					/>
				<label
					htmlFor="scrollToTopToButtom"
					className="m-2 text-xl font-Montserrat select-none cursor-pointer">Scroll To Top / Buttom Project</label>
			</div>

		</div>
	)
}

export default FeatureFlag