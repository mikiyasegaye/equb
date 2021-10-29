import axios from "axios";
import fs from "fs";
import path from "path";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = "";

const BASE_URL = "http://localhost:2022/api/";

export const ENDPOINTS = {};

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

const logoutUser = () => {
  localStorage.removeItem("tokenData");
};

export { postData, getData, logoutUser };
