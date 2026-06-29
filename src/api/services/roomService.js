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
};

export default roomService;
