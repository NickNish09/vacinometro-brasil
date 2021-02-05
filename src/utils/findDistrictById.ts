import { District } from "../interfaces";

const findDistrictByIdAndDate = (
  districts: District[],
  id: string,
  dateString: string,
): District | undefined => {
  const district = districts.find(
    ({ state, date }) =>
      state.toLowerCase() === id.toLowerCase() && date === dateString,
  );

  return district;
};

export default findDistrictByIdAndDate;
