import { useState } from "react";
import { setPalette, initialPalette, resetPalette } from "./logic/colorHandler";
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
  const [showReset, setShowReset] = useState(false);

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
    setShowReset(true);
  };

  const setDefaultColors = () => {
    resetPalette();
    setShowReset(false);
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
            href={initialPalette}
            className="sidebar-item"
            target="_blank"
            rel="noreferrer"
          >
            initial palette
          </a>
          {showReset && (
            <button className="sidebar-item" onClick={setDefaultColors}>
              default colors
            </button>
          )}
        </div>
      </div>
      {selectedTab === "projects" && <ProjectContainer />}
    </div>
  );
};

export default App;
