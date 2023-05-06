import axios from "axios";

const server = axios.create({
    baseURL: "https://localhost:5000",
    withCredentials: true,
});


export const sendEmail = (email) => server.post("/sendEmail", email);
export const sendMessage = (message) => server.post("/sendMessage", message);