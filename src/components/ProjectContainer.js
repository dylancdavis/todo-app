import { useState, useEffect } from "react";
import NewProjectForm from "./NewProjectForm";
import PlusButton from "./PlusButton";
import ProjectItem from "./ProjectItem";
import axios from "axios";
import projectService from "../services/projectService";
import tasklistService from "../services/tasklistService";

const baseURL = "http://localhost:3001";

const ProjectContainer = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);

  const openProjectForm = () => {
    setNewProject(true);
  };

  // Fetch projects from either local server, or local storage
  useEffect(() => {
    (async () => {
      try {
        const fetchedProjects = await projectService.getAll();
        setProjects(fetchedProjects);
        if (!fetchedProjects.length) setNewProject(true);
      } catch (e) {
        window.alert(e);
      }
    })();
  }, []);

  const onProjectSave = async ({ title, tasks }) => {
    const taskResponse = await tasklistService.create(tasks);
    const tasklistID = taskResponse.id;

    const projectResponse = await projectService.create({
      title,
      tasks: tasklistID,
    });

    setProjects(projects.concat(projectResponse));
    setNewProject(false);
  };

  const onProjectDiscard = () => {
    setNewProject(false);
  };

  const onProjectDelete = async (id, tasklistId) => {
    projectService.remove(id);
    tasklistService.remove(tasklistId);
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div id="project-container">
      {projects.map((p) => (
        <ProjectItem
          key={p.id}
          id={p.id}
          title={p.title}
          tasklist={p.tasks}
          onDelete={onProjectDelete}
        />
      ))}
      {newProject && (
        <NewProjectForm onSave={onProjectSave} onDiscard={onProjectDiscard} />
      )}
      <NewProjectButton enabled={newProject} onClick={openProjectForm} />
    </div>
  );
};

const NewProjectButton = ({ enabled, onClick }) => {
  const otherClasses = enabled ? "new-project disabled" : "new-project";
  return (
    <PlusButton
      otherClasses={otherClasses}
      onClick={onClick}
      text={"add new project"}
    />
  );
};

export default ProjectContainer;
