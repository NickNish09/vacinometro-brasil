import findDistrictById from "../../utils/findDistrictById";
import { District } from "../../interfaces";
import districtFactory from "../../__factories__/districtFactory";

describe("findDistrictById", () => {
  it("returns a district by its ID", () => {
    const df = districtFactory({ state: "DF" });
    const ac = districtFactory({ state: "AC" });
    const districts: District[] = [df, ac];
    const district = findDistrictById(districts, "df");

    expect(district?.state).toEqual("DF");
  });
});
