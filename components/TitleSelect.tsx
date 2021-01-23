import { Select } from "antd";
import { SelectValue } from "../interfaces";
import brazilDistricts from "../lib/brazil-districts";

export type Props = {
  /* eslint-disable no-unused-vars */
  setDistrict: (name: string, id: string) => void;
  /* eslint-enable no-unused-vars */
};

const TitleSelect = ({ setDistrict }: Props) => {
  const { Option } = Select;

  function handleChange(selectedOption: SelectValue) {
    setDistrict(selectedOption.label, selectedOption.value);
  }

  return (
    <Select
      labelInValue
      onChange={handleChange}
      className="district-select"
      defaultValue={{ value: "todos", key: "todos", label: "todos" }}
    >
      <Option value="todos" className="district-option">
        Brasil (todos)
      </Option>
      {brazilDistricts.map((district) => (
        <Option value={district.stateId} className="district-option">
          {`${district.name} (${district.stateId})`}
        </Option>
      ))}
    </Select>
  );
};

export default TitleSelect;
