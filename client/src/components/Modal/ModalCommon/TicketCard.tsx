import React from "react";
import { Box, Text, Image, Input, Button } from "@components/common";
import DayPicker from "@components/common/DayPicker";
import dateToString from "@utils/dateToString";
import useTicketForm from "@hooks/useTicketForm";
import { useTicketUpload } from "@hooks/queries/ticket";
import { useColor } from "@hooks/queries/color";

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

  const { data: colorData } = useColor(restName);
  //TODO: 추상화하기
  return (
    <Box
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1.5vmax",
        backgroundColor: "#fcfcfc",
        paddingBottom: "20px",
      }}
    >
      <Image
        src={require(`@assets/images/restaurant/${restName}/ticket@2x.png`)}
        size="xlarge"
      />

      <DayPicker date={date} setDate={setDate} />
      <Text
        text={dateToString(date)}
        size="t7"
        style={{ ...textPositions["date"] }}
        bold={true}
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
              size="t7"
              style={{ ...textPositions[elem.name] }}
              bold={true}
            />
          </React.Fragment>
        );
      })}
      <Button
        label="다운로드"
        size="medium"
        onClick={handleDownloadClick}
        bgColor={colorData?.text_color}
        hoverColor={colorData?.text_color}
        style={{ marginTop: "1vh" }}
      />
    </Box>
  );
}
