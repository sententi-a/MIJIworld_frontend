import api from "./index";

const menuApi = {
  getMenu: async (name: string) => {
    try {
      const response = await api.get(`/restaurant/menus/${name}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};

export { menuApi };
