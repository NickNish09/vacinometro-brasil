import { fourDistricts } from "../../testHelpers/DistrictTestHelper";
import filterDistrictsByDate from "../../src/utils/filterDistrictsByDate";

describe("filterDistrictsById", () => {
  it("returns a list of districts filtered by their ids", () => {
    const districts = fourDistricts();
    const filteredDistricts = filterDistrictsByDate(districts, "2019-03-22");
    expect(filteredDistricts).toHaveLength(2);
    const map = filteredDistricts.map((it) => it.date);
    expect(map).toEqual(["2019-03-22", "2019-03-22"]);
  });
});
