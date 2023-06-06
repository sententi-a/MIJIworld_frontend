import React from "react";
import { useState } from "react";

export default function useTicketForm() {
  const [ticketData, setTicketData] = useState({
    date: new Date(),
    name: "",
    company: "",
    note: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
    setTicketData((prev) => ({ ...prev, [target]: e.target.value }));
  };

  const getTicketFormLabels = () => {
    const labels = {
      name: "이름",
      company: "동행",
      note: "노트",
      message: "ETC",
    };
    return labels;
  };

  const getTicketFormValues = () => {
    return ticketData;
  };

  return {
    onChange,
    getTicketFormLabels,
    getTicketFormValues,
  };
}
