// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type District = {
  country: string;
  state: string;
  totalCases: number;
  totalCasesMS: number;
  notConfirmedByMS: number;
  deaths: number;
  deathsMS: number;
  URL: string;
  deaths_per_100k_inhabitants: number;
  totalCases_per_100k_inhabitants: number;
  deaths_by_totalCases: number;
  recovered: number;
  suspects: number;
  tests: number;
  tests_per_100k_inhabitants: number;
  vaccinated: number;
  vaccinated_per_100k_inhabitants: number;
  date: number;
  newCases: number;
  newDeaths: number;
  lastUpdated: Date;
};
