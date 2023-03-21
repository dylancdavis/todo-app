import saveIcon from "../assets/check.png";
import discardIcon from "../assets/cross.png";
import { useState } from "react";
import ProjectBody from "./ProjectBody";
import ProjectHeader from "./ProjectHeader";

const NewProjectForm = ({ onSave, onDiscard }) => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSave = () => {
    if (!title) return;

    const projectToSave = {
      title: title,
      tasks: tasks,
    };
    setTitle("");
    onSave(projectToSave);
  };

  const addTask = (newTask) => {
    setTasks(tasks.concat(newTask));
  };

  const toggleTask = (text) => {
    const newTaskList = tasks.map((t) => {
      return t.text === text ? { ...t, completed: !t.completed } : t;
    });
    setTasks(newTaskList);
  };

  const editTask = async (oldText, newText) => {
    if (!newText) return;
    const newTaskList = tasks.map((t) => {
      return t.text === oldText ? { ...t, text: newText } : t;
    });
    setTasks(newTaskList);
  };

  const removeTask = async (text) => {
    if (!text) return;
    const newTaskList = tasks.filter((t) => t.text !== text);
    setTasks(newTaskList);
  };

  return (
    <div className="project-item unsaved">
      <ProjectHeader>
        <Title
          title={title}
          handleTitleChange={(e) => setTitle(e.target.value)}
        />
      </ProjectHeader>
      <ProjectBody
        tasks={tasks}
        addTask={addTask}
        toggleTask={toggleTask}
        editTask={editTask}
        removeTask={removeTask}
      />
      <SaveButton onSave={handleSave} />
      <DiscardButton onDiscard={onDiscard} />
    </div>
  );
};

const Title = ({ title, handleTitleChange }) => {
  return (
    <input
      type="text"
      placeholder="Project Name"
      className="project-title"
      value={title}
      onChange={handleTitleChange}
    ></input>
  );
};

const SaveButton = ({ onSave }) => {
  return (
    <img className="save" src={saveIcon} alt="save icon" onClick={onSave} />
  );
};

const DiscardButton = ({ onDiscard }) => {
  return (
    <img
      className="discard"
      src={discardIcon}
      alt="discard icon"
      onClick={onDiscard}
    ></img>
  );
};

export default NewProjectForm;
