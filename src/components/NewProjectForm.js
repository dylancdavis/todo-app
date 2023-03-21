import saveIcon from "../assets/check.png";
import discardIcon from "../assets/cross.png";
import { useState } from "react";
import ProjectBody from "./ProjectBody";
import ProjectHeader from "./ProjectHeader";

const NewProjectForm = ({ onSave, onDiscard }) => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

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
    console.log("success");

    const newTaskList = tasks.map((t) => {
      return t.text === text ? { ...t, completed: !t.completed } : t;
    });
    setTasks(newTaskList);
  };

  return (
    <div className="project-item unsaved">
      <ProjectHeader>
        <Title title={title} handleTitleChange={onTitleChange} />
      </ProjectHeader>
      <ProjectBody tasks={tasks} addTask={addTask} toggleTask={toggleTask} />
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
