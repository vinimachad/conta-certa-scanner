import axios from "axios";

export const api = axios.create({
    baseURL: 'https://conta-certa-staging.herokuapp.com/',
})