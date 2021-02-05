import { District } from "../interfaces";

const filterDistrictsByDate = (
  districts: District[],
  dateString: string,
): District[] => districts.filter(({ date }) => date === dateString);

export default filterDistrictsByDate;
