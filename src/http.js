import axios from "axios";

const token = localStorage.getItem('token');
const headers = {
    "Content-Type": "application/json"
};

if (token) {
    headers['Authorization'] = `Bearer ${token}`;
}

export default axios.create({
    baseURL: "https://app.healthhavenrx.com/api/web/",
    // headers: headers
})