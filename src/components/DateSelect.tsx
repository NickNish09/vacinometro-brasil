import DatePicker from "react-date-picker/dist/entry.nostyle";

export type Props = {
  /* eslint-disable no-unused-vars */
  setCasesDate: (date: Date) => void;
  /* eslint-enable no-unused-vars */
  currentCaseDate: Date | Date[];
  maximumDate: Date;
  minimumDate: Date;
};

const DateSelect = ({
  setCasesDate,
  currentCaseDate,
  maximumDate,
  minimumDate,
}: Props) => {
  function handleChange(selectedDate: Date | Date[]) {
    const date = Array.isArray(selectedDate) ? selectedDate[0] : selectedDate;
    setCasesDate(date);
  }

  return (
    <div className="dateContainer">
      <DatePicker
        onChange={(date) => date && handleChange(date)}
        value={currentCaseDate}
        className="dateField"
        maxDate={maximumDate}
        minDate={minimumDate}
      />
    </div>
  );
};

export default DateSelect;
