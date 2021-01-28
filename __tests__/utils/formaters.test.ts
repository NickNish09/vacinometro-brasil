import {
  formatedDate,
  formatedNumber,
  getPercentageBy100k,
} from "../../utils/formaters";

describe("formatedNumber", () => {
  it("returns a integer with dots separating miles", () => {
    expect(formatedNumber(123456789)).toEqual("123.456.789");
  });
});

describe("formatedDate", () => {
  it("returns the date formated", () => {
    const dateString =
      "Thu Jan 28 2021 17:59:44 GMT-0300 (Horário Padrão de Brasília)";
    expect(formatedDate(dateString)).toEqual("28/1/2021 às 17h59m44s");
  });
});

describe("getPercentageBy100k", () => {
  it("returns the percentage based on per100k number", () => {
    const numberPer100k = 100;
    expect(getPercentageBy100k(numberPer100k)).toEqual("0.10");
  });
});
