import axios from "axios";

let apiUrl;

const apiUrls = {
  // Need to change later on real link
  production: "",
  development: "http://localhost:3030/",
};

// Determine if production or deployment
if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
