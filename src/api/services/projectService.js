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
};

export default projectService;
