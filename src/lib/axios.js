import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL : "https://chatappbackend-production-65b7.up.railway.app/api",
    baseURL : import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://chatappbackend-production-65b7.up.railway.app/api",
    withCredentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    headers: {
        "Content-Type": "application/json",},
})