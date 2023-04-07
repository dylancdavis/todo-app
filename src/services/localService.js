import axios from "axios";

const baseURL = "http://localhost:3001";
let local = null;

const ping = async () => {
  try {
    await axios.head(baseURL);
    local = false;
  } catch (e) {
    console.log("Ping failed, using local storage.");
    local = true;
  }
};

export { local, ping, baseURL };
