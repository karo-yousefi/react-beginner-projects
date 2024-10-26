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
				
		</div>
	)
}

export default FeatureFlag