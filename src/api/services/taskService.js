const taskService = {
  post: async (taskData, roomId) => {
    try {
      const response = await api.patch(`/api/rooms/${roomId}/task`, taskData);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};
export default taskService;
