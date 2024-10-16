import Accordion from "./components/Accordion";
import ProjectSperator from "./components/ProjectSperator";
import RandomColorGen from "./components/RandomColorGen";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Accordion />
      <ProjectSperator />
      <RandomColorGen />
      <ProjectSperator />

    </div>
  )
}

export default App;
