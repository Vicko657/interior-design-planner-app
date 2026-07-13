import api from "../AxiosConfig";
const taskService = {
  post: async (taskData, roomId) => {
    try {
      const response = await api.patch(`/api/rooms/${roomId}/task`, taskData);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  put: async (taskData, roomId, index) => {
    try {
      const response = await api.patch(
        `/api/rooms/${roomId}/task/${index}`,
        taskData,
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
export default taskService;
