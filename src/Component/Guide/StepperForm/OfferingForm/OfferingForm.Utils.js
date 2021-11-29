export const calculatePercent = (total, number) => {
  let result = (total / 100) * number;
  return result;
};
export const calculateRealNumber = (total, percent) => {
  let result = (percent / 100) * total;
  return result;
};
export const theRest = (total, number) => {
  let result = total - number;
  return result;
};
