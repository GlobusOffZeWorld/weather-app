export const formatDate = (date: Date) => date.toLocaleDateString().split('.').reverse().join('-');
export const getForecastInterval = (interval: number) => {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + interval);
  return [startDate, endDate];
};
