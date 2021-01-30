import { District } from "../interfaces";
import { getCasesData } from "./casesData";

export const getDistrictData = async (id: string): Promise<District> => {
  const casesData = await getCasesData();
  const districtData: District = casesData.find(
    ({ state }) => state.toLowerCase() === id.toLowerCase(),
  );
  return districtData;
};
