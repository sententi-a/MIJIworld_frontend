import { useMutation } from "react-query";
import { ticketApi } from "@apis/ticket";
// import ticketDataType from "@types/ticket";
import ticketDataType from "../types/ticket";

const useTicketUpload = (
  restName: string,
  date: Date,
  ticketData: ticketDataType
) => {
  return useMutation(() => ticketApi.postTicket(restName, date, ticketData));
};

export { useTicketUpload };
