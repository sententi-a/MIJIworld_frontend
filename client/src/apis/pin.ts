import api from "./index";

const server = process.env.SERVER || "http://localhost:5500";

const pinApi = {
  getPins: async () => {
    const result = await api.get(`/pins`);
    return result.data;
  },
};

export default pinApi;
