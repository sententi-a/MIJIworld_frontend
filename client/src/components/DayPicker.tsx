import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/DayPicker.module.css";
import { Label } from "../components/CustomInput";

export default function DayPicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <div
      style={{
        width: "100%",
        margin: "5px",
        // display: "flex",
      }}
    >
      <Label>날짜</Label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        shouldCloseOnSelect
        className={styles.dayPicker}
        wrapperClassName={styles.wrapper}
        // inline
      />
    </div>
  );
}
