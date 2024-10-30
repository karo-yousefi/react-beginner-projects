// Needed packages: 
import { createContext, useState } from "react"; 

// Components: 
import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import ProjectSperator from "./components/ProjectSperator";
import RandomColorGen from "./components/RandomColorGen";
import StartRating from "./components/StarRating";
import LoadMore from "./components/LoadMore";
import TreeView from "./components/TreeView";
import QRGenerator from "./components/QRGenerator";
import ThemeSwtich from "./components/ThemeSwtich";
import ScrollIndicator from "./components/ScrollIndicator";
import Tabs from "./components/Tabs";
import { tabsData } from "./data/idnex";
import CustomModal from "./components/CustomModal";
import GithubProfileFinder from "./components/GithubProfileFinder";
import SearchAutoCompelete from "./components/SearchAutoCompelete";
import TicTacToe from "./components/TicTacToe";
import FeatureFlag from "./components/FeatureFlag";
import CustomHooks from "./components/CustomHooks";
import ScrollToTopToButtom from "./components/ScrollToTopToButtom";
import WeatherApp from "./components/WeatherApp";

// Needed info to pass in some of the components
import { treeViewData } from "./data/idnex";



export const FeatureFlagContext = createContext();


const App = () => {

  const [active, setActive] = useState({ // true: the components will be shown, false: The component will not be shown
		accordion: true,
		randomColorGen: true,
		starRating: true,
    imageSlider: true,
    loadMore: true,
		treeView: true,
    QRGenerator: true,
    themeSwitch: true,
    scrollIndicator: true,
		tabs: true,
		customModal: true,
    githubProfileFinder: true,
    searchAutoCompelete: true,
		ticTacToe: true,
    customHooks: true,
    scrollToTopToButtom: true,
    weatherApp: true,
	})

  const toggleActive = (component) => {
		setActive((preActive => ({
			...preActive,
			[component]: !preActive[component],
		})));
  };


  const renderWithSeparator = (Component) => ( // A simple function that renders the components with a sinmple spearator component to aviod repetitive code
    <>
      {Component}
      <ProjectSperator />
    </>
  );
  
  return (
    <FeatureFlagContext.Provider value={{ active, toggleActive }} className="flex flex-col items-center">
      <FeatureFlag />
      <ProjectSperator />
        {active["accordion"] && renderWithSeparator(<Accordion />)}
        {active["randomColorGen"] && renderWithSeparator(<RandomColorGen />)}
        {active["starRating"] && renderWithSeparator(<StartRating numberOfStars={6} />)}
        {active["imageSlider"] && renderWithSeparator(<ImageSlider url={"https://picsum.photos/v2/list?page="} page={20} limit={4} />)}
        {active["loadMore"] && renderWithSeparator(<LoadMore />)}
        {active["treeView"] && renderWithSeparator(<TreeView data={treeViewData} />)}
        {active["QRGenerator"] && renderWithSeparator(<QRGenerator />)}
        {active["themeSwitch"] && renderWithSeparator(<ThemeSwtich />)}
        {active["scrollIndicator"] && renderWithSeparator(<ScrollIndicator />)}
        {active["tabs"] && renderWithSeparator(<Tabs data={tabsData} />)}
        {active["customModal"] && renderWithSeparator(<CustomModal />)}
        {active["githubProfileFinder"] && renderWithSeparator(<GithubProfileFinder />)}
        {active["searchAutoCompelete"] && renderWithSeparator(<SearchAutoCompelete />)}
        {active["ticTacToe"] && renderWithSeparator(<TicTacToe />)}
        {active["customHooks"] && renderWithSeparator(<CustomHooks />)}
        {active["scrollToTopToButtom"] && renderWithSeparator(<ScrollToTopToButtom />)}
        {active["weatherApp"] && renderWithSeparator(<WeatherApp />)}
    </FeatureFlagContext.Provider>
  );  
}

export default App;
