import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/DayPicker.module.css";
import { Label } from "../components/CustomInput";
import ko from "date-fns/locale/ko";

interface DayPickerProps {
  selectedDate: Date | null;
  setSelectedDate: Function;
}

export default function DayPicker({
  selectedDate,
  setSelectedDate,
}: DayPickerProps) {
  return (
    <>
      <div
        style={{
          width: "50%",
          margin: "10px",
          marginTop: "30px",
        }}
      >
        <Label>날짜</Label>
        <DatePicker
          dateFormat={"yyyy년 M월 d일 (eee)"}
          locale={ko}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          shouldCloseOnSelect
          className={styles.dayPicker}
          wrapperClassName={styles.wrapper}
          // inline
        />
      </div>
    </>
  );
}
