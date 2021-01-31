export const yesterday = (): Date => {
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  return yesterdayDate;
};
