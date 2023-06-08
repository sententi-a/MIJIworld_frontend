import { Box, Text, Image, Input, Button } from "../common";
import DayPicker from "../common/DayPicker";
import dateToString from "../../utils/dateToString";
import useTicketForm from "../../hooks/useTicketForm";

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

  return (
    <Box style={{ position: "relative" }}>
      <Image
        src={require(`../../assets/images/restaurant/${restName}/ticket@2x.png`)}
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
          <>
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
          </>
        );
      })}
      <Button label="다운로드" size="small" />
    </Box>
  );
}
