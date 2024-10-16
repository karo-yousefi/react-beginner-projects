import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import ProjectSperator from "./components/ProjectSperator";
import RandomColorGen from "./components/RandomColorGen";
import StartRating from "./components/StarRating";
import LoadMore from "./components/LoadMore";

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
    </div>
  )
}

export default App;
