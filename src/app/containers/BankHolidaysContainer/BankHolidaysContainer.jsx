import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import { getHolidayValues } from './bankHolidays.helper';
import Select from '../../components/common/Select';
import Loader from '../../components/common/Loader';
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

  const { holidaysData, selectedCountry, loading } =
    useSelector(getBankHolidays);

  useEffect(() => {
    dispatch(fetchBankHolidays());
  }, [dispatch]);

  const handleChange = (ev) => {
    dispatch(setSelectedCountry(ev.target.value));
  };

  if (loading) {
    return <Loader />;
  }

  const { countryNames, allHolidays } = getHolidayValues(holidaysData);

  const holidayEvents = selectedCountry
    ? holidaysData[selectedCountry].events
    : allHolidays;

  return (
    <Container fluid>
      <Select
        items={countryNames}
        onChange={handleChange}
        defaultSelect="select a country"
      />
      <BankHolidayTable holidayEvents={holidayEvents} />
    </Container>
  );
};

export default BankHolidaysContainer;
