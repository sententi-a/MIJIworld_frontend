import api from "@apis/index";
import dateToString from "@utils/dateToString";
// import ticketDataType from "@types/ticket";
import ticketDataType from "../types/ticket";

export const ticketApi = {
  postTicket: async (
    restName: string,
    date: Date,
    ticketData: ticketDataType
  ) => {
    try {
      const response = await api.get(
        `/restaurant/ticket/${restName}?date=${dateToString(date)}&name=${
          ticketData.name
        }&company=${ticketData.company}&note=${ticketData.note}&message=${
          ticketData.message
        }`
      );
      // const response = await api.post(`/restaurant/ticket/${restName}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
