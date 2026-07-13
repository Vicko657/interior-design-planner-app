import api from "../AxiosConfig";
const itemService = {
  post: async (itemData, roomId) => {
    try {
      const response = await api.patch(
        `/api/rooms/${roomId}/inventory`,
        itemData,
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  put: async (itemData, roomId, index) => {
    try {
      const response = await api.patch(
        `/api/rooms/${roomId}/inventory/${index}`,
        itemData,
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};
export default itemService;
