import axios from "axios";

const server = process.env.SERVER || "localhost:5500";

const pinApi = {
  getPins: async () => {
    const result = await axios.get(`${server}/pin`);
    return result.data;
  },
};

export default pinApi;
