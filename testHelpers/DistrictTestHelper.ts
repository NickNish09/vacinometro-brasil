import districtFactory from "../__factories__/districtFactory";
import { District } from "../src/interfaces";

export const fourDistricts = (): District[] => {
  const df1 = districtFactory({ state: "DF", date: "2019-03-22" });
  const ac1 = districtFactory({ state: "AC", date: "2019-03-22" });
  const df2 = districtFactory({ state: "DF", date: "2020-01-20" });
  const ac2 = districtFactory({ state: "AC", date: "2020-01-20" });
  return [df1, ac1, df2, ac2];
};
