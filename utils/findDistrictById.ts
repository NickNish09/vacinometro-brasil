import { District } from "../interfaces";

const findDistrictById = (
  districts: District[],
  id: string,
): District | undefined => {
  const district = districts.find(
    ({ state }) => state.toLowerCase() === id.toLowerCase(),
  );

  return district;
};

export default findDistrictById;
