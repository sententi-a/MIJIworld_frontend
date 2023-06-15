import api from "./index";

const restaurantApi = {
  getRestaurants: async () => {
    try {
      const result = await api.get(`/restaurants`);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
  getDialog: async (name: string) => {
    try {
      const result = await api.get(`/restaurant/dialog/${name}`);
      // console.log(result.data);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
  getBasicInfo: async (name: string) => {
    try {
      const result = await api.get(`/restaurant/${name}`);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
  getModal: async (name: string) => {
    try {
      //TODO: Promise.allsettled 적용
      const basicInfo = await api.get(`/restaurant/${name}`);
      // 헤더 컬러 가져오기
      const colorInfo = await api.get(`/restaurant/color/${name}`);
      const mapInfo = await api.get(`/restaurant/map/${name}`);
      const kakaoReviews = await api.get(`/review/kakao/${name}`);

      return {
        basicInfo: basicInfo.data,
        colorInfo: colorInfo.data,
        mapInfo: mapInfo.data,
        kakaoReviews: kakaoReviews.data,
      };
    } catch (e) {
      console.error(e);
    }
  },
};

export default restaurantApi;
