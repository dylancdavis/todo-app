import PlusButton from "./plusButton"
import { useState } from "react"
import ProjectBody from "./projectBody"

const ProjectItem = ({title, initTasks}) => {

	const [tasks, setTasks] = useState(initTasks)

	const addTask = newTask => {
		setTasks(tasks.concat(newTask))
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
				<AddTagsButton />
			</div>
		</div>
	)
}

const Title = ({title}) => {

	return <div className='project-title'>{title}</div>
}

const AddTagsButton = () => {
	return <PlusButton otherClasses='add-tags' text='add-tags' />
}

export default ProjectItem