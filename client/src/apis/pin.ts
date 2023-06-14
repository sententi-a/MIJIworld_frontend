import api from "./index";

const server = process.env.SERVER || "http://localhost:5500";

const pinApi = {
  getPins: async () => {
    try {
      const result = await api.get(`/pins`);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default pinApi;
