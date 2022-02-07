import axios from "axios";

//define default settings for axios
export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});
