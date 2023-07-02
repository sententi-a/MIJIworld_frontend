import api from "./index";

const pinApi = {
  getPins: async () => {
    try {
      const result = await api.get(`/pins`);
      return result.data;
    } catch (error) {
      // console.error(error);
      throw error;
    }
  },
};

export default pinApi;
