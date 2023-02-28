import { useState } from "react"

const ProjectBody = props => {
	return (
		<div className='body'>
			<div className='task-container'>
				<div className='header'>Task List</div>
				<TaskList {...props} />
			</div>
		</div>
	)
}

const TaskList = ({tasks, addTask, toggleTask, editTask, removeTask}) => {

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
			{tasks.map(t => <Task text={t.text} completed={t.completed} toggleTask={toggleTask} editTask={editTask} removeTask={removeTask} />)}
			<div className='task-item'>
				<button className='add-task' onClick={saveNewTask}>+</button>
				<input 
					className='add-task' 
					type='text' 
					placeholder='add a task...'
					value={newTaskText}
					onChange={onNewTaskTextChange}>
				</input>
			</div>

		</div>
	)
}

const Task = ({text, completed, toggleTask, editTask, removeTask}) => {

	const [editing, setEditing] = useState(false)
	const [editText, setEditText] = useState(text)

	const onToggle = () => {
		toggleTask(text)
	}

	const onEditChange = e => {
		setEditText(e.target.value)
	}

	const toggleEditing = () => {
		setEditing(!editing)
	}

	const saveText = () => {
		editTask(text, editText)
		setEditing(false)
	}

	const deleteTask = () => {
		removeTask(text)
	}

	const extraClass = completed ? 'completed' : ''

	return (<div className='task-item'>
						<button className={`checkbox ${extraClass}`} onClick={onToggle}></button>
						{editing
							? (<div className='display-text'>
									<input
										className='edit-text' 
										type='text'
										placeholder={text}
										value={editText}
										onChange={onEditChange}
									/>
									<button className='edit-button' onClick={saveText}> ✓</button>
								</div>)
							: <span className={`display-text ${extraClass}`} onClick={toggleEditing}>{text}</span>}
						<button onClick={deleteTask} className='delete'>X</button>
					</div>)
}

export default ProjectBody