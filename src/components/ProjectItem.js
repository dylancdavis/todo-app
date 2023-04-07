import axios from "axios";
import { useState, useEffect } from "react";
import ProjectBody from "./ProjectBody";
import ProjectHeader from "./ProjectHeader";
import discardIcon from "../assets/cross.png";
import tasklistService from "../services/tasklistService";

const baseURL = "http://localhost:3001";

const ProjectItem = ({ id, title, onDelete, tasklist }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const tasksResponse = await tasklistService.get(tasklist);
      setTasks(tasksResponse.tasks);
    })();
  }, [tasklist]);

  const addTask = async (newTask) => {
    const newTaskList = tasks.concat(newTask);
    await tasklistService.update(tasklist, newTaskList);
    setTasks(newTaskList);
  };

  const toggleTask = async (text) => {
    const newTaskList = tasks.map((t) => {
      return t.text === text ? { ...t, completed: !t.completed } : t;
    });
    await tasklistService.update(tasklist, newTaskList);
    setTasks(newTaskList);
  };

  const editTask = async (oldText, newText) => {
    if (!newText) return;
    const newTaskList = tasks.map((t) => {
      return t.text === oldText ? { ...t, text: newText } : t;
    });
    await tasklistService.update(tasklist, newTaskList);
    setTasks(newTaskList);
  };

  const removeTask = async (text) => {
    if (!text) return;
    const newTaskList = tasks.filter((t) => t.text !== text);
    await tasklistService.update(tasklist, newTaskList);
    setTasks(newTaskList);
  };

  const onDiscard = async () => {
    onDelete(id, tasklist);
  };

  return (
    <div className="project-item">
      <ProjectHeader>
        <Title title={title}></Title>
      </ProjectHeader>
      <ProjectBody
        tasks={tasks}
        addTask={addTask}
        toggleTask={toggleTask}
        editTask={editTask}
        removeTask={removeTask}
      />
      <DiscardButton onDiscard={onDiscard} />
    </div>
  );
};

const Title = ({ title }) => <div className="project-title">{title}</div>;

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

export default ProjectItem;
