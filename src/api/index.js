import axios from "axios";

const server = axios.create({
    baseURL: "https://collection-waitlist.azurewebsites.net",
    withCredentials: true,
});


export const sendEmail = (email) => server.post("/sendEmail", {email: email});
export const sendMessage = (message) => server.post("/sendMessage", message);