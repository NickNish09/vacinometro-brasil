import { District } from "../src/interfaces";

export default function districtFactory(params?: Partial<District>): District {
  const defaultParams: District = {
    country: "Brazil",
    state: "DF",
    totalCases: 268394,
    totalCasesMS: 268394,
    notConfirmedByMS: 0,
    deaths: 4460,
    deathsMS: 4460,
    URL: "http://www.saude.df.gov.br/coronavirus/",
    deaths_per_100k_inhabitants: 147.91388,
    totalCases_per_100k_inhabitants: 8901.16567,
    deaths_by_totalCases: 0.01662,
    recovered: 257079,
    suspects: 68,
    tests: 771909,
    tests_per_100k_inhabitants: 25600.013,
    vaccinated: 15134,
    vaccinated_per_100k_inhabitants: 501.91227,
    date: "2021-01-22",
    newCases: 1054,
    newDeaths: 8,
    lastUpdated: new Date(),
  };

  return { ...defaultParams, ...params };
}
