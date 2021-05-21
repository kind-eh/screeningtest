import axios from 'axios';

export const bankHolidays = () =>
  axios.get(`https://www.gov.uk/bank-holidays.json`);
