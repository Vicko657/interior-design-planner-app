import api from "../AxiosConfig";

const projectService = {
  get: async () => {
    try {
      const response = await api.get("/api/projects");
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  post: async (projectData, clientId) => {
    try {
      const response = await api.post(`/api/projects/${clientId}`, projectData);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  getById: async (id) => {
    try {
      const response = await api.get(`/api/projects/${id}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};

export default projectService;
