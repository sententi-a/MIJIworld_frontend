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
      const formData = new FormData();

      formData.append("date", dateToString(date));
      formData.append("name", ticketData.name);
      formData.append("company", ticketData.company);
      formData.append("note", ticketData.note);
      formData.append("message", ticketData.message);

      const data = {
        date,
        name: ticketData.name,
        company: ticketData.company,
        note: ticketData.note,
        message: ticketData.message,
      };

      const response = await api.post(`/restaurant/ticket/${restName}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
