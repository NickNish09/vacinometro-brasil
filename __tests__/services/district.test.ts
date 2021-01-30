import { getDistrictData } from "../../src/services/district";
import { formatedCvsDate } from "../../src/utils/formaters";

describe("getDistrictData", () => {
  const fakeFetch = jest.fn();

  beforeEach(() => {
    const mostRecentDate = new Date();
    mostRecentDate.setDate(mostRecentDate.getDate() - 1);
    window.fetch = fakeFetch;
    fakeFetch.mockReturnValue({
      text: () =>
        "country,date,state,totalCases,totalCasesMS,notConfirmedByMS,deaths,deathsMS,URL,deaths_per_100k_inhabitants,totalCases_per_100k_inhabitants,deaths_by_totalCases,recovered,suspects,tests,tests_per_100k_inhabitants,vaccinated,vaccinated_per_100k_inhabitants,newCases,newDeaths\n" +
        `Brazil,${formatedCvsDate(
          mostRecentDate,
        )},TOTAL,8761160,8753920,7240,215406,215243,https://covid.saude.gov.br/,10.172.383,413.739.055,2.459,7754675,3747143,30663982,1.448.083.011,462269,21.830.299,54248,1035\n` +
        `Brazil,${formatedCvsDate(
          mostRecentDate,
        )},AC,45987,45987,0,846,846,http://saude.acre.gov.br/,9.592.544,521.432.985,1.840,39095,757,130353,1.478.034.095,4,45.355,258,2`,
    });
  });

  it("returns the district data based on the id", async () => {
    const districtId = "AC";
    const districtData = await getDistrictData(districtId);
    expect(districtData.state).toEqual("AC");
  });
});
