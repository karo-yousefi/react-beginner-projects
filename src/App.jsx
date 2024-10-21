import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import ProjectSperator from "./components/ProjectSperator";
import RandomColorGen from "./components/RandomColorGen";
import StartRating from "./components/StarRating";
import LoadMore from "./components/LoadMore";
import TreeView from "./components/TreeView";
import { treeViewData } from "./data/idnex";
import QRGenrator from "./components/QRGenrator";
import ThemeSwtich from "./components/ThemeSwtich";
import ScrollIndicator from "./components/ScrollIndicator";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Accordion />
      <ProjectSperator />
      <RandomColorGen />
      <ProjectSperator />
      <StartRating numberOfStars={6}/>
      <ProjectSperator/>
      <ImageSlider url={"https://picsum.photos/v2/list?page="} page={20} limit={4}/>
      <ProjectSperator/>
      <LoadMore />
      <ProjectSperator />
      <TreeView data={treeViewData}/>
      <ProjectSperator />
      <QRGenrator />
      <ProjectSperator />
      <ThemeSwtich />
      <ProjectSperator />
      <ScrollIndicator />
      <ProjectSperator />
      <Tabs />
      <ProjectSperator />
    </div>
  )
}

export default App;
