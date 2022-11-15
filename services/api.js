const axios = require("axios");

const api = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
})

module.exports =  api;