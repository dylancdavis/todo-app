import { useState } from "react"
import NewProjectForm from './newProjectForm';
import PlusButton from './plusButton';
import ProjectItem from './projectItem'

const ProjectContainer = () => {

  const [projects, setProjects]  = useState([{id: '1', title: 'My Project'}])
  const [newProject, setNewProject]  = useState(false)

  const openProjectForm = () => {
    setNewProject(true)
  }

  const onProjectSave = (newProject) => {
    setProjects(projects.concat(newProject))
    setNewProject(false)
  }

  const onProjectDiscard = () => {
    setNewProject(false)
  }

  // use effect to get projects here...

  return (
    <div id='project-container'>
      {projects.map(p => <ProjectItem key={p.id} title={p.title} />)}
      {newProject && <NewProjectForm onSave={onProjectSave} onDiscard={onProjectDiscard} />}
      <NewProjectButton enabled={newProject} onClick={openProjectForm} />

    </div>
  )
}

const NewProjectButton = ({enabled, onClick}) => {
  const otherClasses = enabled ? 'new-project disabled' : 'new-project'
  return (<PlusButton 
    otherClasses={otherClasses}
    onClick={onClick}
    text={'add new project'}
  />)
}

export default ProjectContainer