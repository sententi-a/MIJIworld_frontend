import axios from "axios";

const api = axios.create({
  baseURL: process.env.SERVER || "http://localhost:5500",
});

export default api;
