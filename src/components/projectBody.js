import { useState } from "react"

const ProjectBody = ({tasks, addTask, toggleTask}) => {
	return (
		<div className='body'>
			<div className='task-container'>
				<div className='header'>Task List</div>
				<TaskList tasks={tasks} addTask={addTask} toggleTask={toggleTask} />
			</div>
		</div>
	)
}

const TaskList = ({tasks, addTask, toggleTask}) => {

	const [newTaskText, setNewTaskText] = useState('')

	const onNewTaskTextChange = e => {
		setNewTaskText(e.target.value)
	}

	const saveNewTask = () => {
		if (!newTaskText) return
		addTask({
			text: newTaskText,
			completed: false
		})
		setNewTaskText('')
	}

	return (
		<div className='task-list'>
			{tasks.map(t => <Task text={t.text} completed={t.completed} toggleTask={toggleTask} />)}
			<button className='add-task' onClick={saveNewTask}>+</button>
			<input 
				className='add-task' 
				type='text' 
				placeholder='add a task...'
				value={newTaskText}
				onChange={onNewTaskTextChange}></input>
		</div>
	)
}

const Task = ({text, completed, toggleTask}) => {

	const onToggle = () => {
		toggleTask(text)
	}

	return completed
		? (<>
				<button className='checkbox completed' onClick={onToggle}></button>
				<span className='display-text completed'>{text}</span>
				<div>edit stuff</div>
			</>)
		: (<>
				<button className='checkbox' onClick={onToggle}></button>
				<span className='display-text'>{text}</span>
				<div>edit stuff</div>
			</>)
}

export default ProjectBody