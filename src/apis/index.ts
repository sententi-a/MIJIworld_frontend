import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER || "http://localhost:5500",
});

export default api;
