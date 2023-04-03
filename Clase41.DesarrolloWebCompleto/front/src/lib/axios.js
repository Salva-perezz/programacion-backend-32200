import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:3000" });

// instance.defaults.withCredentials = true; <= Esto sirve para habilitar las cookies

export default instance;
