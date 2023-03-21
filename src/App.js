import { useState } from "react";
import "./App.css";
import ProjectContainer from "./components/projectContainer";

const sidebarItemNames = ["projects", "tags", "settings"];

function App() {
  const [selectedTab, setSelectedTab] = useState("projects");

  return (
    <div id="content">
      <div className="banner">
        <span className="banner-text">CoreTask</span>
      </div>
      <MainContent selectedTab={selectedTab} />
    </div>
  );
}

const MainContent = ({ selectedTab }) => (
  <div id="main-content">
    <Sidebar />
    {selectedTab === "projects" && <ProjectContainer />}
  </div>
);

const SidebarItems = () => {
  return (
    <div id="sidebar-items">
      {sidebarItemNames.map((i) => (
        <button key={i} className="sidebar-item">
          {i}
        </button>
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div id="sidebar">
      <span id="sidebar-title">Sidebar</span>
      <SidebarItems />
    </div>
  );
};

export default App;
