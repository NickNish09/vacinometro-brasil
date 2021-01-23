import csv from "csvtojson";
import { CSV_DATA_INFO } from "../utils/constants";

export const getCasesData = async () => {
  const requestCSV = await fetch(CSV_DATA_INFO);
  const dataCSV = await requestCSV.text();
  const dataJSON = await csv().fromString(dataCSV);

  return dataJSON;
};
