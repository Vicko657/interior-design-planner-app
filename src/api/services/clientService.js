import api from "../AxiosConfig";

const clientService = {
  post: async (clientData) => {
    try {
      const response = await api.post("/api/clients", clientData);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  get: async () => {
    try {
      const response = await api.get("/api/clients");
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};

export default clientService;
