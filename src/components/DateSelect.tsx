import DatePicker from "react-date-picker/dist/entry.nostyle";

export type Props = {
  /* eslint-disable no-unused-vars */
  setCasesDate: (date: Date | Date[]) => void;
  /* eslint-enable no-unused-vars */
  currentCaseDate: Date | Date[];
};

const DateSelect = ({ setCasesDate, currentCaseDate }: Props) => {
  function handleChange(selectedDate: Date | Date[]) {
    setCasesDate(selectedDate);
  }

  return (
    <div className="dateContainer">
      <DatePicker
        onChange={(date) => date && handleChange(date)}
        value={currentCaseDate}
        className="dateField"
      />
    </div>
  );
};

export default DateSelect;
