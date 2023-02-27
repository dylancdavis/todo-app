import axios from "axios"
import { useState } from "react"
import ProjectBody from "./projectBody"

const baseURL = 'http://localhost:3001'

const ProjectItem = ({id, title, initTasks}) => {

	const [tasks, setTasks] = useState(initTasks)

	const addTask = async newTask => {
		const newTaskList = tasks.concat(newTask)
		await axios.put(`${baseURL}/projects/${id}`, {title: title, tasks: newTaskList})
		setTasks(newTaskList)
	}

	return (
		<div className='project-item'>
			<ProjectHeader title={title} />
			<ProjectBody tasks={tasks} addTask={addTask} />
		</div>
	)
}

const ProjectHeader = ({title}) => {
	return (
		<div className='header'>
			<div className='header-left'>
				<Title title={title} />
			</div>
		</div>
	)
}

const Title = ({title}) => {

	return <div className='project-title'>{title}</div>
}

export default ProjectItem