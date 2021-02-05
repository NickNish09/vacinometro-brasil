import findDistrictByIdAndDate from "../../src/utils/findDistrictById";
import { fourDistricts } from "../../testHelpers/DistrictTestHelper";

describe("findDistrictByIdAndDate", () => {
  it("returns a of district by its ID and Date", () => {
    const districts = fourDistricts();
    const district = findDistrictByIdAndDate(districts, "df", "2020-01-20");

    expect(district?.state).toEqual("DF");
    expect(district?.date).toEqual("2020-01-20");
  });
});
