export const getHolidayValues = (holidaysData) => {
  const countryNames = [];
  let allHolidays = [];

  holidaysData &&
    Object.keys(holidaysData).forEach((key) => {
      countryNames.push(key);
      allHolidays = allHolidays.concat(holidaysData[key].events);
    });

  return { countryNames, allHolidays };
};
