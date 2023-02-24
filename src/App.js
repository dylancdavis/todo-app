import { useState } from 'react';
import './App.css';
import PlusButton from './components/plusButton';
import ProjectItem from './components/projectItem'

const sidebarItemNames = ['projects', 'tags', 'settings']

function App() {

  const [selectedTab, setSelectedTab] = useState('projects')

  return (
    <div className='content'>
      <div className='banner'>
        <span className='banner-text'>coretask</span>
      </div>
      <MainContent selectedTab={selectedTab} />
    </div>
  )
}

const MainContent = ({selectedTab}) => (
  <div id='main-content'>
    <Sidebar />
    {selectedTab === 'projects' && <ProjectContainer />}
  </div>)

const ProjectContainer = () => {

  // TODO: Use state for projecs

  return (
    <div id='project-container'>
      <ProjectItem />
      <NewProjectButton />
    </div>
  )
}

const SidebarItems = () => {
  return (
    <div id='sidebar-items'>
      {sidebarItemNames.map(i => <button key={i} className='sidebar-item'>{i}</button>)}
    </div>
  )
}

const Sidebar = () => {
  return (
    <div id='sidebar'>
      <span id='sidebar-title'>Sidebar</span>
      <SidebarItems />
    </div>
  )
}

const NewProjectButton = () => {
  return(<PlusButton otherClasses='new-project disabled' text='add new project'/>)
}

export default App;
