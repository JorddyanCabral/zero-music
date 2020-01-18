const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        "Acess-Control-Allow-Origin": "*"
    }
});

export default api;