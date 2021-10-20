import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiZDkzOWI3ZjQtZWI1NS00NWI0LTg3NmMtZWJjOTNlY2Y5ZjUyIiwiZnVsbE5hbWUiOiJzeXN0ZW0gYWRtaW4iLCJ1c2VyTmFtZSI6InN5c3RlbWFkbWluIiwicm9sZSI6eyJpZCI6InN5c3RlbSIsInJvbGVOYW1lIjoic3lzdGVtIGFkbWluIn19LCJpYXQiOjE2MzQyMTg2NTksImV4cCI6MTYzNDIyNTg1OX0.h7HgDB_AiIxGUeAz9kww433HxWM1_y5Wr9nLLZN4D1c";

const BASE_URL = "http://localhost:3051/api/";

// let t_id = localStorage.getItem("task_id");

export const ENDPOINTS = {
  TASK: "task",
  // SUBTASK: `task/${t_id}/subtask`,
  ROLE: "role",
  USER: "user",
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + endpoint + "/";
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (newData) => axios.post(url, newData),
    add: (id, additionalData) => axios.post(url + id, additionalData),
    update: (id, updateData) => axios.put(url + id, updateData),
    delete: (id) => axios.delete(url + id),
  };
};

const postData = async ({ body, url }) => {
  try {
    const data = await axios.post(`${BASE_URL}${url}`, body);
    return { message: "success", data: data.data };
  } catch (error) {
    return {
      message: "error",
      data: error,
    };
  }
};

const getData = async (url) => {
  const data = await axios.get(`${BASE_URL}/${url}`);
  return data.data;
};

export { postData, getData };
