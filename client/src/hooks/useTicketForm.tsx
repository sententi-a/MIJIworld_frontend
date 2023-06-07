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

interface textPositionsType {
  [key: string]: React.CSSProperties;
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
      { name: "name", label: "Name" },
      { name: "company", label: "With" },
      { name: "note", label: "Note" },
      { name: "message", label: "Message" },
    ];

    return labels;
  };

  const textPositions: textPositionsType = {
    date: { position: "absolute", top: "8.5vw", left: "3.3vw" },
    name: {
      position: "absolute",
      top: "4vw",
      left: "39vw",
      overflow: "hidden",
    },
    company: {
      position: "absolute",
      top: "7.4vw",
      left: "39vw",
      overflow: "hidden",
    },
    note: {
      position: "absolute",
      top: "10.8vw",
      left: "39vw",
      overflow: "hidden",
    },
    message: {
      position: "absolute",
      top: "14.2vw",
      left: "39vw",
      overflow: "hidden",
    },
  };

  return {
    handleOnChange,
    getTicketFormLabels,
    ticketData,
    date,
    setDate,
    textPositions,
  };
}
