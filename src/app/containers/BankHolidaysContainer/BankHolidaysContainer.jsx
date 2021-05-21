import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getBankHolidays,
  fetchBankHolidays,
} from '../../../features/bankHolidaysSlice';

const BankHolidaysContainer = () => {
  const dispatch = useDispatch();

  const bankHolidays = useSelector(getBankHolidays);
  console.log('bankHolidays', bankHolidays);

  useEffect(() => {
    dispatch(fetchBankHolidays());
  }, [dispatch]);

  return <>test</>;
};

export default BankHolidaysContainer;
