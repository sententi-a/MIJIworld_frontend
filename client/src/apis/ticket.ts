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
      const url = `/restaurant/ticket/${restName}?date=${dateToString(
        date
      )}&name=${ticketData.name}&company=${ticketData.company}&note=${
        ticketData.note
      }&message=${ticketData.message}`;

      const response = await api.get(url, { responseType: "blob" });

      const blob = new Blob([response.data], { type: "image/png" });

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `${restName}_ticket.png`;
      downloadLink.click();

      URL.revokeObjectURL(downloadLink.href);
      downloadLink.remove();

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
