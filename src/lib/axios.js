import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://chatappbackend-production-65b7.up.railway.app/api",
    // baseURL : import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://chatappbackend-production-65b7.up.railway.app/api",
    withCredentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    headers: {
        "Content-Type": "application/json",},
})

// Add interceptor to attach token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("Jwt_Token"); // or wherever you store it

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});