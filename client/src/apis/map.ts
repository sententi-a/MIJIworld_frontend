import api from "./index";

const mapApi = {
  getMap: async (name: string) => {
    try {
      const response = await api.get(`/restaurant/map/${name}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};

export default mapApi;
