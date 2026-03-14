import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://chatappbackend-production-65b7.up.railway.app/api",
    withCredentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",},
})