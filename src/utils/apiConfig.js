import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://learn-thai-api-e2ec4a068c3c.herokuapp.com/",
  development: "https://learn-thai-api-e2ec4a068c3c.herokuapp.com/",
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
