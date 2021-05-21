import React, { useEffect } from 'react';

// Components
import BankHolidayTable from '../../components/bankHoliday/bankHoliday-table';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getBankHolidays,
  fetchBankHolidays,
} from '../../../features/bankHolidaysSlice';

const BankHolidaysContainer = () => {
  const dispatch = useDispatch();

  const { holidaysData } = useSelector(getBankHolidays);
  console.log('holidaysData', holidaysData);

  useEffect(() => {
    dispatch(fetchBankHolidays());
  }, [dispatch]);

  return (
    holidaysData && (
      <>
        <BankHolidayTable
          countryHolidays={holidaysData['england-and-wales'].events}
        />
      </>
    )
  );
};

export default BankHolidaysContainer;
