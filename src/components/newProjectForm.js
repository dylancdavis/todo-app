import PlusButton from "./plusButton"
import saveIcon from '../assets/check.png'
import discardIcon from '../assets/cross.png'
import { useState } from "react"
import ProjectBody from "./projectBody"

const NewProjectForm = ({onSave, onDiscard}) => {

	const [title, setTitle] = useState('')
	const [tasks, setTasks] = useState([])

	const onTitleChange = e => {
		setTitle(e.target.value)
	}

	const handleSave = () => {
		if (!title) return

		const projectToSave = {
				id: Math.floor(Math.random(10000)),
				title: title,
				tasks: tasks
		}
		setTitle('')
		onSave(projectToSave)
	}

	const addTask = newTask => {
		setTasks(tasks.concat(newTask))
	}

	return (
		<div className='project-item unsaved'>
			<ProjectHeader title={title} handleTitleChange={onTitleChange} />
			<ProjectBody tasks={tasks} addTask={addTask} />
			<SaveButton onSave={handleSave} />
			<DiscardButton onDiscard={onDiscard} />
		</div>
	)
}

const ProjectHeader = ({title, handleTitleChange}) => {
	return (
		<div className='header'>
			<div className='header-left'>
				<Title title={title} handleTitleChange={handleTitleChange} />
				<AddTagsButton />
			</div>
		</div>
	)
}

const Title = ({title, handleTitleChange}) => {

	return <input 
		type='text' 
		placeholder='Project Name' 
		className='project-title'
		value={title}
		onChange={handleTitleChange}></input>
}

const AddTagsButton = () => {
	return <PlusButton otherClasses='add-tags' text='add-tags' />
}

const SaveButton = ({onSave}) => {

	return (<img 
		className='save' 
		src={saveIcon} 
		alt='save icon' 
		onClick={onSave} />)
}

const DiscardButton = ({onDiscard}) => {
	return (
			<img 
			className='discard' 
			src={discardIcon}  
			alt='discard icon'
			onClick={onDiscard}></img>
	)
}

export default NewProjectForm