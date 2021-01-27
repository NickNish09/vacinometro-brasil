import { Select } from "antd";
import { SelectValue } from "../interfaces";
import brazilDistricts from "../lib/brazil-districts";

export type Props = {
  /* eslint-disable no-unused-vars */
  setDistrict: (name: string, id: string) => void;
  /* eslint-enable no-unused-vars */
  districtName: string;
  districtId: string;
};

const TitleSelect = ({ setDistrict, districtName, districtId }: Props) => {
  const { Option } = Select;

  function handleChange(selectedOption: SelectValue) {
    setDistrict(selectedOption.label, selectedOption.value);
  }

  return (
    <Select
      labelInValue
      onChange={handleChange}
      className="district-select"
      defaultValue={{ value: "total", key: "total", label: "total" }}
      value={{
        value: districtName,
        key: districtId,
        label: `${districtName}`,
      }}
    >
      <Option value="total" className="district-option">
        Brasil
      </Option>
      {brazilDistricts.map((district) => (
        <Option
          value={district.stateId}
          className="district-option"
          key={district.stateId}
        >
          {`${district.name} (${district.stateId})`}
        </Option>
      ))}
    </Select>
  );
};

export default TitleSelect;
