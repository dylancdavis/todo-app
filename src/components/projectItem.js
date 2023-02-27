import axios from "axios"
import { useState } from "react"
import ProjectBody from "./projectBody"
import ProjectHeader from "./projectHeader"
import discardIcon from '../assets/cross.png'

const baseURL = 'http://localhost:3001'

const ProjectItem = ({id, title, initTasks, onDelete}) => {

	const [tasks, setTasks] = useState(initTasks)

	const addTask = async newTask => {
		const newTaskList = tasks.concat(newTask)
		await axios.put(`${baseURL}/projects/${id}`, {title: title, tasks: newTaskList})
		setTasks(newTaskList)
	}

	const onDiscard = async () => {
		onDelete(id)
	}

	return (
		<div className='project-item'>
			<ProjectHeader>
				<Title title={title}></Title>
			</ProjectHeader>
			<ProjectBody tasks={tasks} addTask={addTask} />
			<DiscardButton onDiscard={onDiscard} />
		</div>
	)
}

const Title = ({title}) => <div className='project-title'>{title}</div>

const DiscardButton = ({onDiscard}) => {
	return (
			<img 
				className='discard' 
				src={discardIcon}  
				alt='discard icon'
				onClick={onDiscard}>
			</img>
	)
}

export default ProjectItem