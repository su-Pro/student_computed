export const getScore = (suma) => {
  if (suma >= 80) {
    return 10;
  }
  if (suma >= 75) {
    return 8.5;
  }
  if (suma >= 70) {
    return 8;
  }
  if (suma >= 65) {
    return 7.5;
  }
  if (suma >= 60) {
    return 7;
  }
  if (suma >= 0) {
    return 5.5;
  }
  return 0;
};
