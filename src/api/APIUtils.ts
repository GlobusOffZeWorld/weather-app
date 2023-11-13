import { hourlyForecastResponse } from '@/types/api';

export const getRequiredHourlyProperties = (data: hourlyForecastResponse[]) => {
  const intervalsData = data.map((interval: hourlyForecastResponse) => {
    const {
      dt_txt: fullDate,
      main: { temp },
      weather: [{ description: conditions, main: icon }]
    } = interval;
    const datetime = fullDate.split(' ')[1];
    return { datetime, temp, conditions, icon };
  });

  return intervalsData;
};
