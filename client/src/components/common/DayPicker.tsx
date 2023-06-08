import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import Input from "./Input";

interface DayPickerProps {
  date: Date | null;
  setDate: Function;
}

export default function DayPicker({ date, setDate }: DayPickerProps) {
  return (
    <>
      <DatePicker
        popperPlacement="bottom-start"
        closeOnScroll={true}
        dateFormat={"yy년 M월 d일 (eee)"}
        locale={ko}
        selected={date}
        onChange={(date) => setDate(date)}
        shouldCloseOnSelect
        customInput={
          <Input
            label="Date"
            size="medium"
            style={{ height: "35px", width: "31.3vw" }}
          />
        }
      />
    </>
  );
}
