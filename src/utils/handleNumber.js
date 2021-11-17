export const handleNumber = (number) => {
  if (number / 10000 < 1) {
    return number;
  }
  let value = Math.round(number / 100) / 10;
  return value + "K";
};
