import { useState } from "react"

const ProjectBody = ({tasks, addTask}) => {
	return (
		<div className='body'>
			<div className='task-container'>
				<div className='header'>Task List</div>
				<TaskList tasks={tasks} addTask={addTask} />
			</div>
		</div>
	)
}

const TaskList = ({tasks, addTask}) => {

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
			{tasks.map(t => <Task text={t.text} completed={t.completed} />)}
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

const Task = ({text, completed}) => {
	return completed
		? (<div>
				<button className='checkbox completed'></button>
				<span className='completed'>{text}</span>
			</div>)
		: (<div>
				<button className='checkbox'></button>
				<span>{text}</span>
			</div>)
}

export default ProjectBody