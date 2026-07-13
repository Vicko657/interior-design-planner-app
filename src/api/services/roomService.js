import api from "../AxiosConfig";

const roomService = {
  post: async (roomData, projectId) => {
    try {
      const response = await api.post(`/api/rooms/${projectId}`, roomData);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  getById: async (id) => {
    try {
      const response = await api.get(`/api/rooms/${id}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  put: async (roomData, id) => {
    try {
      const response = await api.put(`/api/rooms/${id}`, roomData);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  getByType: async (type) => {
    try {
      const response = await api.get(`/api/rooms/type`, {
        params: { type: type },
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};

export default roomService;
