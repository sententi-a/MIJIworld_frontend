import React from "react";
import { useState } from "react";

interface ticketDataType {
  name: string;
  company: string;
  note: string;
  message: string;
  // index signature
  [key: string]: string;
}

export default function useTicketForm() {
  const [date, setDate] = useState(new Date());
  const [ticketData, setTicketData] = useState<ticketDataType>({
    name: "",
    company: "",
    note: "",
    message: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: string
  ) => {
    setTicketData((prev) => ({ ...prev, [target]: e.target.value }));
  };

  const getTicketFormLabels = () => {
    const labels = [
      { name: "name", label: "이름" },
      { name: "company", label: "동행" },
      { name: "note", label: "노트" },
      { name: "message", label: "ETC" },
    ];

    return labels;
  };

  return {
    handleOnChange,
    getTicketFormLabels,
    ticketData,
    date,
    setDate,
  };
}
