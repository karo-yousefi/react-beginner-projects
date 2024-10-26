import { useContext } from "react";
import { FeatureFlagContext } from "../App";

const FeatureFlag = () => {

	const {active, toggleActive} = useContext(FeatureFlagContext);


	return (
		<div className="w-full h-[100vh] flex justify-center items-center">
			<input
				type="checkbox"
				checked={active["accordion"]}
				onChange={() => toggleActive("accordion")}
				/>
				
			<input
				type="checkbox"
				checked={active["randomColorGen"]}
				onChange={() => toggleActive("randomColorGen")}
				/>
				
			<input
				type="checkbox"
				checked={active["starRating"]}
				onChange={() => toggleActive("starRating")}
				/>
				
			<input
				type="checkbox"
				checked={active["imageSlider"]}
				onChange={() => toggleActive("imageSlider")}
				/>
				
			<input
				type="checkbox"
				checked={active["loadMore"]}
				onChange={() => toggleActive("loadMore")}
				/>
				
			<input
				type="checkbox"
				checked={active["treeView"]}
				onChange={() => toggleActive("treeView")}
				/>

			<input
				type="checkbox"
				checked={active["QRGenerator"]}
				onChange={() => toggleActive("QRGenerator")}
				/>
				
			<input
				type="checkbox"
				checked={active["themeSwitch"]}
				onChange={() => toggleActive("themeSwitch")}
				/>
				
			<input
				type="checkbox"
				checked={active["scrollIndicator"]}
				onChange={() => toggleActive("scrollIndicator")}
				/>
		
			<input
				type="checkbox"
				checked={active["tabs"]}
				onChange={() => toggleActive("tabs")}
				/>
				
			<input
				type="checkbox"
				checked={active["customModal"]}
				onChange={() => toggleActive("customModal")}
				/>
				
			<input
				type="checkbox"
				checked={active["githubProfileFinder"]}
				onChange={() => toggleActive("githubProfileFinder")}
				/>

			<input
				type="checkbox"
				checked={active["searchAutoCompelete"]}
				onChange={() => toggleActive("searchAutoCompelete")}
				/>

			<input
				type="checkbox"
				checked={active["ticTacToe"]}
				onChange={() => toggleActive("ticTacToe")}
				/>
		</div>
	)
}

export default FeatureFlag