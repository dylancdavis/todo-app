import { useState, useEffect } from "react"
import NewProjectForm from './newProjectForm';
import PlusButton from './plusButton';
import ProjectItem from './projectItem'
import axios from 'axios'

const baseURL = 'http://localhost:3001'

const ProjectContainer = () => {

  const [projects, setProjects]  = useState([])
  const [newProject, setNewProject]  = useState(false)

  const openProjectForm = () => {
    setNewProject(true)
  }

  const onProjectSave = async (newProject) => {
    const response = await axios.post(`${baseURL}/projects`, newProject)

    setProjects(projects.concat(response.data))
    setNewProject(false)
  }

  const onProjectDiscard = () => {
    setNewProject(false)
  }

  const onProjectDelete = async id => {
    await axios.delete(`${baseURL}/projects/${id}`)
    setProjects(projects.filter(p => p.id !== id))
  }

  // use effect to get projects here...

  useEffect(() => {
    (async () => {
      const getProjects = await axios.get(`${baseURL}/projects`)
      setProjects(getProjects.data)
    })()
  }, [])

  return (
    <div id='project-container'>
      {projects.map(p => <ProjectItem key={p.id} id={p.id} title={p.title} initTasks={p.tasks} onDelete={onProjectDelete} />)}
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