import api from "../AxiosConfig";

const designerService = {
  get: async () => {
    try {
      const response = await api.get("/api/designer/profile");
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  update: async (profileData) => {
    try {
      const response = await api.put("/api/designer/profile", profileData);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};

export default designerService;
