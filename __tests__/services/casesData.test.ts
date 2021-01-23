import { getCasesData } from "../../services/casesData";

describe("getCasesData", () => {
  const fakeFetch = jest.fn();

  beforeEach(() => {
    window.fetch = fakeFetch;
    fakeFetch.mockReturnValue({
      text: () =>
        "country,state,totalCases,totalCasesMS,notConfirmedByMS,deaths,deathsMS,URL,deaths_per_100k_inhabitants,totalCases_per_100k_inhabitants,deaths_by_totalCases,recovered,suspects,tests,tests_per_100k_inhabitants,vaccinated,vaccinated_per_100k_inhabitants,date,newCases,newDeaths\n" +
        "Brazil,TOTAL,8761160,8753920,7240,215406,215243,https://covid.saude.gov.br/,10.172.383,413.739.055,2.459,7754675,3747143,30663982,1.448.083.011,462269,21.830.299,2021-01-22,54248,1035\n" +
        "Brazil,AC,45987,45987,0,846,846,http://saude.acre.gov.br/,9.592.544,521.432.985,1.840,39095,757,130353,1.478.034.095,4,45.355,2021-01-22,258,2",
    });
  });

  it("calls the api to get the CSV", async () => {
    await getCasesData();
    expect(fakeFetch).toHaveBeenCalled();
  });

  it("returns the cases data as a json", async () => {
    const casesData = await getCasesData();

    expect(casesData[0].state).toEqual("TOTAL");
    expect(casesData[1].state).toEqual("AC");
  });
});
