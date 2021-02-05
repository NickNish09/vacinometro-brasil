import { fourDistricts } from "../../testHelpers/DistrictTestHelper";
import filterDistrictsById from "../../src/utils/filterDistrictsById";

describe("filterDistrictsById", () => {
  it("returns a list of districts filtered by their ids", () => {
    const districts = fourDistricts();
    const filteredDistricts = filterDistrictsById(districts, "df");
    expect(filteredDistricts).toHaveLength(2);
    const map = filteredDistricts.map((it) => it.state);
    expect(map).toEqual(["DF", "DF"]);
  });
});
