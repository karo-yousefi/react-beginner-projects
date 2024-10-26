import { createContext, useState } from "react";

import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import ProjectSperator from "./components/ProjectSperator";
import RandomColorGen from "./components/RandomColorGen";
import StartRating from "./components/StarRating";
import LoadMore from "./components/LoadMore";
import TreeView from "./components/TreeView";
import { treeViewData } from "./data/idnex";
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



export const FeatureFlagContext = createContext();


const App = () => {

  const [active, setActive] = useState({
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
	})

  const toggleActive = (component) => {
		setActive((preActive => ({
			...preActive,
			[component]: !preActive[component],
		})));
  };

  return (
    <FeatureFlagContext.Provider value={{active, toggleActive}} className="flex flex-col items-center">
      <FeatureFlag />
      <ProjectSperator />
      {
        active["accordion"] && <Accordion />
      }
      <ProjectSperator />
      {
        active["randomColorGen"] && <RandomColorGen />
      }
      <ProjectSperator />
      {
        active["starRating"] && <StartRating numberOfStars={6}/>
      }
      <ProjectSperator/>
      {
        active["imageSlider"] && <ImageSlider url={"https://picsum.photos/v2/list?page="} page={20} limit={4}/>
      }
      <ProjectSperator/>
      {
        active["loadMore"] && <LoadMore />
      }
      <ProjectSperator />
      {
        active["treeView"] && <TreeView data={treeViewData}/>
      }
      <ProjectSperator />
      {
        active["QRGenerator"] && <QRGenerator />
      }
      <ProjectSperator />
      {
        active["themeSwitch"] && <ThemeSwtich />
      }
      <ProjectSperator />
      {
        active["scrollIndicator"] && <ScrollIndicator />
      }
      <ProjectSperator />
      {
        active["tabs"] && <Tabs data={tabsData}/>
      }
      <ProjectSperator />
      {
        active["customModal"] && <CustomModal />
      }
      <ProjectSperator />
      {
        active["githubProfileFinder"] && <GithubProfileFinder />
      }
      <ProjectSperator />
      {
        active["searchAutoCompelete"] && <SearchAutoCompelete />
      }
      <ProjectSperator />
      {
        active["ticTacToe"] && <TicTacToe />
      }
      <ProjectSperator />
    </FeatureFlagContext.Provider>
  )
}

export default App;
