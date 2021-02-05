import { District } from "../interfaces";

const filterDistrictsById = (districts: District[], id: string): District[] =>
  districts.filter(({ state }) => state.toLowerCase() === id.toLowerCase());

export default filterDistrictsById;
