import api from "./index";

const reviewApi = {
  getKakaoReview: async (name: string) => {
    try {
      const result = await api.get(`/restaurant/reviews/kakao/${name}`);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default reviewApi;
