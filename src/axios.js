import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecart-website.onrender.com/",
});

export default instance;