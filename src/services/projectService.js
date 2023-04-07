import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { local, ping, baseURL } from "./localService";

const getAll = async () => {
  if (local === null) {
    await ping();
  }
  if (local) {
    console.log("Fetching projects from local storage");
    return JSON.parse(window.localStorage.getItem("projects")) ?? [];
  } else {
    try {
      const getProjects = await axios.get(`${baseURL}/projects`);
      return getProjects.data;
    } catch (e) {
      console.log(`Error fetching projects: ${e}`);
      local = true;
      return [];
    }
  }
};

const create = async (newProject) => {
  if (local === null) {
    await ping();
  }
  if (local) {
    const projectToSave = {
      id: uuidv4(),
      ...newProject,
    };
    console.log("Saving project to local storage:", projectToSave);
    const projects = JSON.parse(window.localStorage.getItem("projects")) ?? [];

    window.localStorage.setItem(
      "projects",
      JSON.stringify(projects.concat(projectToSave))
    );
    return projectToSave;
  } else {
    try {
      const taskResponse = await axios.post(`${baseURL}/projects`, {
        tasks: newProject,
      });
      return taskResponse.data;
    } catch (e) {
      console.log(`Error fetching projects: ${e}`);
      local = true;
      return [];
    }
  }
};

const remove = async (id) => {
  if (local === null) {
    await ping();
  }
  if (local) {
    console.log("Removing project from local storage: ", id);
    const projects = JSON.parse(window.localStorage.getItem("projects")) ?? [];
    window.localStorage.setItem(
      "projects",
      JSON.stringify(projects.filter((p) => p.id !== id))
    );
  } else {
    try {
      await axios.delete(`${baseURL}/projects/${id}`);
    } catch (e) {
      console.log(`Error fetching projects: ${e}`);
      local = true;
    }
  }
};

const projectService = { getAll, create, remove };
export default projectService;
