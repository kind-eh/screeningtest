import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Select from '../../components/common/Select';
import Loader from '../../components/common/Loader';
import BankHolidayTable from '../../components/bankHoliday/bankHoliday-table';
import { STATUS_SUCCESS, STATUS_LOADING } from '../../constants/configuration';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getBankHolidays,
  fetchBankHolidays,
  setSelectedCountry,
} from '../../../features/bankHolidaysSlice';

const BankHolidaysContainer = () => {
  const dispatch = useDispatch();

  const { holidaysData, selectedCountry, status } =
    useSelector(getBankHolidays);

  useEffect(() => {
    dispatch(fetchBankHolidays());
  }, [dispatch]);

  const handleChange = (ev) => {
    dispatch(setSelectedCountry(ev.target.value));
  };

  if (status !== STATUS_SUCCESS) {
    return <Loader />;
  }
  const countryNames = Object.keys(holidaysData);

  const holidayEvents = selectedCountry
    ? holidaysData[selectedCountry].events
    : [
        ...holidaysData[countryNames[0]].events,
        ...holidaysData[countryNames[1]].events,
        ...holidaysData[countryNames[2]].events,
      ];

  return (
    <Container fluid>
      <Select data={countryNames} handleChange={handleChange} />
      <BankHolidayTable countryHolidays={holidayEvents} />
    </Container>
  );
};

export default BankHolidaysContainer;
