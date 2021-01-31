import csv from "csvtojson";
import { CSV_DATA_INFO } from "../utils/constants";
import { formatedCvsDate } from "../utils/formaters";
import { yesterday } from "../utils/dates";

export const getCasesData = async () => {
  const requestCSV = await fetch(CSV_DATA_INFO);
  const dataCSV = await requestCSV.text();
  const dataJSON = await csv().fromString(dataCSV);
  const filterdedDataJson = await dataJSON.filter(
    (row) => row.date === formatedCvsDate(yesterday()),
  );
  const cases = filterdedDataJson.map((district) => ({
    ...district,
    updatedAt: new Date().toString(),
  }));

  return cases;
};
