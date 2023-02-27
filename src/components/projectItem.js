import axios from "axios"
import { useState } from "react"
import ProjectBody from "./projectBody"
import ProjectHeader from "./projectHeader"

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
			<ProjectHeader>
				<Title title={title}></Title>
			</ProjectHeader>
			<ProjectBody tasks={tasks} addTask={addTask} />
		</div>
	)
}

const Title = ({title}) => <div className='project-title'>{title}</div>

export default ProjectItem