import axios from "axios";

// Connecting to api with axios
const api = axios.create({
  baseURL:
    import.meta.env.VITE_INTERIOR_API_BASE_URL || "http://localhost:8080",
});

// Before request is sent: Attach authToken to every request
api.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("jwtToken");
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

// After response is received: For error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isAuthEndpoint = error.config?.url?.includes("/api/auth/");

    if (error.response?.status === 401 && !isAuthEndpoint) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default api;
