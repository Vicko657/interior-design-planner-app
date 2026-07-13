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
};
export default itemService;
