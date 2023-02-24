import PlusButton from "./plusButton"

import saveIcon from '../assets/check.png'
import discardIcon from '../assets/cross.png'
import plusIcon from '../assets/plus.png'

const ProjectItem = () => {
	return (
		<div className='project-item unsaved'>
			<ProjectHeader />
			<ProjectBody />
			<SaveButton />
			<DiscardButton />
		</div>
	)
}

const ProjectHeader = () => {
	return (
		<div className='header'>
			<div className='header-left'>
				<Title />
				<AddTagsButton />
			</div>
		</div>
	)
}

const Title = () => {
	return <input type='text' placeholder='Project Name' className='project-title'></input>
}

const AddTagsButton = () => {
	return <PlusButton otherClasses='add-tags' text='add-tags' />
}

const ProjectBody = () => {
	return (
		<div className='body'>
			<div className='task-container'>
				<div className='header'>Task List</div>
				<TaskList />
			</div>
		</div>
	)
}

const TaskList = () => {
	return (
		<div className='task-list'>
			<button className='add-task'>+</button>
			<input className='add-task' type='text' placeholder='add a task...'></input>
		</div>
	)

}

const SaveButton = () => {
	return (<img className='save' src={saveIcon} alt='save icon'></img>)
}

const DiscardButton = () => {
	return (
			<img className='discard' src={discardIcon}  alt='discard icon'></img>
	)
}

export default ProjectItem