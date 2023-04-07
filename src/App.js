import { useState } from "react";
import { setPalette } from "./logic/colorHandler";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer";

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

  const colorPrompt = () => {
    const userURL = window.prompt(
      "Enter a coolors.io URL to change the color palette:"
    );
    setPalette(userURL);
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
          <button className="sidebar-item" onClick={colorPrompt}>
            change colors
          </button>
          <a
            href="https://coolors.co/f9fafb-060a0f-6593c2-6eb4a8-f0974e-e8765a"
            className="sidebar-item"
            target="_blank"
            rel="noreferrer"
          >
            initial palette
          </a>
        </div>
      </div>
      {selectedTab === "projects" && <ProjectContainer />}
    </div>
  );
};

export default App;
