import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { local, ping, baseURL } from "./localService";

const getAll = async () => {
  if (local === null) {
    await ping();
  }
  if (local) {
    console.log("Fetching task lists from local storage");
    return JSON.parse(window.localStorage.getItem("tasklists")) ?? [];
  } else {
    try {
      const getProjects = await axios.get(`${baseURL}/tasklists`);
      return getProjects.data;
    } catch (e) {
      console.log(`Error fetching projects: ${e}`);
      local = true;
      return [];
    }
  }
};

const get = async (id) => {
  if (local === null) {
    await ping();
  }
  if (local) {
    console.log(`Using local storage to get task list ${id}`);
    const tasklists =
      JSON.parse(window.localStorage.getItem("tasklists")) ?? [];
    console.log("tasklists: ", tasklists);
    return tasklists.find((t) => t.id === id);
  } else {
    try {
      const tasks = await axios.get(`${baseURL}/tasklists/${id}`);
      return tasks.data;
    } catch (e) {
      console.log(`Error fetching task ${id}: ${e}`);
      local = true;
      return { tasks: [] };
    }
  }
};

const create = async (tasks) => {
  if (local === null) {
    await ping();
  }
  if (local) {
    const listToSave = {
      id: uuidv4(),
      tasks: tasks,
    };
    console.log("Saving task list to local storage:", listToSave);
    const tasklists =
      JSON.parse(window.localStorage.getItem("tasklists")) ?? [];
    console.log("tasklists: ", tasklists);
    window.localStorage.setItem(
      "tasklists",
      JSON.stringify(tasklists.concat(listToSave))
    );
    return listToSave;
  } else {
    try {
      const taskResponse = await axios.post(`${baseURL}/tasklists`, {
        tasks: tasks,
      });
      return taskResponse.data;
    } catch (e) {
      console.log(`Error saving tasklist: ${e}`);
      local = true;
      return { id: uuidv4(), tasks: [] };
    }
  }
};

const update = async (id, newTasks) => {
  if (local === null) {
    await ping();
  }
  if (local) {
    console.log(
      `Updating task list ${id} in local storage to tasks:`,
      newTasks
    );
    const tasklists =
      JSON.parse(window.localStorage.getItem("tasklists")) ?? [];
    const updatedTasklists = tasklists.map((t) =>
      t.id === id ? { ...t, tasks: newTasks } : t
    );
    window.localStorage.setItem("tasklists", JSON.stringify(updatedTasklists));
    return updatedTasklists;
  } else {
    try {
      const taskResponse = await axios.put(`${baseURL}/tasklists/${id}`, {
        tasks: newTasks,
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
    console.log("Removing task list from local storage:", id);
    const tasklists =
      JSON.parse(window.localStorage.getItem("tasklists")) ?? [];
    window.localStorage.setItem(
      "tasklists",
      JSON.stringify(tasklists.filter((t) => t.id !== id))
    );
  } else {
    try {
      await axios.delete(`${baseURL}/tasklists/${id}`);
    } catch (e) {
      console.log(`Error fetching projects: ${e}`);
      local = true;
    }
  }
};

const tasklistService = { getAll, get, create, update, remove };
export default tasklistService;
