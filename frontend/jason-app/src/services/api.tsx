import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    "Access-Control-Allow-Origin":
      "http://localhost:3333, http://localhost:4000",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods":
      "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;