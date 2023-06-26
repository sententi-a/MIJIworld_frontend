import React, { useCallback } from "react";
import { Box, Text, Image, Input, Button } from "@components/common";
import DayPicker from "@components/common/DayPicker";
import dateToString from "@utils/dateToString";
import useTicketForm from "@hooks/useTicketForm";
import { useTicketUpload } from "@hooks/queries/ticket";

interface TicketCardProps {
  restName: string;
}

export default function TicketCard({ restName }: TicketCardProps) {
  const {
    handleOnChange,
    getTicketFormLabels,
    ticketData,
    date,
    setDate,
    textPositions,
  } = useTicketForm();

  const uploadTicket = useTicketUpload(restName, date, ticketData);

  const handleDownloadClick = () => {
    uploadTicket.mutate();
  };

  return (
    <Box style={{ position: "relative" }}>
      <Image
        src={require(`@assets/images/restaurant/${restName}/ticket@2x.png`)}
        size="xlarge"
      />

      <DayPicker date={date} setDate={setDate} />
      <Text
        text={dateToString(date)}
        size="t6"
        bold={true}
        style={{ ...textPositions["date"] }}
      />
      {getTicketFormLabels().map((elem) => {
        return (
          <React.Fragment key={elem.label}>
            <Input
              label={elem.label}
              handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleOnChange(e, elem.name)
              }
            />
            <Text
              text={ticketData[elem.name]}
              style={{ ...textPositions[elem.name] }}
            />
          </React.Fragment>
        );
      })}
      <Button label="다운로드" size="small" onClick={handleDownloadClick} />
    </Box>
  );
}
