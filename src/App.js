import { useState } from "react";
import "./App.css";
import ProjectContainer from "./components/projectContainer";

const sidebarItemNames = ["projects"];

function App() {
  return (
    <div id="content">
      <div className="banner">
        <span className="banner-text">CoreTask</span>
      </div>
      <MainContent />
    </div>
  );
}

const MainContent = () => {
  const [selectedTab, setSelectedTab] = useState("projects");

  const setTab = (i) => {
    return () => {
      console.log(i);
      setSelectedTab(i);
    };
  };

  return (
    <div id="main-content">
      <div id="sidebar">
        <div id="sidebar-items">
          {sidebarItemNames.map((i) => (
            <button key={i} className="sidebar-item" onClick={setTab(i)}>
              {i}
            </button>
          ))}
        </div>
      </div>
      {selectedTab === "projects" && <ProjectContainer />}
    </div>
  );
};

export default App;
