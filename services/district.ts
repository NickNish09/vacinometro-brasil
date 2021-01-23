import { District } from "../interfaces";

export const getDistrictData = (id: string): District => {
  const district: District = {
    id,
    name: "Distrito",
    totalVacinated: 10,
    lastUpdated: new Date(),
  };

  return district;
};
