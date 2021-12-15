import axios from "axios";

const api = axios.create({
    baseURL:"https://61b9881138f69a0017ce60a7.mockapi.io/"
});

export default api;