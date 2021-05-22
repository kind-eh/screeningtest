import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Select from '../../components/common/Select';
import BankHolidayTable from '../../components/bankHoliday/bankHoliday-table';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getBankHolidays,
  fetchBankHolidays,
  setSelectedCountry,
} from '../../../features/bankHolidaysSlice';

const BankHolidaysContainer = () => {
  const dispatch = useDispatch();

  const { holidaysData, selectedCountry } = useSelector(getBankHolidays);
  console.log('holidaysData', holidaysData);

  useEffect(() => {
    dispatch(fetchBankHolidays());
  }, [dispatch]);

  const handleChange = (ev) => {
    dispatch(setSelectedCountry(ev.target.value));
  };

  if (!holidaysData) {
    return '';
  }
  const countryNames = holidaysData && Object.keys(holidaysData);

  const holidayEvents = selectedCountry
    ? holidaysData[selectedCountry].events
    : [
        ...holidaysData[countryNames[0]].events,
        ...holidaysData[countryNames[1]].events,
        ...holidaysData[countryNames[2]].events,
      ];

  return (
    holidaysData && (
      <Container fluid>
        <Select data={countryNames} handleChange={handleChange} />
        <BankHolidayTable countryHolidays={holidayEvents} />
      </Container>
    )
  );
};

export default BankHolidaysContainer;
